<template>
    <div class="app-book">
        <header>
            <h4>书桌</h4>
            <span class="sort">整理</span>
        </header>
        <div class="content">
            <div class="signout">
                <router-link to="/book/list">
                    <img src="../../img/book3.png" class="find"/>
                    <p>发现更多好书<span class="mui-icon mui-icon-arrowthinright"></span></p>
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
    .app-book{
        text-align:center;
        position:relative;
    }
    .app-book header{
        position:fixed;
        top:0;
        height:40px;
        width:100%;
        border-bottom:1px solid #999;
    }
    .app-book header h4{
        font-size:16px;
        line-height:30px;
        color:#D8671C;
    }
    .app-book header .sort{
        color:#D8671C;
        font-size:16px;
        float:right;
        margin:-31px 15px 0 0;
    }
    .app-book .content{
        margin-top:50px;
    }
    .app-book .content .signout{
        padding:100px 0;
    }
    .app-book .content .find{
        width:100px;
        opacity:0.5;
        margin-bottom:20px;
    }

</style>