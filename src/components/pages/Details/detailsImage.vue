<template>
    <div class="app-detatils-image">
        <div class="get_img" v-if='show'>
            <img :src="list.url" width='100%' :height='list.height*0.5' v-for='(list, i) in goods.detail_image_list' :key='i'>
        </div>
    </div>
</template>

<script>
    import { mapState } from 'vuex';
    export default {
        name: "appDetailsImage",
        computed: {
            ...mapState({
                goods: state => state.details.goods
            }),
            show(){
                if(!this.goods){
                    return false;
                } 
                return true
            }
        },
        created () {
            this.$store.dispatch('get_details', {
                list_id:this.$route.params.list_id,
            });
        },
    };
</script>

<style lang="scss" scoped>
.app-detatils-image {
}
</style>


