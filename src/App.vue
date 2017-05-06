<template>
    <div>
        <HeaderVue></HeaderVue>
        <router-view></router-view>
    </div>
</template>
<script type="text/ecmascript-6">
    import HeaderVue from './components/partials/head.vue';
    export default {
        data(){
            return {}
        },
        components:{
            HeaderVue
        }
    }
</script>
<style>

</style>
