<template>
    <div class="app-my">
        <header>
            <router-link to="#" class="update">编辑</router-link>
        </header>
        <div class="content">
            <div class="top">
                <h3 class="myname">我的笔名</h3>
                <router-link to="#"><img src="../../img/logo.jpg" class="mpic"/></router-link>
                <router-link to="#" class="vip">
                    <img src="../../img/hy1.png"/>开通Turbo会员<span class="mui-icon mui-icon-arrowthinright"></span>
                </router-link>
            </div>
            <div>
                <router-link to="#">
                    
                </router-link>
            </div>
        </div>
        <tab></tab>
    </div>
</template>
<script>
    import Tabbar from './tabbar.vue'
    export default{
        data(){
            return {}
        },
        methods:{

        },
        created(){
            
        },
        components:{
            "tab":Tabbar   
        }
    }
</script>
<style>
    .app-my{
        text-align:center;
        position:relative;
        color:#444;
    }
    .app-my header{
        position:fixed;
        top:0;
        height:40px;
        width:100%;
    }
    .app-my header .update{
        font-size:14px;
        color:#D8671C;
        float:right;
        margin-right:15px;
        margin-top:10px;
    }
    .app-my .content{
        margin-top:50px;
        padding:0 15px;
        position:relative;
    }
    .app-my .content .myname{
        font-weight:normal;
        position:absolute;
        left:15px;
    }
    .app-my .content .mpic{
        width:60px;
        height:60px;
        border-radius:50%;
        position:absolute;
        right:15px;
    }
    .app-my .content .vip{
        color:#F5AB16;
        display:inline-block;
        padding:3px 10px;
        border:1px solid #F5AB16;
        border-radius:5px;
        position:absolute;
        left:15px;
        top:50px;
    }
    .app-my .content .vip img{
        width:20px;
        margin-right:5px;
        vertical-align:bottom;
    }
    .app-my .content .mui-table-view{
        top:100px;
        background:#efeff4;
    }
    
</style>