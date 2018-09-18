<template>
    <div class="app-details-bottom">
            <router-link to='/client' class='client'>
                <i class='fa fa-commenting-o'></i>
            </router-link>
            <router-link to='/shopping' class='shopping'>
                <p>立即购买</p>
            </router-link>
            <router-link to='' class='add'>
                <p @click='checkIsLogin'>加入购物车</p>
            </router-link>
    </div>
</template>

<script>
export default {
    name: 'appDetailsBottom',
    props:['data'],
    methods:{
      checkIsLogin(){
        this.$store.dispatch('action_add_good_in_cart', {
            good_id: this.$route.params.list_id,
            good_img: this.data.default_image,
            name: this.data.product.name,
            price: this.data.product.price,
            num: 1,
        })
      }
    }
}
</script>

<style lang="scss" scoped>
@import '../../stylesheets/_base.scss';
.app-details-bottom {
  display: flex;
  height: 0.48rem;
  position: fixed;
  bottom: 0;
  width: 100%;
  border-top: 1px solid rgba(74, 74, 74, 0.6);
  background: #fff;
  z-index: 100;
  display: flex;
  justify-content: space-between;
  a {
    text-align: center;
    font-size: 0.24rem;
    line-height: 0.48rem;
  }
  .client {
    width: 20%;
  }
  .shopping {
    width: 39%;
    font-size: 0.16rem;
    color: #fff;
    background: #9c937a;
  }
  .add {
    width: 39%;
    font-size: 0.16rem;
    color: #fff;
    background: $base-color;
  }
}
</style>


