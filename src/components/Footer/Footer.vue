<template>
  <div id="footer-wrapper">
    <ul class="footer-content">
      <li><span class="iconfont icon-fadiankehu"></span><div>首页</div></li>
      <li><span class="iconfont icon-shoudiankehu"></span><div>分类</div></li>
      <li><span class="iconfont icon-pianchapingheng"></span><div>发现</div></li>
      <li><span class="iconfont icon-yuebaoguanli-"></span><div>购物车</div></li>
      <li><span class="iconfont icon-yonghuguanli-"></span><div>我的</div></li>
    </ul>
  </div>
</template>
<script>
export default {
  
}
</script>
<style lang='less'>
  #footer-wrapper {
    width: 100%;
    height: 50px;
    position: absolute;
      left: 0;
      bottom: 0;
    border-top: 1px solid #888;
    border-bottom: 1px solid #888;

    ul {
      display: flex;
      height: 100%;

      li {
        flex: 1;
        text-align: center;
        color: #333;
        font-size: 13px;

        div {
         margin-top: 2px;
        }
        span {
          display: inline-block;
          margin-top: 5px;
        }
      }
    }
  }
</style>


