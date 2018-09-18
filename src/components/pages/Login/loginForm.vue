
<template>
    <div class='app-login-form' >
        <div class="inputwrap">
            <div class="inputBox">
                <input type="text" v-model='username' class="username" placeholder="用户名/手机号/邮箱" value="" >
            </div>
            <div class="utip"><i class="u_clear" @click='qu'>X</i></div>
            <div class="inputBox">
                <input type="password" v-model='password' class="password" placeholder="密码" value="" >
            </div>
            <div class="utip"><i class="u_clear" @click='qp'>X</i></div>
        </div>
        <div class="btn_login">
            <p>登录</p>
        </div>
        <div class="sublime">
            <router-link to='/register' class='register'>快速注册</router-link>
            <router-link to='/register' class='findpwd'>忘记密码</router-link>
        </div>
        <div class="ologin">
            <span class="txt"><img src="../../../assets/qq.png" ><p>QQ</p></span>
            <span class="txt"><img src="../../../assets/zhifubao.png" ><p>支付宝</p></span>
            <span class="txt"><img src="../../../assets/weibo.png" ><p>微博</p></span>
        </div>
        <div class="sublime">
            <router-link to='/register' class='register'>快速注册</router-link>
            <router-link to='/register' class='findpwd'>忘记密码</router-link>
        </div>
    </div>
</template>

<script>

    export default{
        name: 'appLoginForm',
        data(){
          return{
            username:'',
            password:''
          }
        },
        methods:{
          qu(){
            this.username=''
          },
          qp(){
            this.password=''
          }
        }
    }
</script>

<style lang="scss" scoped>
@import '../../../stylesheets/_base.scss';
.app-login-form {
  height: 3.528rem;
  padding: 0.45rem 0.2rem 0.2rem;
  position: relative;
  .inputwrap {
    .inputBox {
      border-bottom: 1px solid #d9d9d9;
      .username,
      .password {
        width: 100%;
        height: 0.48rem;
        font-size: 0.2rem;
        border: 0;
        line-height: 0.48rem;
        color: #333;
        outline: 0;
      }
    }
    .utip {
      position: relative;
      i {
        display: inline-block;
        text-align: center;
        width: 0.2rem;
        height: 0.2rem;
        color: #fff;
        background: $base-color;
        border-radius: 50%;
        position: absolute;
        top: -0.35rem;
        right: 0.1rem;
      }
    }
  }
  .btn_login {
    height: 0.48rem;
    border: 1px solid $base-color;
    margin-top: 0.2rem;
    p {
      text-align: center;
      line-height: 0.46rem;
      font-size: 0.16rem;
      letter-spacing: 3px;
      color: $base-color;
    }
  }
  .sublime {
    height: 0.18rem;
    margin-top: 0.125rem;
    .register {
      font-size: 0.125rem;
      line-height: 0.125rem;
      color: #999;
    }
    .findpwd {
      float: right;
      font-size: 0.125rem;
      line-height: 0.125rem;
      color: #999;
    }
  }
  .ologin {
    height: 0.1875rem;
    margin-top: 0.75rem;
    display: flex;
    justify-content: space-between;
    .txt {
      flex: 1;
      text-align: center;
      img {
        display: inline-block;
        width: 0.1875rem;
        height: 0.1875rem;
      }
      p {
        display: inline-block;
        font-size: 0.12rem;
        line-height: 0.1875rem;
        margin-left: 0.075rem;
      }
    }
  }
}
</style>
