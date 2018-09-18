module.exports = {
    proxy: {
          '/camel': {    //将www.exaple.com印射为/apis
              target: 'https://appyou.camel.com.cn',  // 接口域名
              changeOrigin: true,  //是否跨域
              pathRewrite: {
                  '^/camel': ''   //需要rewrite的,
              }              
          }
    }
  }
  