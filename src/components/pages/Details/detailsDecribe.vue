<template>
    <div class="app-detatils-decribe">
        <div @click='show = true' class="choose_style">
            <span>{{res}}</span>
            <i class='fa fa-angle-right'></i>
        </div>
        <div class="mask" @click='show = false' v-if='show'></div>
        <div class="paramselect"  v-if='show'>
            <div class="info-con">
                <i class='close' @click='show = false'>X</i>
                <div class="left">
                    <img :src="msg.default_image" />>
                </div>
                <div class="right">
                    <p class="price">￥{{msg.product.price.toFixed(2)}}</p>
                    <p class="sku">已选：<span>{{sku}}</span></p>
                </div>
            </div>
            <div class="spec-con">
                <div class="tt">颜色</div>
                <div class="con">
                    <div class="tab" v-for='(list, i) in msg.color_image_list' :key='i'>
                        <span>{{decodeURI(list.color.replace('%2c','，'))}}</span>
                    </div>
                </div>
                <div class="tt">尺码</div>
                <div class="con">
                    <div class="tab" v-for='(size, i) in sizes' :key='i'>
                        <span>{{size}}</span>
                    </div>
                </div>
                <div class="tt">数量</div>
                <div class="m-selnum">
                    <span @click="num--;if(num==0){num=1}" class="less">-</span>
                    <span class="textWrap">
                        <input type="number" :value='num' >
                    </span>
                    <span @click="num++" class="plus">+</span>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import axios from 'axios'
    export default {
        name: "appDetailsDecribe",
        data(){
            return {
               show: false,
               res: '请选择款式、数量',
               msg:'',
               sku: '请选择',
               sizes: ['M', 'S', 'L', 'XL', 'XXL'],
               num: 1
            }
        },
        methods:{
            get_goods(){
                axios.get(this.server_config.camel+'/product/productDetail',{
                    params:{
                        product_id:this.$route.params.list_id,
                    }
                }).then((res)=>{
                    this.msg = res.data.info

                })
            },
        },
        created(){
            this.get_goods();
        }
    };
</script>

<style lang="scss" scoped>
.app-detatils-decribe {
  margin: 0.08rem 0;
  background: #fff;
  .choose_style {
    height: 0.48rem;
    padding: 0 0.165rem;
    span {
      display: inline-block;
      font-size: 0.15rem;
      line-height: 0.48rem;
      color: #4a4a4a;
    }
    i {
      float: right;
      font-size: 0.15rem;
      line-height: 0.48rem;
      color: #4a4a4a;
    }
  }
  .mask {
    position: fixed;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    background: #000;
    opacity: 0.7;
    z-index: 10;
  }
  .paramselect {
    padding: 0.16rem;
    position: fixed;
    left: 0;
    right: 0;
    bottom: 0.48rem;
    background: #fff;
    z-index: 100;
    animation: changebox 0.5s linear;
    .info-con {
      height: 1.05rem;
      position: relative;
      padding-left: 0.4rem;
      overflow: hidden;
      .close {
        font-size: 0.24rem;
        position: absolute;
        left: 0;
        top: 0;
      }
      .left {
        float: left;
        margin-left: 0.138rem;
        img {
          width: 1.05rem;
          height: 1.05rem;
        }
      }
      .right {
        float: left;
        margin-left: 0.24rem;
        margin-right: 0.138rem;
        height: 1.05rem;
        .price {
          color: #ea7d51;
          font-size: 0.2rem;
          line-height: 0.16rem;
          margin-top: 0.3rem;
        }
        .sku {
          margin-top: 0.15rem;
          font-size: 0.14rem;
          line-height: 0.14rem;
          span {
            color: #4a4a4a;
          }
        }
      }
    }
    .spec-con {
      .tt {
        color: #000;
        line-height: 0.15rem;
        font-size: 0.15rem;
        margin: 0.12rem;
        height: 0.15rem;
      }
      .con {
        .tab {
          display: inline-block;
          margin-bottom: 0.085rem;
          margin-right: 0.13rem;
          span {
            display: inline-block;
            border: 1px solid #ccc;
            padding: 0 0.18rem;
            color: #4a4a4a;
            font-size: 0.14rem;
            line-height: 0.36rem;
          }
        }
      }
      .m-selnum {
        display: inline-block;
        height: 0.36rem;
        border: 1px solid #4a4a4a;
        span {
          display: inline-block;
          width: 0.4rem;
          height: 0.34rem;
          text-align: center;
          font-size: 0.16rem;
          line-height: 0.34rem;
        }
        .textWrap {
          display: inline-block;
          width: 0.5rem;
          height: 0.34rem;
          input {
            width: 0.5rem;
            height: 0.3rem;
            display: inline-block;
            text-align: center;
            outline: 0;
            border: 0 none;
            font-size: 0.14rem;
            line-height: 0.3rem;
            padding: 0;
          }
        }
      }
    }
  }
  @keyframes changebox {
    0% {
      bottom: -100%;
    }
    100% {
      bottom: 0%;
    }
  }
}
</style>


