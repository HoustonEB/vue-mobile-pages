<template>
  <div id="footer-wrapper">
    <router-link to="/home">
      <span class="iconfont icon-fadiankehu"></span>
      <div>首页</div>
    </router-link>
    <router-link to="/sort">
      <span class="iconfont icon-shoudiankehu"></span>
      <div>分类</div>
    </router-link>
    <router-link to="/sort">
      <span class="iconfont icon-pianchapingheng"></span>
      <div>发现</div>
    </router-link>
    <router-link to="/sort">
      <span class="iconfont icon-yuebaoguanli-"></span>
      <div>购物车</div>
    </router-link>
    <router-link to="/sort">
      <span class="iconfont icon-yonghuguanli-"></span>
      <div>我的</div>
    </router-link>
  </div>
</template>
<script>
export default {};
</script>
<style scoped lang='less'>
#footer-wrapper {
  width: 100%;
  height: 50px;
  display: flex;
  position: fixed;
  left: 0;
  bottom: 0;
  border-top: 1px solid #e8e8e8;
  border-bottom: 1px solid #e8e8e8;
  background-color: #fff;

  a {
    flex: 1;
    text-align: center;
    color: #333;
    font-size: 13px;
    div {
      padding-top: 2px;
    }
    span {
      display: inline-block;
      margin-top: 5px;
    }
  }
}
</style>


