import Vue from 'vue'
import Router from 'vue-router'
import Hackathon from '@/components/Hackathon'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hackathon',
      component: Hackathon
    }
  ]
})
