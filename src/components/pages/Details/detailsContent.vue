<template>
    <div class="app-detatils-content">
        <ul class='mc-servicePolicy'>
            <li class='l1' v-for="(list,i) in lists" :key='i'>{{list}}</li>
        </ul>
        <div class="choose_style">
            <p v-if='show'>货号：{{msg}}</p>
        </div>
    </div>
</template>

<script>
    import axios from 'axios'
    export default {
        name: "appDetailsContent",
        data(){
            return {
                lists:['骆驼自营爆品', '7天无忧退换货', '满59包邮'],
                msg: false
            }
        },
        computed:{
            show(){
                if(!this.msg){
                    return false
                }
                return true
            }
        },
        methods:{
            get_goods(){
                axios.get(this.server_config.camel+'/product/productDetail',{
                    params:{
                        product_id:this.$route.params.list_id,
                    }
                }).then((res)=>{
                    this.msg = res.data.info.product.code
                })
            }
        },
        created(){
            this.get_goods()
        }
    };
</script>

<style lang="scss" scoped>
.app-detatils-content {
  .mc-servicePolicy {
    width: 100%;
    height: 0.43rem;
    display: flex;
    padding: 0px 0.15rem;
    .l1 {
      flex: 1;
      text-align: center;
      height: 0.14rem;
      font-size: 0.14rem;
      line-height: 0.3rem;
      color: #4a4a4a;
    }
  }
  .choose_style {
    height: 0.4rem;
    padding: 0 0.15rem;
    background: #fff;
    p {
      height: 0.4rem;
      font-size: 0.14rem;
      line-height: 0.4rem;
      color: #4a4a4a;
    }
  }
}
</style>


