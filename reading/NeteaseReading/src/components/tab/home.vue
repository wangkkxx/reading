<template>
    <div class="app-home">
        <header>
            <h4>首页</h4>
            <a href="#" class="common">写书评</a>
        </header>
        <router-link :to="'/home/article?cid='+item.cid" class="mui-card" v-for="item in list" :key="item.cid">
            <div class="mui-card-header mui-card-media">
                <img :src="item.pic">
                <div class="mui-media-body">
                    <span class="name">{{item.uname}}</span>
                    <span class="time">发表于 {{item.time}}</span>
                </div>
            </div>
            <div class="mui-card-content">
                <img :src="item.img" alt="" width="100%">
            </div>
            <div class="mui-card-footer">
                <p class="title">{{item.title}}</p>
                <p class="subtitle">{{item.subtitle}}</p>
                <p class="bt">
                    <span><b class="read">{{item.click}}</b>点击<i class="dot"></i><b class="subtitle">{{item.keyword}}</b></span>
                    <span><b class="zan">{{item.zan}}</b><span class="mui-icon-extra mui-icon-extra-like"></span></span>
                </p>
            </div>
        </router-link>
        <tab></tab>
    </div>
</template>
<script>
    import Tabbar from './tabbar.vue'
    export default{
        data(){
            return {list:[]}
        },
        methods:{
            getCardList(){
                var url="cardlist"
                this.$http.get(url).then(result=>{
                    this.list=result.body
                })
            },
        },
        created(){
            this.getCardList()
        },
        components:{
            "tab":Tabbar   
        }
    }
</script>
<style>
    .app-home{
        position:relative;
        padding:40px 0 0 0;
    }
    .app-home header{
        position:fixed;
        top:0;
        z-index:10;
        background:#f2f2f2;
        height:40px;
        width:100%;
        border-bottom:1px solid #999;
        text-align:center;
    }
    .app-home header h4{
        font-size:16px;
        line-height:30px;
        color:#D8671C;
    }
    .app-home header a.common{
        color:#D8671C;
        font-size:14px;
        float:right;
        border:1px solid #D8671C;
        border-radius:12px;
        padding:1px 8px;
        margin:-32px 10px 0 0;
    }
    .app-home .mui-card-header,.app-home div.mui-card-footer{
        position:static;
    }
    .app-home .mui-card-footer{
        display:block;
    }
    .app-home .mui-card-footer p.title{
        font-size:16px;
        color:#333;
    }
    .app-home .mui-card-footer p.bt{
        display:flex;
        justify-content:space-between;
        margin-bottom:0;
    }
    .app-home .mui-card-header img{
        border-radius:50%;
        position:relative;
        top:-4px;
    }
    .app-home .mui-card-header.mui-card-media span{
        font-size:14px;
        line-height:28px;
    }
    .app-home .mui-card-header.mui-card-media span.time{
        font-size:8px;
        float:right;
        color:#999;
    }
    .app-home b{
        font-weight:normal;
        margin-right:3px;
    }
    .app-home .mui-icon-extra.mui-icon-extra-like{
        font-size:12px;
    }
    .app-home i.dot{
        display:inline-block;
        width:4px;
        height:4px;
        margin:0 5px;
        background:#999;
        border-radius:4px;
        position:relative;
        top:-3px;
    }
</style>