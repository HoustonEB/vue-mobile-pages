<template>
  <div id="app">
    <!-- 路由出口 -->
    <!-- 路由匹配到的组件将渲染在这里 -->
    <transition :name="transitionName">
      <router-view></router-view>
    </transition>
    <Footer/>
  </div>
</template>

<script>
import Footer from "./components/Footer/index.vue";

export default {
  name: "app",
  data: function() {
    return {
      transitionName: 'slide-left'
    }
  },
  components: {
    Footer
  },
  watch: {
    $route(to, from) {
      const toDepth = to.path.split("/").length;
      const fromDepth = from.path.split("/").length;
      this.transitionName = toDepth < fromDepth ? "slide-right" : "slide-left";
    }
  }
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

ul li {
  list-style: none;
}

a {
  text-decoration: none;
  color: #34495e;
  -webkit-tap-highlight-color:rgba(0,0,0,0);
}

.slide-left {
  left: 0px;
  position: absolute;
  transition: all 2s;
  background-color: #000;
}
</style>
