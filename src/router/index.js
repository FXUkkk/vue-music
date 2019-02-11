import Vue from 'vue'
import Router from 'vue-router'

const MainLayOut = () => import('../pages/MainLayOut.vue')
const PlayList = () => import('../pages/PlayList.vue')

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      component: MainLayOut
    },
    {
      path: '/playlist',
      component: PlayList
    }
  ]
})
