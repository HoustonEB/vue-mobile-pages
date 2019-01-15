<template>
  <div class="purchase-wrapper">
    <div class="top-back-header">
      <mt-header fixed :title="title">
        <router-link to="/" slot="left">
          <mt-button icon="back">返回</mt-button>
        </router-link>
        <mt-button icon="more" slot="right"></mt-button>
      </mt-header>
    </div>
    <div class="purchase-form-wrapper">
      <div class="form-content">
        <mt-field label="用户名" placeholder="请输入用户名" v-model="username"></mt-field>
        <mt-field label="邮箱" placeholder="请输入邮箱" type="email" v-model="email"></mt-field>
        <mt-field label="密码" placeholder="请输入密码" type="password" v-model="password"></mt-field>
        <mt-field label="手机号" placeholder="请输入手机号" type="tel" v-model="phone"></mt-field>
        <mt-field label="网站" placeholder="请输入网址" type="url" v-model="website"></mt-field>
        <mt-field label="数字" placeholder="请输入数字" type="number" v-model="number"></mt-field>
        <mt-field label="生日" placeholder="请输入生日" type="date" v-model="birthday"></mt-field>
        <mt-field label="自我介绍" placeholder="自我介绍" type="textarea" rows="4" v-model="introduction"></mt-field>
      </div>
      <div class="submit-wrapper">
        <mt-button plain type="primary" size="large" @click="purchaseBtn">提交</mt-button>
      </div>
    </div>
    <transition name="fade">
      <Loading v-show="loading"/>
    </transition>
  </div>
</template>
<script>
import Loading from "../../Loading/index.vue";
export default {
  components: {
    Loading
  },
  data: function() {
    return {
      title: "",
      username: "",
      email: "",
      password: "",
      phone: "",
      website: "",
      number: "",
      birthday: "",
      introduction: "",
      loading: false
    };
  },
  methods: {
    purchaseBtn: function() {
      this.loading = true;
      setTimeout(() => {
        this.loading = false;
      }, 3000);
    }
  },
  created: function() {
    this.title = `购买商品${this.$route.query.id}`;
  }
};
</script>
<style scoped lang='less'>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
.form-content {
  padding-top: 40px;
}
</style>