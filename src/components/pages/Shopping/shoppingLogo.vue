
<template>
    <div class='app-shopping-logo' >
        <div class="m-defualtPage">
          <img src="../../../assets/camel.png" >
          <p>购物车空空如也</p>
        </div>
        <router-link v-if='false' to='/login' class="noCart_btn">
            登录
        </router-link>
    </div>
</template>

<script>
    import { mapState, mapGetters } from 'vuex'
    export default{
      name: 'appShoppingLogo',
    }
</script>

<style lang="scss" scoped>
@import '../../../stylesheets/_base.scss';
.app-shopping-logo {
  .m-defualtPage {
    width: 100%;
    height: 1.5rem;
    position: fixed;
    left: 0;
    top: 50%;
    transform: translateY(-0.75rem);
    text-align: center;
    img {
      display: inline-block;
      width: 1.2375rem;
      height: 1.2375rem;
    }
    p {
      color: #9b9b9b;
      font-size: 0.13rem;
      line-height: 0.19rem;
      height: 0.9rem;
      opacity: 0.5;
      letter-spacing: 1px;
      margin-top: 3px;
    }
  }
  .noCart_btn {
    width: 2.4rem;
    height: 0.46rem;
    background: $base-color;
    font-size: 0.16rem;
    line-height: 0.46rem;
    letter-spacing: 3px;
    text-align: center;
    color: #fff;
    position: fixed;
    left: 50%;
    top: 50%;
    transform: translateY(0.85rem) translateX(-1.2rem);
  }
}
</style>
