import Vue from 'vue';
import VueRouter from 'vue-router';
// import VueResource from 'vue-resource';
import MintUi from 'mint-ui';
import VueMui from 'vue-mui';
// import 'mint-ui/lib/style.css';

//引入mui
// import './assets/render/mui/dist/css/mui.css';

//引入自己的文件
import App from './app.vue';
// import Home from './components/home/home.vue';

//安装插件
Vue.use(VueRouter);
// Vue.use(VueResource);
Vue.use(MintUi);

//引入路由
import routes from './router';
//创建路由对象并配置
let router = new VueRouter({
    routes
});

//创建vue实例
new Vue({
    el: '#app',
    router,
    render: c => c(App)
});
