<template>
    <div class="app-home-nav">
        <div class='home-nav-ul'>
            <router-link to='/' v-for='nav in navs' :key='nav.id'>
                <img :src="nav.icon" >
                <p>{{decodeURI(nav.name)}}</p>
            </router-link>
            <router-link to='/' >
                <img src="https://img01.camel.com.cn/images/product_category_all.jpg" >
                <p>全部</p>
            </router-link>
        </div>
    </div>
</template>

<script>

export default {
    name: 'appHomeNav',
    data () {
        return {
            navs: []
        }
    },
    methods: {
        getNavs () {
            this.$http.get(this.server_config.camel+'/category.aspx').then(res => {
                res.data.list.splice(6,1);
                this.navs = res.data.list.slice(0,7);
            })
        }
    },
    created () {
        this.getNavs()
    }
}
</script>

<style lang = "scss" scoped>
.app-home-nav {
  height: 1.98rem;
  background: #fff;
  .home-nav-ul {
    height: 1.98rem;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    padding: 0.05rem 0px;
    a {
      flex: 25%;
      display: block;
      text-align: center;
      img {
        display: block;
        width: 0.6rem;
        height: 0.6rem;
        margin-left: 0.15rem;
      }
      p {
        font-size: 0.12rem;
        margin-top: 0.05rem;
      }
    }
  }
}
</style>
