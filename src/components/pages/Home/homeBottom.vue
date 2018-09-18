<template>
    <div class="app-home-bottom">
        <div class="bottom_img">
            <img src="https://www.camel.com.cn/images/qrcode_tuig.png" >
        </div>
        <div class="home_bottom">
            <p>客服电话：4006816178</p>
            <p>京ICP备12001814号 Copyright © 北京骆驼鞋业有限公司</p>
        </div>
    </div>
</template>

<script>

export default {
    name: 'appHomeBottom',
    
}
</script>

<style lang = "scss" scoped>
    .app-home-bottom{
        .bottom_img{
            width: 100%;
            height: 1.2rem;
            img{
                width: 100%;
                height: 1.2rem;
            }
       }
       .home_bottom{
            margin: 0.15rem 0;
            p{
                width: 100%;
                height: 0.18rem;
                text-align: center;
                font-size: 0.1rem;
                line-height: 0.18rem;
            } 
       }
    }
</style>
