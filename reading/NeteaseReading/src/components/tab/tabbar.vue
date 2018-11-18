<template>
  <div class="app-tab">
    <router-view/>
    <nav class="mui-bar mui-bar-tab">
        <router-link to="/home" class="mui-tab-item" href="#tabbar">
            <span class="mui-icon mui-icon-home"></span>
            <span class="mui-tab-label">首页</span>
        </router-link>
        <router-link to="/classify" class="mui-tab-item">
            <span class="mui-icon mui-icon-extra mui-icon-extra-class"></span>
            <span class="mui-tab-label">分类</span>
        </router-link>
        <router-link to="/book" class="mui-tab-item" href="#tabbar-with-contact">
            <span class="mui-icon mui-icon-extra mui-icon-extra-xiaoshuo"></span>
            <span class="mui-tab-label">书桌</span>
        </router-link>
        <router-link to="/my" class="mui-tab-item" href="#tabbar-with-map">
            <span class="mui-icon mui-icon-person"></span>
            <span class="mui-tab-label">我</span>
        </router-link>
    </nav>
  </div>
</template>

<script>
    export default {
    
    }
</script>

<style>
  .app-tab nav a{
    font-size:12px;
    color:#999;
  }
</style>