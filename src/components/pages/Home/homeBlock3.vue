<template>
    <div class="app-home-block3">
        <div class="swiper-container swiper-container4">
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
    name: 'appHomeBlock3',
    props:['data'],
    mounted(){
        Vue.nextTick(() => {
            var swiper4 = new Swiper('.swiper-container4', {
                slidesPerView: 1.2,
                spaceBetween: 10,
                freeMode: true,
            });
        })
    }
}
</script>

<style lang = "scss" scoped>
.app-home-block3 {
  background: #fff;
  padding: 0.15rem 0;
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
    a {
      overflow: hidden;
      img {
        width: 3rem;
      }
    }
  }
}
</style>
