<template>
    <div class="app-register">
        <app-head-login></app-head-login>
        <app-register-content></app-register-content>
    </div>
</template>

<script>
import appRegisterContent from './RegisterContent'
export default {
    name: "appRegister",
    components:{
        appRegisterContent
    }
};
</script>

<style lang="scss" scoped>
.app-register {
  padding-top: 0.45rem;
  padding-bottom: 0.5625rem;
  width: 100%;
  height: 100%;
  position: fixed;
  left: 0;
  top: 0;
  background: #fff;
}
</style>


