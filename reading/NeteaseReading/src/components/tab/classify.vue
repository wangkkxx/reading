<template>
    <div class="app-class">
        <header>
            <router-link to="/classify/search" class="search"><span class="mui-icon mui-icon-search"><b>搜索</b></span></router-link>
            <span class="mui-icon mui-icon-extra mui-icon-extra-sweep"></span>
        </header>
        <div class="tj">
            <router-link to="#" class="reading t">
                <h4 class="title">在读榜</h4>
                <p class="subtitle">Top List</p>
                <img src="../../img/01.jpg"/>
            </router-link>
            <router-link to="#" class="new t">
                <h4 class="title">新书榜</h4>
                <p class="subtitle">New Release</p>
                <img src="../../img/02.jpg"/>
            </router-link>
        </div>
        <div class="fl">
            <hr class="line"/>
            <span>分&nbsp;&nbsp;类</span>
        </div>
        <div class="card">
            <router-link :to="'/classify/subclass?fid='+item.fid" class="c c1" v-for="item in list" :key="item.fid">
                <h4 class="title">{{item.fname}}</h4>
                <img :src="item.fpic"/>
            </router-link>
        </div>
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
            getClassifyCard(){
                var url="classify"
                this.$http.get(url).then(result=>{
                    this.list=result.body
                })
            }
            
        },
        created(){
            this.getClassifyCard()
        },
        components:{
            "tab":Tabbar   
        }
    }
</script>
<style>
    .app-class{
        position:relative;
        padding:40px 15px 0;
    }
    .app-class header{
        position:fixed;
        top:0;
        height:40px;
        width:100%;
    }
    .app-class header .search{
        display:inline-block;
        width:83%;
        height:30px;
        background:#e0e0e0;
        border-radius:30px;
        margin-top:5px;
        font-size:12px;
        color:#999;
        text-align:center;
        line-height:30px;
    }
    .app-class header .search span{
        font-size:16px;
        margin:0 auto;
    }
    .app-class header .search span b{
        font-weight:normal;
        font-size:14px;
    }
    .app-class header>span{
        float:right;
        margin:8px 30px 0 0;
    }
    .app-class .tj{
        display:flex;
        justify-content:space-between;
        margin-top:10px;
    }
    .app-class .tj>.t{
        width:48%;
        height:100px;
        text-align:center;
        position:relative;
    }
    .app-class .tj>.t img{
        width:100%;
        position:absolute;
        top:0;
        left:0;
        z-index:-1;
        filter:brightness(0.6);
        border-radius:5px;
    }
    .app-class .tj>.t h4.title{
        color:#fff;
        text-align:center;
        margin-top:30px;
        letter-spacing:14px;
        margin-left:10px;
    }
    .app-class .tj>.t .subtitle{
        color:#fff;
        letter-spacing:2px;
        font-size:12px;
    }
    .app-class .fl{
        position:relative;
        margin:20px 0;
    }
    .app-class .fl .line{
        width:100%;
    }
    .app-class .fl span{
        position:absolute;
        top:-10px;
        left:50%;
        margin-left:-30px;
        width:60px;
        font-size:12px;
        background:#f2f2f2;
        text-align:center;
        color:#999;
    }
    .app-class .card{
        display:flex;
        justify-content:space-between;
        flex-flow:wrap;
    }
    .app-class .card .c{
        width:31%;
        height:100px;
        border-radius:5px;
        position:relative;
        margin-bottom:20px;
    }
    .app-class .card .c h4{
        font-size:14px;
        color:#fff;
        letter-spacing:1px;
        margin:10px;
    }
    .app-class .card .c img{
        width:100%;
        position:absolute;
        top:0;
        z-index:-1;
        border-radius:5px;
        filter:brightness(0.6);
    }
</style>