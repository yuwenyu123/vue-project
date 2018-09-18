<template>
    <div class="app-head-goodslist">
        <div class="head_l">
          <i class='fa fa-angle-left' @click='back'></i>
          <i class='fa fa-institution' @click='goHome'></i>
        </div>
        <div class="head_c">
          <h2>商品详情</h2>
        </div>
        <div class="head_r">
          <i class='fa fa-shopping-bag' @click='goShopping'></i>
          <i class='fa fa-commenting-o' @click='goClient'></i>
        </div>
    </div>
</template>

<script>
import { mapState } from 'vuex';
export default {
  name: "appHeadGoodslist",
  computed: {
      ...mapState({
          lists: state => state.goodslist.goodslist
      })
  },
  methods:{
    back(){
      this.$router.go(-1)
    },
    goHome(){
      this.$router.push('/')
    },
    goShopping(){
      this.$router.push('/shopping')
    },
    goClient(){
      this.$router.push('/client')
    }
  }
};
</script>

<style lang="scss" scoped>
.app-head-goodslist {
  height: 0.45rem;
  background: #fff;
  width: 100%;
  display: flex;
  justify-content: space-between;
  z-index: 100;
  position: fixed;
  left: 0;
  top: 0;
  .head_l {
    height: 0.45rem;
    i {
      font-size: 0.2rem;
      line-height: 0.45rem;
      margin-left: 0.15rem;
      color: #666;
      opacity: 0.5;
    }
  }
  .head_c {
    height: 0.45rem;
    h2 {
      font-size: 0.16rem;
      line-height: 0.45rem;
      letter-spacing: 1px;
      color: #4a4a4a;
    }
  }
  .head_r {
    height: 0.45rem;
    i {
      font-size: 0.24rem;
      line-height: 0.45rem;
      margin-right: 0.15rem;
      color: #666;
      opacity: 0.5;
    }
  }
}
</style>


