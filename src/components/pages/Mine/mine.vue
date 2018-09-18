<template>
    <div class="app-mine">
        <app-mine-login></app-mine-login>
        <app-mine-title :data='services[0][0].caps'></app-mine-title>
        <app-mine-service :data='services'></app-mine-service>
        <app-mine-title :data='services[1][0].caps'></app-mine-title>
        <app-mine-service :data='services'></app-mine-service>
        <app-bottom></app-bottom>
    </div>
</template>

<script>
import appMineLogin from './mineLogin'
import appMineService from './mineService'
import appMineTitle from './mineTitle'
import {mapState} from 'vuex';
export default {
    name: "appMine",
    computed: {
        ...mapState({
            services: state => state.mine.minelist
        })
    },
    components:{
        appMineLogin,
        appMineService,
        appMineTitle
    }
};
</script>

<style lang="scss" scoped>
.app-mine{
    width:100%;
    padding-bottom: 0.5625rem;
}
</style>


