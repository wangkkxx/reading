<template>
    <div class="app-article">
        <header>
            <h4>书评正文</h4>
            <router-link to="/home"><span class="mui-icon mui-icon-back back"></span></router-link>
        </header>
        <div class="content" :id="this.cid">
            <h4 class="title">{{article.title}}</h4>
            <div class="ath">
                <div class="at">
                    <img :src='article.pic' class="aimg"/>
                    <span class="mui-icon mui-icon-plusempty badge"></span>
                    <p class="author">{{article.uname}}</p>
                    <p class="intro">{{article.intro}}</p>
                </div>
                <button>关注</button>
            </div>
            <div>
                <img :src='article.img' class="bimg"/>
                <div class="text">{{article.content}}</div>
            </div>
        </div>
        <footer>
            <router-link to="#">
                <img src="../../img/share.png" class="btab"/>
            </router-link>
            <router-link to="#">
                <img src="../../img/save.png" class="btab"/>
            </router-link>
            <router-link :to="'/home/article/comment?cid='+this.cid">
                <img src="../../img/comment.png" class="btab"/>
            </router-link>
        </footer>
    </div>
</template>
<script>
    export default{
        data(){
            return {article:{},cid:this.$route.query.cid}
        },
        methods:{
            getArticle(){
                var url="cardlist"
                this.$http.get(url).then(result=>{
                    this.article=result.body[this.cid-1]
                })
            }
        },
        created(){
            this.getArticle()
        }
    }
</script>
<style>
    .app-article{
        position:relative;
        color:#444;
    }
    .app-article header{
        width:100%;
        height:40px;
        border-bottom:1px solid #999;
        position:fixed;
        background:#f2f2f2;
    }
    .app-article header h4{
        text-align:center;
        line-height:30px;
        font-size:16px;
    }
    .app-article header .back{
        color:#999;
        position:relative;
        top:-32px;
        left:5px;
    }
    .app-article .content{
        padding:50px 15px 0 15px;
    }
    .app-article .content .title{
        font-size:16px;
        font-weight:normal;
        line-height:32px;
    }
    .app-article .content .aimg{
        width:40px;
        border-radius:50%;
    }
    .app-article .content .ath{
        display:flex;
        justify-content:space-between;
        margin-bottom:10px;
    }
    .app-article .content .ath button{
        height:30px;
        border-radius:30px;
    }
    .app-article .content .badge{
        background:orange;
        color:#fff;
        width:20px;
        height:20px;
        line-height:20px;
        text-align:center;
        border-radius:50%;
        font-size:18px;
        margin-left:-15px;
        margin-top:20px;
    }
    .app-article .content .at img,.at span,.at p{
        float:left;
    }
    .app-article .content .author{
        color:#444;
    }
    .app-article .content .author{
        margin-left:10px;
    }
    .app-article .content .intro{
        font-size:12px;
        width:50%;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        position:absolute;
        left:70px;
        margin-top:20px;
    }
    .app-article .content .text{
        font-size:14px;
    }
    .app-article .content .bimg{
        width:100%;
    }
    .app-article footer{
        width:100%;
        height:44px;
        position:fixed;
        bottom:0;
        border-top:1px solid #999;
        display:flex;
        justify-content:space-around;
    }
    .app-article footer .btab{
        width:25px;
        margin-top:8px;
    }
</style>