
<template>
    <div class='classify-cate-left' >
        <ul class="list">
            <li :class="{active:index==i}" @click="[get_index(i), get_kind(i)]" v-for='(list,i) in Data' :key='list.id'>{{decodeURI(list.name)}}</li>
        </ul>
    </div>
</template>

<script>

    export default{
        name: 'classifyCateLeft',
        props: ['Data'],
        data(){
            return{
                index: 0
            }
        },
        methods:{
            get_index(num){
                this.index = num;
            },
            get_kind(i){
                this.$store.dispatch('get_data', i)
            }
        },
        created () {
            this.$store.dispatch('get_data', 0)
        }
    }
</script>

<style lang="scss" scoped>
.classify-cate-left{
    width: 0.825rem;
    background: #fff;
    position: fixed;
    left: 0;
    height: 100%;
    border-right: 1px solid #ccc;
    ul{
        li{
            font-size: 0.14rem;
            margin-top: 0.225rem;
            text-align: center;
            transition: all 0.3s ease-in-out;
            &.active {
                color: #ab2b2b;
                font-size: 0.16rem;
            }
        }
    }
}
</style>
