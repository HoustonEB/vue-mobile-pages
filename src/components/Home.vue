<template>
  <div id="home">
    <mt-header fixed title="固定在顶部"></mt-header>
    <div class="sroll-nav-bar">
      <ul>
        <li v-for="item in navList" :key="item.key" @click="tabChange(item.key)">{{item.title}}</li>
      </ul>
    </div>
    <div class="content-wrapper">
      <section><component v-bind:is="content"></component></section>
    </div>
    <Footer/>
  </div>
</template>

<script>
import Consult from './Consult/index.vue';
import News from './News/index.vue';
import Hot from './Hot/index.vue';
import Bill from './Bill/index.vue';
import Footer from './Footer/Footer.vue';
export default {
  name: "Home",
  components: {
    Consult,
    News,
    Hot,
    Bill,
    Footer
  },
  data: function() {
    return {
      navList: [
        {key: 0, title: '咨询'},
        {key: 1, title: '新闻'},
        {key: 2, title: '热门'},
        {key: 3, title: '推单'},
      ],
    content: Consult
    }
  },
  props: {},
  methods: {
    tabChange: function(key) {
      switch(key) {
        case 0:
        this.content = Consult;
        break;
        case 1:
        this.content = News;
        break;
        case 2:
        this.content = Hot;
        break;
        case 3:
        this.content = Bill;
        break;
        default:
        this.content = Consult;
      }
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang='less'>
.sroll-nav-bar {
  width: 100%;
  height: 80px;
  padding-top: 40px;
  background-color: rgb(200, 226, 84);

  ul {
    width: 100%;
    height: 100%;
    display: flex;
    // flex-direction: row-reverse;

    li {
      flex: 1;
      width: 100px;
      height: 100%;
      line-height: 40px;
      text-align: center;
      color: #fff;
      transition: all 0.3s;

      &:hover {
        box-shadow: 0 2px 2px #333;
      }
    }
  }
}
</style>
