
import Vue from 'vue';
import appHead from '../components/commons/head.vue';
import appHeadLogin from '../components/commons/headLogin.vue';
import appHeadGoodslist from '../components/commons/headGoodslist.vue';
import appHeadDetails from '../components/commons/headDetails.vue';
import appBottom from '../components/commons/bottom.vue';
import appDetailsBottom from '../components/commons/detailsBottom.vue';


Vue.component('app-head', appHead);
Vue.component('app-bottom', appBottom);
Vue.component('app-head-login', appHeadLogin);
Vue.component('app-head-goodslist', appHeadGoodslist);
Vue.component('app-head-details', appHeadDetails);
Vue.component('app-details-bottom', appDetailsBottom);