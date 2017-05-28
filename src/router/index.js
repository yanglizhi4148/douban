import Vue from 'vue';
import Router from 'vue-router';
import Home from '../components/Home.vue';
import Search from '../components/movie/Search.vue';
import TOP250 from '../components/movie/Top250.vue';
import ComingSoon from '../components/movie/ComingSoon.vue';

Vue.use(Router);

export default new Router({
  linkActiveClass:'mui-active',
  routes: [
    {
      name: 'Home',
      path: '/Home',
      component: Home
    },
    {
      path: '/',
      name: 'default',
      redirect:'/Home'
    },
    {
      path:'/movie/Search',
      name:'Search',
      component:Search
    },
    {
      path:'/movie/Top250',
      name:'TOP250',
      component:TOP250
    },
    {
      path:'/movie/ComingSoon',
      name:'ComingSoon',
      component:ComingSoon
    }
  ]
})
