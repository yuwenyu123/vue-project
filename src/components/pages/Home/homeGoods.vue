<template>
    <div class="app-home-goods">
        <router-link to='/' class='good' v-for='goods in data.goodslist' :key='goods.id'>
            <img :src="goods.imgurl" >
            <h4 class="title">{{goods.title}}</h4>
            <p class="price">${{goods.price}}</p>
            <span class="color">{{goods.color}}</span><span class="xin">{{goods.xin}}</span>
        </router-link>
    </div>
</template>

<script>

export default {
    name: 'appHomeGoods',
    props:['data']
}
</script>

<style lang = "scss" scoped>
    .app-home-goods{
        width: 100%;
        display: flex;
        flex-wrap: wrap;
        background: #fff;
        .good{
            width: 50%;
            border: 1px solid #f4f4f4;
            border-right: 0 none;
            border-bottom: 0 none;
            padding:  0.15rem 0px;
            text-align: center;
            img{
                display: inline-block;
                width: 1.35rem;
                height: 1.35rem;
            }
            .title{
                padding: 0 0.2rem;
                color: #353535;
                font-size: 0.16rem;
                line-height: 0.25rem;
            }
            .price{
                color: #ba3809;
                font-size: 0.20rem;
                line-height: 0.29rem;
            }
            .color{
                border: 1px solid #cacaca;
                font-size: 0.12rem;
                background-color: #e8e8e8;
                border-radius: 1px;
                opacity: .75;
                color: #9b9b9b;
                margin: 0 .05rem;
                padding: .01rem .02rem;
            }
            .xin{
                border: 1px solid #e03045;
                font-size: 0.12rem;
                background-color: #fff;
                border-radius: 1px;
                opacity: .75;
                color: #e03045;
                padding: .01rem .02rem;
            }
        }
    }
</style>
