<template>
  <div class="consult-wrapper">
    <mt-swipe :auto="2000" :continuous='true'>
  <mt-swipe-item></mt-swipe-item>
  <mt-swipe-item></mt-swipe-item>
  <mt-swipe-item></mt-swipe-item>
</mt-swipe>
  </div>
</template>

<script>
import { Swipe, SwipeItem } from 'mint-ui';
export default {
  name: 'Consult'
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang='less'>
.consult-wrapper {
  width: 100%;
  height: 200px;
  .mint-swipe-item:nth-child(1) {
    background-color: rgb(71, 216, 42);
    background-image: url(../../assets/images/1.jpg);
    background-size: cover;
    background-position: center;
  }
  .mint-swipe-item:nth-child(2) {
    background-color: rgb(71, 216, 42);
    background-image: url(../../assets/images/2.jpg);
    background-size: cover;
    background-position: center;
  }
  .mint-swipe-item:nth-child(3) {
    background-color: rgb(71, 216, 42);
    background-image: url(../../assets/images/3.jpg);
    background-size: cover;
    background-position: center;
  }
  .mint-swipe-indicator {
    background-color: #fff !important;
  }
}
</style>
