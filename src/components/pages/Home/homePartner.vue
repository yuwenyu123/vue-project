<template>
    <div class="app-home-partner">
        <h2>大牌制造商</h2>
        <img src="https://topic.camel.com.cn/module/wap_index_hot_main/cd4a9daf-ee75-4162-913c-8d58ca460148.jpg!/fw/270"/>
        <img src="https://topic.camel.com.cn/module/wap_index_hot_main/9e2b6db3-ab5b-4dfa-a86f-f245090fb52a.jpg!/fw/270"/>
        <img src="https://topic.camel.com.cn/module/wap_index_hot_main/07272820-caf4-440e-b89e-6dddbeee47ce.jpg!/fw/270"/>
        <img src="https://topic.camel.com.cn/module/wap_index_hot_main/f05c3ea3-ef2b-405b-a3de-354c8cfe5986.jpg!/fw/540"/> 
    </div>
</template>

<script>

export default {
    name: 'appHomePartner',
}
</script>

<style lang = "scss" scoped>
    .app-home-partner{
        height: 4.53rem;
        h2{
            height: 0.47rem;
            font-size: 0.18rem;
            line-height:0.47rem;
            color: #353535;
            padding: 0px 0.15rem;
        }
        img:nth-child(2){
            display: inline-block;
            float: left;
            width: 50%;
            height: 2.708rem;
        }
        img:nth-child(3){
            display: inline-block;
            float: right;
            width: 50%;
            height: 1.357rem;
        }
        img:nth-child(4){
            display: inline-block;
            float: right;
            width: 50%;
            height: 1.357rem;
        }
        img:nth-child(5){
            display: block;
            width: 100%;
            height: 1.347rem;
        }
    }
</style>
