
<template>
    <div class='app-mine-login' >
        <router-link to='/login' class="m-uc-top">
            <div class="m-profile">
                <img src="https://img02.camel.com.cn/image/headportrait345.png" alt="">
            </div>
            <div class="info">
                <p>登录/注册</p>
            </div>
        </router-link>
    </div>
</template>

<script>
    
    export default{
        name: 'appMineLogin',
    }
</script>

<style lang="scss" scoped>
.app-mine-login {
    .m-uc-top {
        display: block;
        height: 1.35rem;
        background: #d2ab44;
        padding-left: 0.21rem;
        overflow: hidden;
        .m-profile {
            float: left;
            img {
                display: inline-block;
                width: 0.75rem;
                height: 0.75rem;
                border-radius: 50%;
                margin-top: 0.3rem;
            }
        }
        .info{
            float: left;
            margin-left: 0.21rem;
            p{
                font-size: 0.20rem;
                line-height: 1.35rem;
                color: #fff;
            }
        }
    }
}
</style>
