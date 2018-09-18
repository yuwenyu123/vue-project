<template>
    <div class="app-bottom">
            <router-link class='_bottom' active-class="active" exact :to = "{name: nav.name}" v-for = "nav in navs" :key = "nav.id">
                <i :class="'fa fa-'+nav.icon"></i>
                <p>{{nav.title}}</p>
            </router-link>
    </div>
</template>

<script>
export default {
    name: 'appBottom',
    data(){
        return {
            navs:[
                { id: 1, title: '首页', icon: 'home', name: 'home'},
                { id: 2, title: '专题', icon: 'file-text-o', name: 'special'},
                { id: 3, title: '分类', icon: 'list', name: 'classify'},
                { id: 4, title: '购物车', icon: 'shopping-basket', name: 'shopping'},
                { id: 5, title: '我的', icon: 'user-circle-o', name: 'mine'}
            ]
        }
    }
}
</script>

<style lang="scss" scoped>
@import '../../stylesheets/_base.scss';
.app-bottom {
  display: flex;
  height: 0.5625rem;
  position: fixed;
  bottom: 0;
  width: 100%;
  border-top: 1px solid rgba(74, 74, 74, 0.6);
  background: #fff;
  z-index: 1;
  ._bottom {
    color: rgba(74, 74, 74, 0.6);
    flex: 1;
    height: 100%;
    display: flex;
    flex-flow: column;
    align-items: center;
    justify-content: space-around;
    &.active {
      color: $base-color;
    }
    i {
      font-size: 0.24rem;
      padding-top: 0.05rem;
    }
    p {
      font-size: 14px;
    }
  }
}
</style>


