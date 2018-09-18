<template>
    <div class="app-classify">
        <app-head></app-head>
        <app-classify-cate-left :Data='goodslist'></app-classify-cate-left>
        <app-classify-cate-right></app-classify-cate-right>
        <app-bottom></app-bottom>
    </div>
</template>
<script>
import appClassifyCateLeft from './classifyCateLeft'
import appClassifyCateRight from './classifyCateRight'


export default {
    name: "appClassify",
    components:{
        appClassifyCateLeft,
        appClassifyCateRight
    },
    data () {
        return {
            goodslist: []
        }
    },
    methods: {
        getGoodslist () {
            this.$http.get(this.server_config.camel+'/category.aspx').then(res => {
                this.goodslist = res.data.list;
            })
        }
    },
    created(){
        this.getGoodslist();
    }
};
</script>

<style lang="scss" scoped>
.app-classify {
  width: 100%;
  padding-top: 0.45rem;
  padding-bottom: 0.5625rem;
}
</style>


