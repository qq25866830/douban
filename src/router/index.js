import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

import movie from './movie/'
import discuss from './discuss'
import seek from './seek'
export default new Router({
  routes: [
    movie,
    discuss,
    seek,
    
  ]
})
