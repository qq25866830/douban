import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

import movie from './movie/'
import discuss from './discuss'
export default new Router({
  routes: [
    movie,
    discuss,
    
  ]
})
