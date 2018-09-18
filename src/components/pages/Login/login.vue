<template>
    <div class="app-login">
        <app-head-login></app-head-login>
        <app-login-form></app-login-form>
    </div>
</template>

<script>
import appLoginForm from './loginForm'

export default {
    name: "appLogin",
    components: {
        appLoginForm
    }
};
</script>

<style lang="scss" scoped>
.app-login {
  width: 100%;
  height: 100%;
  position: fixed;
  left: 0;
  top: 0;
  padding-top: 0.45rem;
  padding-bottom: 0.5625rem;
  background: #fff;
}
</style>


