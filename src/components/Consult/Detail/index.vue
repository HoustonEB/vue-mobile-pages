<template>
  <div class="detail-wrapper">
      <div class="shop-img-content">
          <img src="/src/assets/images/cat.jpg" alt="占位图">
      </div>
      <div class="shop-goods-id">
          <h3>{{goodsId}}</h3>
      </div>
  </div>
</template>

<script>
export default {
    data: function() {
        return {
            imgSrc: '',
            goodsId: ''
        }
    },
    created: function() {
        console.log(this.$route.query.id);
        this.goodsId = this.$route.query.id;
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang='less'>

</style>
