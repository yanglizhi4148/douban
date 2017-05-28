<template>
  <div class='tmpl' style='height:100%'>
    <mt-loadmore :bottom-method="loadBottom" :auto-fill="autoFill" :bottom-distance="size" :bottom-all-loaded="hasProduct">
      <ul class="mui-table-view mui-grid-view">
        <li class="mui-table-view-cell mui-media mui-col-xs-6" v-for="item in movieList.subjects" :key="item.id">
          <router-link :to="'/movie-detail'+item.id">
            <img class="mui-media-object" :src="item.images.large">
          </router-link>
          <div class="meta">
            <h4><span>{{item.title}}</span> <em>{{item.rating.average}}分</em></h4>
            <div class="otherinfo">类型:<span v-for='gen in item.genres' :key="gen.id">{{gen}}</span></div>
          </div>
        </li>
      </ul>
    </mt-loadmore>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        movieList: {
          subjects: []
        },
        autoFill: false,
        pageindex: 1,
        size: 70,
        hasProduct: false,
      }
    }, created() {
//      let url = '/api/getgoods?pageindex=' + this.pageindex;
      //发起请求获取数据
      this.$http.get('https://api.douban.com/v2/movie/coming_soon')
        .then(res => {
          this.products = res.body.message;

        }, res => {
          console.log('获取商品信息失败');
        });

    }, methods: { //组件创建以后，index就变成了第2页，以后你拉就拉第二页以后的部分
      //如果你拉错了,index不加，还是再从第二页拉
      loadBottom(id) {
        // 加载更多数据
        // this.allLoaded = true; // 若数据已全部获取完毕
        // this.$broadcast('onBottomLoaded', id);//vue2.0中没有了
        this.$http.get(`'https://api.douban.com/v2/movie/coming_soon'?pageindex=${this.pageindex}`)
          .then(res => {
            //如果当前没有商品，禁止下拉的行为
            // if (res.body.message.length === 0) this.hasProduct = true;
            //第二次或者以后的请求是成功的
            this.pageindex++;
            //追加数据
            this.products = this.products.concat(res.body.message);
          }, res => {
            console.log('拉取数据失败');
          });
      }
    }
  }
</script>
<style scoped>
  .mui-table-view.mui-grid-view .mui-table-view-cell > a:not(.mui-btn) {
    margin: 0px;
    padding: 0px;
    border: 1px solid #5c5c5c;
    box-shadow: 0 0 4px #666;
  }
  .tmpl {
    min-width: 1040px !important;
    background: #F5F5F5;
  }

  .tmpl .list {
    margin: 0 auto;
    padding: 20px 25px;
  }

  .tmpl .list ul {
    margin: 0 auto;
    width: 1080px;
    overflow: hidden;
  }

  .tmpl .list ul li {
    margin: 12px 5px;
    padding: 4px;
    float: left;
    background: #fff;
    transition: all .3s;
  }

  .tmpl .list ul li a {
    display: block;
  }

  .tmpl .list ul li a img {
    width: 194px;
    height: 275.828px;
  }

  .tmpl .list ul li .meta h4 {
    color: #555;
  }

  .tmpl .list ul li .meta h4 span {
    display: inline-block;
    max-width: 100px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  .tmpl .list ul li .meta h4 em {
    float: right;
    display: inline-block;
    color: #8c8c8c;
  }

  .tmpl .list ul li .meta .otherinfo {
    margin-top: 3px;
    color: #7E7E7E;
  }

  .tmpl .list ul li .meta .otherinfo span {
    margin-left: 4px;
    padding: 1px 3px;
    color: #999;
    background: #e6e6e6;
    font-size: 12px;
  }

  .tmpl .list ul li:hover {
    box-shadow: 0 10px 15px rgba(0, 0, 0, 0.4);
  }

  .tmpl .list ul:after,
  .tmpl .list ul:after {
    content: ".";
    display: block;
    height: 0;
    clear: both;
    visibility: hidden;
  }
  .mui-table-view.mui-grid-view .mui-table-view-cell .mui-media-object {
    height: 200px;
  }
</style>
