import Vue from 'vue'
import App from './App.vue'
import router from './router'
import VueGoogleCharts from 'vue-google-charts'

Vue.use(VueGoogleCharts)
// import VModal from 'vue-js-modal';
//
// Vue.use(VModal, {dialog: true});

Vue.config.productionTip = false

export const eventBus = new Vue();

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
