import Vue from 'vue';
import Router from 'vue-router';
import Home from '../components/Home';

Vue.use(Router);

export default new Router({
  routes: [
    {
      name: 'Home',
      path: '/home',
      component: Home
    },
    {
      path: '/',
      name: 'default',
      redirect:'/home'
    },
  ]
})
