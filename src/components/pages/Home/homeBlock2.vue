<template>
    <div class="app-home-block2">
        <div class="swiper-container swiper-container3">
            <div class="swiper-wrapper">
                <div class="swiper-slide" v-for='goods in data.goodslist' :key='goods.id'>
                    <router-link to='/'>
                        <p class='title'>{{goods.title}}</p>
                        <img :src="goods.imgurl"/>
                    </router-link>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Vue from 'vue'
import Swiper from 'swiper'

export default {
    name: 'appHomeBlock2',
    props:['data'],
    mounted(){
        Vue.nextTick(() => {
            var swiper3 = new Swiper('.swiper-container3', {
                slidesPerView: 3.2,
                spaceBetween: 5,
                freeMode: true,
            });
        })
    }
}
</script>

<style lang = "scss" scoped>
    .app-home-block2{
        .swiper-container {
            width: 100%;
            height: 1.59rem;
        }
        .swiper-slide {
            text-align: center;
            font-size: 18px;
            background: #fff;
            display: -webkit-box;
            display: -ms-flexbox;
            display: -webkit-flex;
            display: flex;
            a{
                overflow: hidden;
                .title{
                    display: block;
                    padding: 0.12rem 0.12rem 0;
                    text-align: center;
                    white-space: nowrap;
                    overflow: hidden;
                    color: #888;
                    line-height: 0.20rem;
                    font-size: 0.14rem;
                    width: 0.94875rem;
                }
            }
        }
    }
</style>
