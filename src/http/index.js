import Vue from 'vue'
import VueResource from 'vue-resource'
import services from './services'
//import interceptors from './interceptors'

Vue.use(VueResource)

const http = Vue.http

http.options.root = 'http://192.168.15.160:5500/api/'

//http.interceptors.push(interceptors)

Object.keys(services).map(service => {
  services[service] = Vue.resource('', {}, services[service])
})

//Define o header para que as requisições utilizem o token
const setBearerToken = token => {
  http.headers.common['Authorization'] = `Bearer ${token}`
}

export default services
export { http, setBearerToken }
