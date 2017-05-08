<template>
  <div>
    <nav class="mui-bar mui-bar-tab">
      <router-link to='/home' class="mui-tab-item" href="#tabbar">
        <span class="mui-icon mui-icon-home"></span>
        <span class="mui-tab-label">正在热映</span>
      </router-link>
      <router-link to='/' class="mui-tab-item" href="#tabbar-with-chat">
        <span class="mui-icon mui-icon-videocam"></span>
        <span class="mui-tab-label">即将上映</span>
      </router-link>
      <router-link to='/' class="mui-tab-item" href="#tabbar-with-chat">
        <span class="mui-icon mui-icon-eye"></span>
        <span class="mui-tab-label">TOP250</span>
      </router-link>
      <router-link to='/' class="mui-tab-item" href="#tabbar-with-chat">
        <span class="mui-icon mui-icon-search"></span>
        <span class="mui-tab-label">搜索</span>
      </router-link>
    </nav>
  </div>
</template>
<script type="text/ecmascript-6">
  export default {
    data(){
      return {

      }
    }
  }
</script>
<style>
</style>
