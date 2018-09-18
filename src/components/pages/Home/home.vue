<template>
    <div class="app-home">
        <app-head></app-head>
        <app-home-banner></app-home-banner>
        <app-home-nav></app-home-nav>
        <app-home-partner></app-home-partner>
        <app-home-title :data='data[0]'></app-home-title>
        <app-home-block1 :data='data[0]'></app-home-block1>
        <app-home-title :data='data[1]'></app-home-title>
        <app-home-goods :data='data[1]'></app-home-goods>
        <app-home-title :data='data[2]'></app-home-title>
        <app-home-block2 :data='data[2]'></app-home-block2>
        <app-home-title :data='data[3]'></app-home-title>
        <app-home-goods :data='data[3]'></app-home-goods>
        <app-home-title :data='data[4]'></app-home-title>
        <app-home-block3 :data='data[4]'></app-home-block3>
        <app-home-title :data='data[5]'></app-home-title>
        <app-home-goods :data='data[5]'></app-home-goods>
        <app-home-title :data='data[6]'></app-home-title>
        <app-home-goods :data='data[6]'></app-home-goods>
        <app-home-bottom></app-home-bottom>
        <app-bottom></app-bottom>
    </div>
</template>
<script>

import appHomeBanner from './homeBanner'
import appHomeNav from './homeNav'
import appHomePartner from './homePartner'
import appHomeTitle from './homeTitle'
import appHomeBlock1 from './homeBlock1'
import appHomeBlock2 from './homeBlock2'
import appHomeBlock3 from './homeBlock3'
import appHomeGoods from './homeGoods'
import appHomeBottom from './homeBottom'

import { mapState } from 'vuex'

export default {
    name: "appHome",
    data(){
        return {
            data: this.$store.state.home.homeTitle
        }
    },
    components: {
        appHomeBanner,
        appHomeNav,
        appHomePartner,
        appHomeTitle,
        appHomeBlock1,
        appHomeBlock2,
        appHomeBlock3,
        appHomeGoods,
        appHomeBottom
    },
    computed: {
        ...mapState(['home'])
    }
};
</script>

<style lang="scss" scoped>
.app-home{
    width:100%;
    padding-top: 0.45rem;
    padding-bottom: 0.5625rem;
}
</style>


