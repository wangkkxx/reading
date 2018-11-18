<template>
    <div class="app-comment">
        <header>
            <h4>评论</h4>
            <span @click="back()" class="mui-icon mui-icon-back back"></span>
        </header>
        <div class="content">
            <p class="zj">最近评论(2)</p>
            <div class="sec" v-for="item in comment" :key="item.tid">
                <div class="head">
                    <div class="lf">
                        <img :src="item.cpic" class="uimg"/>
                        <p>
                            <span class="uname">{{item.uname}}</span><br>
                            <span class="time">{{item.time}}</span>
                        </p>
                    </div>
                    <p class="rt">
                        <b>{{item.zan}}</b>
                        <span class="mui-icon-extra mui-icon-extra-like"></span>
                    </p>
                </div>
                <div class="cmt">{{item.comment}}</div>
            </div>
        </div>
        
    </div>
</template>
<script>
    export default{
        data(){
            return {comment:{},cid:this.$route.query.cid}
        },
        methods:{
            getComment(){
                var url="http://127.0.0.1:9000/commentlist?cid="+this.cid
                this.$http.get(url).then(result=>{
                    this.comment=result.body
                })
            },
            back(){
                this.$router.go(-1)
            }
        },
        created(){
            this.getComment()
        }
    }
</script>
<style>
    .app-comment{
        position:relative;
        color:#444;
    }
    .app-comment header{
        width:100%;
        height:40px;
        border-bottom:1px solid #999;
        position:fixed;
        background:#f2f2f2;
    }
    .app-comment header h4{
        text-align:center;
        line-height:30px;
        font-size:16px;
    }
    .app-comment header .back{
        color:#999;
        position:relative;
        top:-32px;
        left:5px;
    }
    .app-comment .content{
        margin:0 15px;
        padding-top:50px;
       
    }
    .app-comment .content .sec{
        border-bottom:1px solid #999;
        margin-top:20px;
    }
    .app-comment .head{
        display:flex;
        justify-content:space-between;
    }
    .app-comment .head .lf img,.lf>p{
        float:left;
    }
    .app-comment .head .lf .uname{
        color:#49885a;
        font-size:14px;
    }
    .app-comment .head .lf .time{
        font-size:10px;
    }
    .app-comment .content .zj{
        font-size:16px;
        color:#444;
    }
    .app-comment .content .uimg{
        width:35px;
        border-radius:50%;
        margin-right:10px;
    }
    .app-comment .rt .mui-icon-extra.mui-icon-extra-like{
        font-size:14px;
    }
    .app-comment .rt b{
        font-weight:normal;
        color:#49885a;
    }
    .app-comment .content .cmt{
        margin-top:-10px;
        padding:0 10px 10px 45px;
        box-sizing:border-box;
        word-wrap:break-word;
        word-break:normal;
        line-height:1.5em;
        font-size:14px;
    }
</style>