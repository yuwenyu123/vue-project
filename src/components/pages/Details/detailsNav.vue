<template>
    <div class="app-detatils-nav">
        <div ref = "el" class="swiper-container">
            <div class="swiper-wrapper" v-if='show'>
                <div
                    v-for = "(good,i) in goods.default_image_list"
                    :key = " i "
                class="swiper-slide loading-img">
                    <img  :src="good">
                </div>
            </div>
            <div class="swiper-pagination"></div>
        </div>
    </div>
</template>

<script>
    import Vue from 'vue'
    import Swiper from 'swiper'
    import { mapState } from 'vuex';
    export default {
        name: "appDetailsNav",
        computed: {
            ...mapState({
                goods: state => state.details.goods
            }),
            show(){
                if(!this.goods){
                    return false;
                } 
                return true;
            }
        },
        watch: {
            goods: {
                immediate: true,
                handler (val) {
                    if ( val ) {
                        Vue.nextTick(() => {
                            new Swiper ( this.$refs.el, {
                                autoplay:true,
                                pagination: {
                                    el: '.swiper-pagination',
                                },
                            });
                        })
                    }
                }
            }
        }
    };
</script>

<style lang="scss" scoped>
.app-detatils-nav {
  height: 3.75rem;
  .swiper-container {
    height: 3.75rem;
    .swiper-wrapper {
      height: 3.75rem;
      .swiper-slide {
        img {
          width: 100%;
          height: 3.75rem;
        }
      }
    }
  }
}
</style>


