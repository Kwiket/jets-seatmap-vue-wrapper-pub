import Vue from 'vue'
import App from './App.vue'
import JetsSeatmap from "jets-seatmap-vue-wrapper"
Vue.use(JetsSeatmap)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
