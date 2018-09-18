<template>
    <div class="app-shopping">
        <app-head></app-head>
        <app-shopping-logo v-if = "!cart.details.length"></app-shopping-logo>
        <app-shopping-content v-else :data='cart.details'></app-shopping-content>
        <app-bottom></app-bottom>
    </div>
</template>

<script>
import { mapState, mapGetters } from 'vuex'
import appShoppingLogo from './shoppingLogo'
import appShoppingContent from './shoppingContent'
export default {
    name: "appShopping",
    components:{
            appShoppingLogo,
            appShoppingContent
    },
    computed: {
        ...mapState(['details', 'cart']),
        ...mapGetters(['all_num_and_price'])
    },
    methods: {
        reduce (good_id) {
            this.$store.dispatch('action_reduce_good_from_cart', { good_id })
        },
        add (good_id) {
            this.$store.dispatch('action_add_good_in_cart', {
                good_id
            })
        }
    },
    created(){
        this.$store.dispatch('action_get_user_cart')
    }
};
</script>

<style lang="scss" scoped>
.app-shopping {
  width: 100%;
  height: 100%;
  padding-top: 0.45rem;
  padding-bottom: 0.5625rem;
}
</style>


