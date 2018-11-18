<template>
    <div class="app-list">
        <header>
            <router-link to="/book" class="mui-icon mui-icon-back back"></router-link>
            <div class="nav">
                <span class="r" @click="fn(1)" :class="id==1?'active':''">七日在读榜</span>
                <span class="r" @click="fn(2)" :class="id==2?'active':''">七日上升榜</span>
            </div>
        </header>
            <div class="content">
                <router-link to="#" class="bk" v-for="item in books" :key="item.bid">
                    <img :src="item.bpic"/>
                    <span class="bname">{{item.bname}}</span>
                </router-link>
            </div>
        
    </div>
</template>
<script>
    export default{
        data(){
            return {books:[],id:1}
        },
        methods:{
            fn(id){
                this.id=id
                var url="bfbook?nid="+id
                this.$http.get(url).then(result=>{
                    console.log(result.body)
                    this.books=result.body
                })
            }
        },
        created(){
            this.fn(1)
        }
    }
</script>
<style>
    .app-list{
        position:relative;
        color:#444;
    }
    .app-list header{
        width:100%;
        height:40px;
        border-bottom:1px solid #999;
        position:fixed;
        top:0;
        background:#f2f2f2;
    }
    .app-list header .nav{
        text-align:center;
        line-height:0px;
    }
    .app-list header .r{
       padding:6px 10px;
       color:#999;
    }
    .app-list header .r.active{
        border-bottom:1px solid #D8671C;
        color:#D8671C;
    }
    .app-list header .back{
        color:#999;
        position:relative;
        top:10px;
        left:5px;
    }
    .app-list .content{
        display:flex;
        justify-content:space-between;
        flex-flow:wrap;
        margin-top:50px;
        padding:0 15px;
    }
    .app-list .content .bk{
        width:100px;
        display:block;
        margin-bottom:15px;
    }
    .app-list .content .bk img{
        width:100%;
        height:148px;
    }
    .app-list .content .bk .bname{
        width:100px;
        height:40px;
        display:inline-block;
        overflow: hidden;
        text-overflow: ellipsis;
        color:#444;
        font-size:12px;
    }
</style>