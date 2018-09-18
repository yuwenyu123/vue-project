import Vue from 'vue';
import axios from 'axios';
import { GET_GOODSLIST } from './const'
import { GET_QING } from './const'
import { camel } from '../../modules/server-config'

const actions = {
    get_goodslist (context, data) {
        axios.get(camel + '/product/productList.aspx', {
            params: {
                class_id: data.goods_id,
                brand: 0,
                sort: '',
                page: data.number,
                page_size: 10,
            }
        }).then(res => {
            context.commit({
                type: GET_GOODSLIST,
                goodslist: res.data.list
            })
        })
    },
    get_qing (context) {
        context.commit({
            type: GET_QING,
            goodslist: []
        })
    }
}


export default actions