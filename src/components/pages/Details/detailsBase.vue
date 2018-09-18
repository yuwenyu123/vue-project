<template>
    <div class="app-detatils-base">
        <div class="detailsBox" v-if='show'>
            <div class="content">
                <div class="info">
                    <p class='xin'>{{decodeURI(goods.product.tag_list[0].name)}}</p>
                    <p class='name'>{{decodeURI(goods.product.name)}}</p>
                    <p class="price">￥{{goods.product.price}}</p>
                </div>
                <div class="comment" @click='get_heart'>
                    <i :class="'fa fa-' + msg"></i>
                    <p>收藏</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import { mapState } from 'vuex';
    export default {
        name: "appDetailsBase",
        data(){
            return{
                msg:'heart-o',
                isShow:true,
            }
        },
        methods:{
            get_heart(){
                if(this.msg=='heart-o'){
                    this.msg = 'heart';
                }else{
                    this.msg = 'heart-o';
                }
            }
        },
        computed: {
            ...mapState({
                goods: state => state.details.details
            }),
            show(){
                if(!this.goods){
                    return false;
                } 
                return true
            }
        },
        created () {
            this.$store.dispatch('get_details', {
                list_id:this.$route.params.list_id,
            });
        },
    };
</script>

<style lang="scss" scoped>
.app-detatils-base {
  height: 1.6525rem;
  padding: 0.1125rem;
  background: #fff;
  .detailsBox {
    height: 1.6525rem;
    width: 100%;
    border-top: 1px solid #eaeaea;
    .info {
      display: inline-block;
      height: 0.18rem;
      width: 75%;
      .xin {
        margin: 3.75px 0 7.5px;
        display: inline-block;
        border: 1px solid #e03045;
        font-size: 0.12rem;
        line-height: 0.18rem;
        background-color: #fff;
        border-radius: 1px;
        opacity: 0.75;
        color: #e03045;
        padding: 0.01rem 0.02rem;
      }
      .name {
        width: 100%;
        height: 0.75rem;
        color: #4a4a4a;
        font-size: 0.16rem;
        line-height: 0.25rem;
        overflow: hidden;
      }
      .price {
        width: 100%;
        height: 0.31rem;
        margin-top: 7.5px;
        font-size: 0.2rem;
        line-height: 0.31rem;
        color: #ea7d51;
      }
    }
    .comment {
      width: 25%;
      float: right;
      height: 1.6525rem;
      text-align: center;
      border-left: 1px solid #eaeaea;
      i {
        display: inline-block;
        font-size: 0.25rem;
        line-height: 0.25rem;
        margin-top: 50%;
        transform: translateY(0.125rem);
        margin-bottom: 0.1rem;
      }
    }
  }
}
</style>