
<template>
    <div class='app-goodslist-nav' >
        <div class="content" v-if='show'>
            <router-link :to="{name:'details',params:{
                list_id:list.id
            }}" class="goodslist_li" v-for='(list,i) in lists.goodslist' :key='i'>
                <div class="goodslist_li_imgbox">
                    <img :src="list.image_url">
                </div>
                <p class="goodslist_li_desc">{{decodeURI(list.name)}}</p>
                <div class="goodslist_li_price">￥{{list.price}}</div>
                <span class="color">{{list.color_kinds}}色可选</span><span class="xin">{{decodeURI(list.product_type_desc)}}</span>
                <div class="goodslist_li_tgas" v-if="decodeURI(list.product_type_desc)=='限时购'">限时</div>
            </router-link>
        </div>
    </div>
</template>

<script>
    import { mapState } from 'vuex';
    export default{
        name: 'appGoodslistNav',
        data(){
            return{
                number: 1,
            }
        },
        computed: {
            ...mapState({
                lists: state => state.goodslist.goodslist
            }),
            show(){
                if(!this.lists){
                    return false;
                } 
                return true
            }
        },
        beforeCreate(){
            this.$store.dispatch('get_qing');
        },
        created () {
            this.$store.dispatch('get_goodslist',{
                goods_id:this.$route.params.goods_id,
                number: this.number
            });
        },
        mounted(){
            var that = this;
            window.addEventListener('scroll',function(){
                if(document.body.scrollTop + window.innerHeight >= document.body.offsetHeight) {
                    that.number ++;
                    if (!that.loaded) {
                        that.isShowLoading=true;
                    }
                    that.$store.dispatch('get_goodslist',{
                        goods_id: that.$route.params.goods_id,
                        number: that.number
                    })
                } 
            })
        },
        beforeDestroy(){
            var that = this;
            window.removeEventListener('scroll',function(){
                if(document.body.scrollTop + window.innerHeight >= document.body.offsetHeight) {
                    that.number ++;
                    if (!that.loaded) {
                        that.isShowLoading=true;
                    }
                    that.$store.dispatch('get_goodslist',{
                        goods_id: that.$route.params.goods_id,
                        number: that.number
                    })
                } 
            })
        },
    }
</script>

<style lang="scss" scoped>
@import '../../../stylesheets/_base.scss';
.app-goodslist-nav {
  background: #fff;
  .nav {
    padding: 0 0.15rem;
    width: 100%;
    height: 0.43rem;
    display: flex;
    span {
      display: inline-block;
      font-size: 0.14rem;
      line-height: 0.41rem;
      color: #4a4a4a;
      flex: 1;
      text-align: center;
      &.active {
        color: $base-color;
        border-bottom: 2px solid $base-color;
      }
    }
  }
  .content {
    display: flex;
    flex-wrap: wrap;
    .goodslist_li {
      width: 50%;
      height: 2.35rem;
      padding: 0.15rem;
      border-right: 1px solid #f0f0f0;
      color: #666;
      position: relative;
      text-align: center;
      .goodslist_li_imgbox {
        width: 100%;
        height: 1.17rem;
        img {
          display: inline-block;
          width: 1.17rem;
          height: 1.17rem;
        }
      }
      .goodslist_li_desc {
        width: 100%;
        overflow: hidden;
        height: 0.1688rem;
        font-size: 0.14rem;
        line-height: 0.1688rem;
        color: #4a4a4a;
        text-align: center;
        margin-top: 0.06rem;
      }
      .goodslist_li_price {
        margin-top: 0.1rem;
        font-size: 0.2rem;
        height: 0.32rem;
        line-height: 0.32rem;
        color: #ea7d51;
        text-align: center;
      }
      .color {
        border: 1px solid #cacaca;
        font-size: 0.12rem;
        background-color: #e8e8e8;
        border-radius: 1px;
        opacity: 0.75;
        color: #9b9b9b;
        margin: 0 0.05rem;
        padding: 0.01rem 0.02rem;
      }
      .xin {
        border: 1px solid #e03045;
        font-size: 0.12rem;
        background-color: #fff;
        border-radius: 1px;
        opacity: 0.75;
        color: #e03045;
        padding: 0.01rem 0.02rem;
      }
      .goodslist_li_tgas {
        position: absolute;
        z-index: 2;
        font-size: 0.14rem;
        background-color: #7a2800;
        color: #fff;
        opacity: 0.5;
        width: 0.4rem;
        height: 0.4rem;
        border-radius: 50%;
        line-height: 0.4rem;
        text-align: center;
        right: 0.08rem;
        top: 0.1rem;
      }
    }
  }
}
</style>
