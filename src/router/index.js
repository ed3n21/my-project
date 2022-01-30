import Vue from 'vue'
import Router from 'vue-router'
import TournamentList from '../components/TournamentList'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/tournaments',
      name: 'TournamentList',
      component: TournamentList,
      props: true
    },
    {
      path: '/tournaments/:id',
      name: 'TournamentDetails',
      component: () => import(/* webpackChunkName: "details" */ '../components/TournamentDetails'),
      props: true
    }
  ]
})
