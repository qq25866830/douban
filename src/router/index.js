import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

import movie from './movie/'
import discuss from './discuss'
import seek from './seek'
import  prevue from './prevue'
// import diupin from './diupin'
import diupin from './doupin'
export default new Router({
  routes: [
    movie,
    discuss,
    seek,
    prevue,
    diupin

  ]
})
