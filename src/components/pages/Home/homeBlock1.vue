<template>
    <div class="app-home-block1">
        <div class="swiper-container swiper-container2">
            <div class="swiper-wrapper">
                <div class="swiper-slide">
                    <router-link to='/'>
                        <img :src="data.imgurl1"/>
                    </router-link>
                </div>
                <div class="swiper-slide">
                    <router-link to='/'>
                        <img :src="data.imgurl2"/>
                    </router-link>
                </div>
                <div class="swiper-slide">
                    <router-link to='/'>
                        <img :src="data.imgurl3"/>
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
    name: 'appHomeBlock1',
    props:['data'],
    mounted(){
        Vue.nextTick(() => {
            var swiper2 = new Swiper('.swiper-container2', {
                slidesPerView: 1,
                spaceBetween: 0,
                freeMode: true,
            });
        })
    }
}
</script>

<style lang = "scss" scoped>
    .app-home-block1{
        .swiper-container {
            width: 100%;
            height: 1.5972rem;
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
                img{
                    height: 1.5972rem;
                }
            }
        }
    }
</style>
