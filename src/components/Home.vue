<template>
  <div id="home">
    <mt-header fixed title="固定在顶部"></mt-header>
    <div class="sroll-nav-bar">
      <ul>
        <li
        @click='tabChange' data-key='1'>咨询</li>
        <li
        @click='tabChange' data-key='2'>新闻</li>
        <li
        @click='tabChange' data-key='3'>热门</li>
        <li
        @click='tabChange' data-key='4'>推单</li>
      </ul>
    </div>
    <div class="content-wrapper">
      <section>{{content}}</section>
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
  data: {
    content: new Consult()
  },
  props: {},
  methods: {
    tabChange: function(e) {
      switch(e.target.getAttribute('data-key')) {
        case '1':
        this.content = Consult;
        break;
        case '2':
        this.content = News;
        break;
        case '3':
        this.content = Hot;
        break;
        case '4':
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
