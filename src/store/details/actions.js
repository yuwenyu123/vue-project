import Vue from 'vue';
import axios from 'axios';
import { GET_DETAILS } from './const'
import { camel } from '../../modules/server-config'

const actions = {
    get_details (context, data) {
        axios.get(camel + '/product/productDetail', {
            params: {
                product_id: data.list_id,
            }
        }).then(res => {
            context.commit({
                type: GET_DETAILS,
                goods: res.data.info
            })
        })
    },
}


export default actions