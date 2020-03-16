import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'
import VueHtml2Canvas from 'vue-html2canvas';
import Fragment from 'vue-fragment';

import jsPDF from 'jspdf'



Vue.use(VueHtml2Canvas);
Vue.use(jsPDF);
Vue.use(Fragment.Plugin);

Vue.config.productionTip = false

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')

