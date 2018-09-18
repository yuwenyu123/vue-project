<template>
    <div class="app-home-title">
        <router-link to='/' class='title_a'>
            <h2>{{data.title}}<span>&gt;</span></h2>
        </router-link>
        <router-link to='/' v-if='data.imgurl' class='title_img'>
            <img :src="data.imgurl" >
        </router-link>
    </div>
</template>

<script>

export default {
    name: 'appHomePartner',
    props:['data']
}
</script>

<style lang = "scss" scoped>
    .app-home-title{
        .title_a{
            display: block;
            height: 0.4688rem;
            h2{
                height: 0.4688rem;
                font-size: 0.18rem;
                line-height: 0.4688rem;
                padding-left: 0.15rem;
                color: #353535;
                span{
                    float:right;
                    padding-right: 0.20rem;
                }
            }
        }
        .title_img{
            img{
                width: 100%;
                height: 1.50rem;
            }
        }
    }
</style>
