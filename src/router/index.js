import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import List from '@/components/List'
import users from '@/components/users'

Vue.use(Router)


export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/ga-bi',
      name: 'GaBi',
      component: List
    },

    {
      path: '/u-sers',
      name: 'Users',
      component: users
    }
  ]
})
