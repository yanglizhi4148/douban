import Vue from 'vue';
import VueRouter from 'vue-router';
import VueResource from 'vue-resource';
import App from './App';
import router from './router';
import MintUi from 'mint-ui';
import 'mint-ui/lib/style.css';
import 'muiv3/dist/css/mui.css';

Vue.config.productionTip = false;

//安装插件
Vue.use(MintUi);
Vue.use(VueRouter);
Vue.use(VueResource);

//创建Vue实例对象
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
});
