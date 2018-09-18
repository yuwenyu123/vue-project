
<template>
    <div class='special-list' >
        <div>
            <div class="list" v-for='article in articles' :key='article.id'>
                <div class="title">
                    <router-link to='/' class='articles'>
                        <img :src="article.head_portrait" >
                        <p>{{decodeURI(article.author)}}</p>
                    </router-link>
                </div>
                <div class="get_img">
                    <router-link to='/'>
                        <img :src="article.image_url" >
                    </router-link>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import axios from 'axios'
    export default{
        name: 'specialList',
        data(){
            return {
                articles: [],
                page: 1,
                page_size: 5,
                loaded: true
            }
        },
        methods: {
            getBanners () {
                this.$http.get('/camel/portal/topicList.aspx',{
                    params: {
                        page: this.page,
                        page_size: this.page_size
                    }
                }).then(res => {
                    this.articles = res.data.list;
                })
            },
        },
        created () {
            this.getBanners()
        },
        mounted(){
            var that = this;
            window.addEventListener('scroll',function(){
                if(document.body.scrollTop + document.body.innerHeight >= document.body.offsetHeight) {
                    console.log(1)
                    that.page ++;
                    if (!that.loaded) {
                        that.isShowLoading=true;
                    }
                    if(that.page <=4){
                        axios.get(this.server_config.camel+"/portal/topicList.aspx", {
                            params: {
                                page: that.page,
                                page_size: that.page_size
                            }
                        }).then(function (res) {
                            that.loaded = true;
                            that.articles.push(...res.data.list); //push进去渲染
                            that.isShowLoading=false;
                            that.ShowLoadingTip="没有更多了";
                            // loaded && loaded("done");
                        }, function (error) {
                            that.page--;
                            console.log("error");
                        })  
                    }
                } 
            })
        },
        boforedestroy(){
            window.removeEventListener('scroll',function(){
                if(document.body.scrollTop + window.innerHeight >= document.body.offsetHeight) {
                    that.page ++;
                    if (!that.loaded) {
                        that.isShowLoading=true;
                    }
                    if(that.page <=4){
                        axios.get(this.server_config.camel+"/portal/topicList.aspx", {
                            params: {
                                page: that.page,
                                page_size: that.page_size
                            }
                        }).then(function (res) {
                            that.loaded = true;
                            that.articles.push(...res.data.list); //push进去渲染
                            that.isShowLoading=false;
                            that.ShowLoadingTip="没有更多了";
                            // loaded && loaded("done");
                        }, function (error) {
                            that.page--;
                            console.log("error");
                        })  
                    }
                } 
            })
        }
    }
</script>

<style lang="scss" scoped>
.special-list {
  .list {
    background: #fff;
    margin-top: 0.1rem;
    .title {
      width: 100%;
      padding: 0.1rem 0.15rem;
      height: 0.52rem;
      .articles {
        height: 0.52rem;
        img {
          width: 0.32rem;
          height: 0.32rem;
          border-radius: 50%;
          float: left;
          margin-right: 0.1rem;
        }
        p {
          float: left;
          font-size: 0.16rem;
          line-height: 0.32rem;
        }
      }
    }
    .get_img {
      height: 2.08rem;
      a {
        img {
          width: 100%;
          height: 2.08rem;
        }
      }
    }
  }
}
</style>
