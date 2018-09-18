<template>
    <div class="app-details">
        <app-head-details></app-head-details>
        <app-details-nav></app-details-nav>
        <app-details-base></app-details-base>
        <app-details-content></app-details-content>
        <app-details-decribe></app-details-decribe>
        <app-details-image></app-details-image>
        <app-details-bottom :data='this.goods'></app-details-bottom>
    </div>
</template>

<script>
import appDetailsNav from './detailsNav'
import appDetailsBase from './detailsBase'
import appDetailsImage from './detailsImage'
import appDetailsContent from './detailsContent'
import appDetailsDecribe from './detailsDecribe'
import { mapState } from 'vuex';
export default {
    name: "appDetails",
    components:{
        appDetailsNav,
        appDetailsBase,
        appDetailsImage,
        appDetailsContent,
        appDetailsDecribe
    },
    computed: {
        ...mapState({
            goods: state => state.details.goods
        })
    },
    created () {
        this.$store.dispatch('get_details', {
            list_id:this.$route.params.list_id,
        });
    },
    beforeRouteLeave (to, from, next) {
        this.$store.commit({
            type: 'GET_DETAILS',
            goods: ''
        })
        next()
    }
};
</script>

<style lang="scss" scoped>
.app-details {
  width: 100%;
  height: 100%;
  padding-top: 0.45rem;
  padding-bottom: 0.48rem;
}
</style>


