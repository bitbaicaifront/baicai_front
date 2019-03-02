import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import WayList from '../views/wayList'
import WayEdit from '../views/wayEdit'
import Design from '../views/design'
import OuterHTML from '../views/OuterHTML'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/wayList',
      name: 'WayList',
      component: WayList
    },
    {
      path: '/wayEdit',
      name: 'WayEdit',
      component: WayEdit
    },
    {
      path: '/design',
      name: 'Design',
      component: Design
    },
    {
      path: '/outerHTML',
      name: 'OuterHTML',
      component: OuterHTML
    }
  ]
})
