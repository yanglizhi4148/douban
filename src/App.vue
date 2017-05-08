<template>
  <div>
    <HeaderVue></HeaderVue>
    <router-view></router-view>
    <FooterVue></FooterVue>
  </div>
</template>
<script>
  import HeaderVue from '@/components/partials/Header.vue'
  import FooterVue from '@/components/partials/Footer.vue'
  export default {
    data(){
      return {}
    },
    components:{
      HeaderVue,
      FooterVue
    }
  }
</script>
<style>

</style>
