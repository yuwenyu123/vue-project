<template>
    <div class="app-client">
        <div class="header">
            <span class='title'>北京骆驼鞋业有限公司</span>
        </div>
        <ul class="content">
            <li class='list' v-for='(msg,i) in msgs' :key='i'>
                <img :src="msg.imgurl" >
                <span>{{msg.title}}</span>
            </li>
        </ul>
        <div class="bottom">
            <input type="text" v-model='abc' class='txt' @keyup.enter='showMsg'>
        </div>
    </div>
</template>

<script>
import axios from 'axios'
export default {
    name: "appClient",
    data(){
        return{
            msgs:[{imgurl:'http://ysf.nosdn.127.net/D07ACB090CDCC3CE5EB7A301FFE3092C',title:'您好，请问有什么可以帮到亲的呢！'}],
            abc:''
        }
    },
    methods:{
        res(){
            axios.get('http://www.tuling123.com/openapi/api?key=c75ba576f50ddaa5fd2a87615d144ecf&info='+'你好',).then(data=>{
                this.msgs.push({
                    imgurl:'http://ysf.nosdn.127.net/D07ACB090CDCC3CE5EB7A301FFE3092C',
                    title: data.data.text
                })
            })
        },
        showMsg(){
            this.msgs.push({
                imgurl:'http://img1.touxiang.cn/uploads/20140424/24-064254_613.jpg',
                title: this.abc
            });
            this.abc=''
            this.res()
            window.scrollTo(0,window.innerHeight)
        }
    }
};
</script>

<style lang="scss" scoped>
@import '../../../stylesheets/_base.scss';
.app-client {
  width: 100%;
  padding-top: 0.46rem;
  padding-bottom: 0.52rem;
  .header {
    width: 100%;
    height: 0.46rem;
    position: fixed;
    top: 0;
    left: 0;
    background: $base-color;
    .title {
      height: 0.46rem;
      line-height: 0.46rem;
      font-size: 0.16rem;
      color: #fff;
      padding-left: 0.1rem;
    }
  }
  .content {
    margin-top: 0.3rem;
    padding: 0 0.1rem;
    li {
      margin-top: 0.1rem;
      img {
        display: inline-block;
        width: 0.38rem;
        height: 0.38rem;
        border-radius: 50%;
        margin-right: 0.1rem;
      }
      span {
        font-size: 0.14rem;
        line-height: 0.38rem;
      }
    }
    li:nth-child(2n) {
      overflow: hidden;
      img {
        float: right;
        margin-left: 0.1rem;
      }
      span {
        float: right;
      }
    }
  }
  .bottom {
    height: 0.52rem;
    background: #ccd5d8;
    width: 100%;
    position: fixed;
    bottom: 0;
    left: 0;
    padding: 0.1rem;
    .txt {
      width: 100%;
      height: 100%;
      display: block;
      border: 1px solid #ccd5d8;
      border-radius: 3px;
      font-size: 0.14rem;
      padding-left: 0.1rem;
    }
  }
}
</style>


