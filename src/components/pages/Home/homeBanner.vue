<template>
    <div class="app-home-banner">
        <div class="swiper-container swiper-container1" >
            <div class="swiper-wrapper">
                <div
                    v-for = "banner in banners "
                    :key = " banner.id "
                class="swiper-slide loading-img">
                    <img :src="banner.imgurl">
                </div>
            </div>
            <div class="swiper-pagination"></div>
        </div>
        <div class="bannerNav">
            <p v-for='bannerNav in bannerNavs' :key='bannerNav.id'>
                <img :src="bannerNav.imgurl" >
                <span>{{bannerNav.title}}</span>
            </p>
        </div>  
    </div>
</template>

<script>
import Vue from 'vue'
import Swiper from 'swiper'
export default {
    name: 'appHomeBanner',
    data () {
        return {
            banners: [
                {id: 1,imgurl: 'https://topic.camel.com.cn/module/wap_home_banner_main/d05e405f-2a89-49dc-bf77-c84a25125019.jpg!/fw/540'},{id: 2,imgurl: 'https://topic.camel.com.cn/module/wap_home_banner_main/fb811dbb-d958-4e71-932d-5dcca2c469a0.jpg!/fw/540'},{id: 3,imgurl: 'https://topic.camel.com.cn/module/wap_home_banner_main/ea9da341-88ee-4b0f-acc8-84789a678780.jpg!/fw/540'},{id: 4,imgurl: 'https://topic.camel.com.cn/module/wap_home_banner_main/5bbcbebe-e021-44be-80ad-cd727ef9aa12.jpg!/fw/540'},{id: 5,imgurl: 'https://topic.camel.com.cn/module/wap_home_banner_main/22921f9b-c091-4024-827a-3e0878494489.jpg!/fw/540'},{id: 6,imgurl: 'https://topic.camel.com.cn/module/wap_home_banner_main/dd394471-72b3-4d83-87a5-815fcb79826d.jpg!/fw/540'}
            ],
            bannerNavs: [
                {id: 1,imgurl: '../../../../static/images/banner_1.png', title: '骆驼自营爆品'},
                {id: 2,imgurl: '../../../../static/images/banner_1.png', title: '7天无忧退换货'},
                {id: 3,imgurl: '../../../../static/images/banner_1.png', title: '满59包邮'}
            ]
        }
    },
    mounted(){
        Vue.nextTick(() => {
            var swiper1 = new Swiper('.swiper-container1', {
                pagination: {
                    el: '.swiper-pagination',
                },
            });
        });
    }
}
</script>
<style lang = "scss" scoped>
    .app-home-banner {
        background: #fff;
        .swiper-wrapper {
            width: 100%;
            height: 1.875rem;
        }
        .swiper-slide {
            img {width: 100%; }
        }
        .swiper-pagination  {
            .swiper-pagination-bullet {
                width: 5px; height: 5px;
            }
            .swiper-pagination-bullet-active {
                background: #fff;
            }
        }
        .bannerNav{
            display:flex;
            align-items: center;
            height: 0.44rem;
            margin-bottom: 0.15rem;
            p{
                flex: 1;
                display:flex;
                font-size: 0.14rem;
                line-height: 0.14rem;
                padding-left: 0.13rem;
                color: #7f2400;
                img{
                    float:left;
                    height:0.14rem;
                    vertical-align: bottom;
                    margin-right: 0.05rem;
                }
            }
        }
    }
</style>
