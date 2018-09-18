<template>
    <div class="app-head">
        <i class='fa fa-search'></i>
        <img src="https://img02.camel.com.cn/image/you_logo_20171109.jpg" />
        <router-link class='fa fa-commenting-o' to='/client'></router-link>
    </div>
</template>

<script>
export default {
  name: "appHead"
};
</script>

<style lang="scss" scoped>
.app-head {
  height: 0.45rem;
  width: 100%;
  display: flex;
  position: fixed;
  border-bottom: 1px solid #f4f4f4;
  top: 0;
  justify-content: space-between;
  background: #fff;
  z-index: 100;
  i,
  a {
    font-size: 0.24rem;
    line-height: 0.45rem;
    width: 0.45rem;
    height: 0.45rem;
    text-align: center;
    color: rgba(146, 141, 141, 0.6);
  }
  img {
    display: block;
    height: 0.25rem;
    align-self: center;
  }
}
</style>


