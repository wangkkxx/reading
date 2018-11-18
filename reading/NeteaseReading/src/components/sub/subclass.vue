<template>
    <div class="app-subclass">
        <header>
            <h4>{{info.fname}}</h4>
            <router-link to="/classify" class="mui-icon mui-icon-back back"></router-link>
        </header>

        <div class="top">
            <img src="../../img/bg1.png" class="bg"/>
            <p class="txt">{{info.quote}}</p>
            <div class="at">
                <img :src="info.apic" class="apic"/>
                <span class="pa">{{info.author}}</span>
                <img src="../../img/rz1.png" class="rz"/>
            </div>
        </div>
        <div class="content">
            <nav>
                <span class="a" v-for="item in bf" :key="item.nid" @click.prevent="getBook(item.nid)" :class="nid==item.nid?active:''">{{item.nname}}</span>
            </nav>
            <div class="books">
                <router-link to="#" class="bk" v-for="item in blist" :key="item.bid">
                    <img :src="item.bpic"/>
                    <span class="bname">{{item.bname}}</span>
                </router-link>
            </div>
        </div>
    </div>
</template>
<script>
    export default{
        data(){
            return {
                fid:this.$route.query.fid,
                info:{},
                bf:[],
                nid:1,
                blist:[],
                active:"active"
            }
        },
        methods:{
            getClassifyInfo(){
                var url="classifyinfo?fid="+this.fid
                this.$http.get(url).then(result=>{
                    this.info=result.body[0]
                })
            },
            getBookFamily(){
                var url="bookfamily"
                this.$http.get(url).then(result=>{
                    this.bf=result.body
                })
            },
            getBook(id){
                this.nid=id;
                var url="book?fid="+this.fid
                this.$http.get(url).then(result=>{
                    this.blist=[];
                    for(var item of result.body){
                        if(id==item.nid){
                            this.blist.push(item);
                        }
                    }
                })
                
            }
        },
        created(){
            this.getClassifyInfo()
            this.getBookFamily()
            this.getBook(this.nid)
        }
    }
</script>

<style>
    .app-subclass{
        position:relative;
        color:#444;
    }
    .app-subclass header{
        width:100%;
        height:40px;
        border-bottom:1px solid #999;
        position:fixed;
        background:#f2f2f2;
        z-index:10;
    }
    .app-subclass header h4{
        text-align:center;
        line-height:30px;
        font-size:16px;
    }
    .app-subclass header .back{
        color:#999;
        position:relative;
        top:-32px;
        left:5px;
    }
    .app-subclass .top{
        padding:50px 15px 30px 15px;
        position:relative;
    }
    .app-subclass .top .bg{
        width:50px;
    }
    .app-subclass .top .txt{
        color:#444;
        font-size:14px;
        padding-left:15px;
        line-height:28px;
        margin-top:-20px;
    }
    .app-subclass .top .at .apic{
        width:25px;
        border-radius:50%;
        vertical-align:bottom;
    }
    .app-subclass .top .at .pa{
        font-size:14px;
        color:#999
    }
    .app-subclass .top .at .rz{
        vertical-align:middle;
    }
    .app-subclass .top .at{
        position:absolute;
        right:15px;
    }
    .app-subclass .content{
        padding:0 15px;
        font-size:14px;
    }
    .app-subclass .content nav .a{
        margin-right:15px;
    }
    .app-subclass .content nav span.active{
        color:#F5AB16;
    }
    .app-subclass .content .books{
        display:flex;
        justify-content:space-between;
        flex-flow:wrap;
        margin-top:20px;
    }
    .app-subclass .content .books .bk{
        width:100px;
        display:block;
        margin-bottom:15px;
    }
    .app-subclass .content .books .bk img{
        width:100%;
        height:148px;
    }
    .app-subclass .content .books .bk .bname{
        width:100px;
        height:40px;
        display:inline-block;
        overflow: hidden;
        text-overflow: ellipsis;
        color:#444;
        font-size:12px;
    }
</style>