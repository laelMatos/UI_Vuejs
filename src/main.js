import Vue from 'vue'
import App from './App'
import store from './store'
import router from './router'


//Importação de componentes e plugins global
import GlobalComponents from './global-plugins-components'

Vue.config.productionTip = false

Vue.use(GlobalComponents)

window._Vue = new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
