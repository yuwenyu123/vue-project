
<template>
    <div class="classify-cate-right" >
        <div class="cate_title">
            <h2>一一&nbsp;{{decodeURI(listData.name)}}系列&nbsp;一一</h2>
        </div>
        <div class="cate_list">
            <router-link :to = "{name: 'goodslist', params: { goods_id: list.id }}" class="cate_item" :key='i' v-for="(list,i) in listData.sub_class_list">
                <img :src="list.icon" >
                <p>{{decodeURI(list.name)}}</p>
            </router-link>
        </div>
    </div>
</template>

<script>
import {mapState} from 'vuex';
    export default{
        name: 'classifyCateRight',
        computed: {
            ...mapState({
                listData: state => state.classify.articles
            })
        }
    }
</script>

<style lang="scss" scoped>
.classify-cate-right {
  width: 2.925rem;
  height: 100%;
  background: #fff;
  position: fixed;
  right: 0;
  padding: 7.5px;
  .cate_title {
    h2 {
      margin-top: 0.12rem;
      height: 0.18rem;
      font-size: 0.14rem;
      line-height: 0.18rem;
      text-align: center;
    }
  }
  .cate_list {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    .cate_item {
      width: 30%;
      margin-top: 0.15rem;
      text-align: center;
      height: 1.06rem;
      img {
        display: inline-block;
        width: 0.825rem;
        height: 0.825rem;
      }
      p {
        height: 0.14rem;
        text-align: center;
        font-size: 0.14rem;
        line-height: 0.14rem;
      }
    }
  }
}
</style>
