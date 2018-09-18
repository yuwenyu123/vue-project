<template>
    <div class="app-goodslist">
        <app-head-goodslist></app-head-goodslist>
        <app-goodslist-nav></app-goodslist-nav>
        <div class="toTop">
            <i @click='toTop' class='fa fa-arrow-circle-o-up'></i>
        </div>
    </div>
</template>

<script>
import appGoodslistNav from './goodslistNav'

export default {
    name: "appGoodslist",
    components: {
        appGoodslistNav
    },
    methods:{
        toTop(){
            window.scrollTo(0,0)
        }
    }
};
</script>

<style lang="scss" scoped>
.app-goodslist {
  width: 100%;
  padding-top: 0.45rem;
  background: #fff;
  position: relative;
  .toTop {
    width: 0.4rem;
    height: 0.4rem;
    position: fixed;
    right: 0.15rem;
    bottom: 0.5rem;
    z-index: 100;
    i {
      display: inline-block;
      width: 0.4rem;
      height: 0.4rem;
      font-size: 0.4rem;
      border-radius: 50%;
      line-height: 0.4rem;
      color: #000;
    }
  }
}
</style>


