
<template>
    <div class='app-mine-service' >
            <div class="uc_list_ul" v-for='(lists, i) in data' :key='i'>
                <router-link to='/mine' v-for='list in lists' :key='list.id' class="uc_list_name">
                    <i :class="'fa fa-'+list.icon"></i><span class='uc_list'>{{list.title}}</span><span class='da'>&gt;</span>
                </router-link>
            </div>
        </div>
</template>

<script>
    import {mapState} from 'vuex';
    export default{
        name: 'appMineService',
        props: ['data']
    }
</script>

<style lang="scss" scoped>
.app-mine-service {
    background: #fff;
    margin-bottom: 0.1rem;
    .uc_list_ul{
        border-top: 1px solid rgba(74,74,74,.1);
        padding: 0 0.15rem;
        background: #fff;
        .uc_list_name{
            height: 0.45rem;
            display: block;
            border-top: 1px solid rgba(74,74,74,.1);
            i{
                display: inline-block;
                text-align: center;
                width: 0.2rem;
                font-size: 0.20rem;
                line-height: 0.45rem;
                color: rgba(74,74,74,.5);
            }
            .uc_list{
                margin-left: 0.1rem;
                font-size: 0.14rem;
                line-height: 0.44rem;
                color: rgba(74,74,74,.5);
            }
            .da{
                float: right;
                font-size: 0.24rem;
                line-height: 0.44rem;
                color: rgba(74,74,74,.35);
            }
        }
        .uc_list_name:nth-child(1){
            border-top: 0 none;
        }
    }
}
</style>
