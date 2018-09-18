<template>
    <div class="app-head-login">
        <i class='fa fa-angle-left' @click='back'></i>
        <img src="https://img02.camel.com.cn/image/you_logo_20171109.jpg" />
        <i class='fa fa-commenting-o'></i>
    </div>
</template>

<script>
export default {
  name: "appHeadLogin",
  methods:{
    back(){
      this.$router.go(-1)
    }
  }
};
</script>

<style lang="scss" scoped>
.app-head-login {
  height: 0.45rem;
  width: 100%;
  display: flex;
  position: fixed;
  border-bottom: 1px solid #f4f4f4;
  top: 0;
  justify-content: space-between;
  background: #fff;
  z-index: 100;
  i {
    font-size: 0.2rem;
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


