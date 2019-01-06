<template>
  <div id="home">
    <mt-header fixed title="固定在顶部"></mt-header>
  <div class="sroll-nav-bar">
    <ul>
      <li>咨询</li>
      <li>新闻</li>
      <li>热门</li>
      <li>推单</li>
    </ul>
  </div>
  </div>
</template>

<script>

export default {
  name: 'Home',
  props: {
    
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang='less'>
.sroll-nav-bar {
  width: 100%;
  height: 40px;
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
      transition: all .5s;

      &:hover {
        box-shadow: 0 2px 2px #333;
      }
    }
  }
}
</style>
