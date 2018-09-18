<template>
    <div class="app-special">
        <app-head></app-head>
        <special-list></special-list>
        <app-bottom></app-bottom>
    </div>
</template>

<script>
import specialList from './specialList'

export default {
    name: "appSpecial",
    components: {
        specialList
    },
    data(){
        return {
            res: ''
        }
    }
};
</script>

<style lang="scss" scoped>
    .app-special{
        width:100%;
        padding-top: 0.45rem;
        padding-bottom: 0.5625rem;
    }
</style>


