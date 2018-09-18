import Vue from 'vue';
import axios from 'axios';
import { GET_DATA } from './const'
import { camel } from '../../modules/server-config'

const actions = {
    get_data (context, i) {
        axios.get(camel + '/category.aspx').then(res => {
            context.commit({
                type: GET_DATA,
                articles: res.data.list[i]
            })
        })
    }

}


export default actions