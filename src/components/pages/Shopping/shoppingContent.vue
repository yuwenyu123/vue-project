
<template>
    <div class='app-shopping-content' >
        <ul>
          <li v-for = "(good,i) in data" :key = "i">
              <div class="img">
                <img :src="good.good_img">
              </div>
              <div class="dec">
                <p class="name">{{decodeURI(good.name)}}</p>
                <div class="m-selnum">
                    <span @click="reduce(good.good_id)" class="less">-</span>
                    <span class="textWrap">
                        <input type="number" :value='good.num' >
                    </span>
                    <span @click="add(good.good_id)" class="plus">+</span>
                </div>
                <span class="price">￥{{good.price}}</span>
                <span @click='qing(good.good_id)' class="qing">X</span>
              </div>
          </li>
        </ul>
        <p class='total'><span class='total_l'>合计：{{all_num_and_price.all_price}}</span><span class='total_r'>总数量: {{all_num_and_price.all_num}}</span></p>
    </div>
</template>

<script>
    import { mapState, mapGetters } from 'vuex'
    export default{
        name: 'appShoppingContent',
        props:['data'],
        computed: {
            ...mapGetters(['all_num_and_price'])
        },
        methods: {
            reduce(good_id) {
                this.$store.dispatch('action_reduce_good_from_cart', { good_id })
            },
            add(good_id) {
                this.$store.dispatch('action_add_good_in_cart', {
                good_id
                })
            },
            qing(good_id) {
                this.$store.dispatch('action_reduce_qing_cart', {
                good_id
                })
            },
        },
    }
</script>

<style lang="scss" scoped>
@import '../../../stylesheets/_base.scss';
.app-shopping-content {
  ul {
    background: #fff;
    li {
      width: 100%;
      display: flex;
      justify-content: space-between;
      border-bottom: 1px solid #ccc;
      padding: 0.125rem;
      .img {
        width: 0.795rem;
        margin-right: 0.1rem;
        img {
          width: 0.795rem;
          height: 0.795rem;
        }
      }
      .dec {
        .name {
          font-size: 0.14rem;
          line-height: 0.2rem;
        }
        .m-selnum {
          display: inline-block;
          height: 0.36rem;
          border: 1px solid #4a4a4a;
          margin-top: 0.2rem;
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
        .price {
          margin-top: 0.2rem;
          height: 0.36rem;
          font-size: 0.2rem;
          line-height: 0.36rem;
          color: #4a4a4a;
          margin-left: 0.1rem;
        }
        .qing {
          display: inline-block;
          border-radius: 50%;
          background: $base-color;
          width: 0.24rem;
          height: 0.24rem;
          font-size: 0.12rem;
          text-align: center;
          line-height: 0.24rem;
          color: #fff;
          margin-left: 0.1rem;
        }
      }
    }
  }
  .total {
    position: fixed;
    left: 0;
    right: 0;
    bottom: 0.5625rem;
    background: #fff;
    z-index: 100;
    height: 0.5rem;
    padding: 0.138rem 0.7rem;
    font-size: 0.16rem;
    .total_l {
      float: left;
    }
    .total_r {
      float: right;
    }
  }
}
</style>
