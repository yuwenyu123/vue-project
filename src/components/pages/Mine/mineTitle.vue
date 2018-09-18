
<template>
    <div class='app-mine-title' >
            <router-link to='/mine' class="uc_list_title">
                <span class='uc_list_order'>{{data[0].title}}</span><span class='more'>{{data[0].dec}}</span>
            </router-link>
        </div>
</template>

<script>
    import {mapState} from 'vuex';
    export default{
        name: 'appMineService',
        props: ['data'],
    }
</script>

<style lang="scss" scoped>
.app-mine-title {
    background: #fff;
    margin-top: 0.1rem;
    .uc_list_title{
        display: block;
        height: 0.45rem;
        padding: 0 0.15rem;
        .uc_list_order{
            color: #4a4a4a;
            font-size: 0.14rem;
            line-height: 0.45rem;
        }
        .more{
            float: right;
            font-size: 0.14rem;
            line-height: 0.45rem;
            color: rgba(74,74,74,.5);;
        }
    }
}
</style>
