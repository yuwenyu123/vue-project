
// const is_proxy = process.env.NODE_ENV === 'production'
const is_proxy = false


const camel = is_proxy ? '/camel' : 'https://appyou.camel.com.cn'

export {
    camel
}

export default { camel }