<template>
    <div class="app-not-found">
        <header>
            <a @click="back" class="fa fa-chevron-left"></a>
        </header>

        <div class="content">
            <h4>访问的页面不存在 <router-link to="/">回到首页</router-link> </h4>
        </div>
    </div>
</template>
<script>
export default {
    name: 'app-not-found',
    methods: {
        back () {
            //返回， 编程式导航
           this.$router.go(-1)
        }
    }
}
</script>
<style lang="scss" scoped>
    @import '../../../stylesheets/_base.scss';
    .app-not-found{
        height:100%;
        header{
            height: 0.45rem;
            background-color: #ccc;
            a{
                font-size: 0.24rem;
                line-height: 0.45rem;
                padding-left: 0.1rem;
                cursor: pointer;
            }
        }
        .content{
            h4{
                text-align: center;
                font-size: 0.24rem;
                line-height: 3rem;
                a{
                    color: $base-color;
                    font-size: 0.24rem;
                    cursor: pointer;
                }
            }
        }
    }
</style>


