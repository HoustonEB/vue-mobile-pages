<template>
  <div class="consult-wrapper">
    <mt-swipe :auto="2000" :continuous="true">
      <mt-swipe-item></mt-swipe-item>
      <mt-swipe-item></mt-swipe-item>
      <mt-swipe-item></mt-swipe-item>
    </mt-swipe>
    <!-- Content -->
    <div class="consult-content" v-for="item in infoArr" :key="item.id">
      <div class="left-image">
        <img src="../../assets/images/cat.jpg" alt>
      </div>
      <div class="right-info">
        <h3>{{item.msg}}</h3>
        <span>sjdjflsjlsjslkdjlkdjflka</span>
        <mt-button
          type="danger"
          size="small"
          class="shop-btn"
          @click="entryShop(item.id, $event)"
        >购买</mt-button>
        <mt-button
          type="primary"
          size="small"
          class="detail-btn"
          @click="entryDetail(item.id, $event)"
        >详细</mt-button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Consult",
  data: function() {
    return {
      infoArr: [
        { id: 0, msg: "0号" },
        { id: 1, msg: "1号" },
        { id: 2, msg: "2号" },
        { id: 3, msg: "3号" },
        { id: 4, msg: "4号" },
        { id: 5, msg: "5号" }
      ]
    };
  },
  methods: {
    entryDetail: function(id, e) {
      console.log(id, e);
      this.$router.push({
        path: "detail",
        query: {
          id: id
        }
      });
    },
    entryShop: function(id, e) {
      console.log("entery-shop");
      this.$router.push({
        path: 'purchase',
        query: {
          id: id
        }
      })
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang='less'>
.consult-wrapper {
  width: 100%;
  .mint-swipe {
    height: 200px;
  }
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

  .consult-content {
    width: 100%;
    height: 150px;
    padding: 10px;
    display: flex;
    border-bottom: 1px solid #e8e8e8;
    transition: all .5s;
    &:hover {
      box-shadow: 0 0 3px 3px #e8e8e8;
      img {
        transform: scale(1.3);
      }
    }
    &:nth-last-child(1) {
      margin-bottom: 130px;
      border-bottom: none;
    }
    .left-image {
      flex: 1;
      overflow: hidden;
      img {
        width: 100%;
        transition: all .5s;
      }
    }
    .right-info {
      flex: 1.5;
      position: relative;
      padding: 5px;
      .shop-btn {
        position: absolute;
        margin-left: 5px;
        left: 0;
        bottom: 0;
      }
      .detail-btn {
        position: absolute;
        left: 70px;
        bottom: 0;
      }
    }
  }
}
</style>
