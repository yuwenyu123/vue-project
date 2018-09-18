
<template>
    <div class='app-register-content' >
        <div class="inputwrap">
            <div class="inputBox">
                <input type="text" class="username" v-model='username' placeholder="手机号" value="" >
            </div>
            <div class="utip"><i class="u_clear" @click='qu'>X</i></div>
            <div class="inputBox">
                <input type="password" v-model='password' class="password" placeholder="密码" value="" >
            </div>
            <div class="utip"><i class="u_clear" @click='qp'>X</i></div>
            <div class="inputBox">
                <input type="password" v-model='pwd' class="pwd" placeholder="重复密码" value="" >
            </div>
            <div class="utip"><i class="u_clear" @click='qpwd'>X</i></div>
        </div>
        <div class="inputwrap1">
            <div class="inputBox1">
                <input type="text" class="code" v-model='code' placeholder="验证码" value="" >
            </div>
            <div class="utip1"><i class="u_clear" @click='qc'>X</i></div>
            <div class="getcode">获取验证码</div>
        </div>
        <div class="btn_login">
            <p>注册</p>
        </div>
        <div class="sublime">
            <router-link to='/login' class='register'>返回登录</router-link>
        </div>
    </div>
</template>

<script>
    
    export default{
        name: 'appRegisterContent',
        data(){
            return{
                username:'',
                password:'',
                pwd:'',
                code:''
            }
        },
        methods:{
            qu(){
                this.username=''
            },
            qp(){
                this.password=''
            },
            qpwd(){
                this.pwd=''
            },
             qc(){
                this.code=''
            }
        }
    }
</script>

<style lang="scss" scoped>
@import '../../../stylesheets/_base.scss';
.app-register-content {
  height: 3.528rem;
  padding: 0.45rem 0.2rem 0.2rem;
  .inputwrap {
    position: relative;
    .inputBox {
      border-bottom: 1px solid #d9d9d9;
      .username,
      .password,
      .pwd {
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
  .inputwrap1 {
    position: relative;
    .inputBox1 {
      width: 75%;
      border-bottom: 1px solid #d9d9d9;
      .code {
        width: 100%;
        height: 0.48rem;
        font-size: 0.2rem;
        border: 0;
        line-height: 0.48rem;
        color: #333;
        outline: 0;
      }
    }
    .utip1 {
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
        right: 1rem;
      }
    }
    .getcode {
      width: 25%;
      height: 0.4rem;
      border-radius: 5px;
      background: $base-color;
      position: absolute;
      bottom: 0rem;
      right: 0rem;
      font-size: 0.12rem;
      line-height: 0.4rem;
      text-align: center;
      color: #fff;
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
    .relogin {
      font-size: 0.125rem;
      line-height: 0.125rem;
      color: #999;
    }
  }
}
</style>
