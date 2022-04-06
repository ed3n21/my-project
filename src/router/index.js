import Vue from 'vue'
import Router from 'vue-router'
import Home from '../views/Home'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/tournaments',
      name: 'TournamentList',
      component: () => import(/* webpackChunkName: "tournamentList" */ '../views/TournamentList'),
      props: true
    },
    {
      path: '/tournaments/:tournamentId',
      name: 'TournamentDetails',
      component: () => import(/* webpackChunkName: "tournamentDetails" */ '../views/TournamentDetails'),
      props: (route) => ({id: Number(route.params.tournamentId)})
    },
    {
      path: '/participants',
      name: 'ParticipantList',
      component: () => import(/* webpackChunkName: "participantList" */ '../views/ParticipantList'),
      props: true
    },
    {
      path: '/participants/:participantId',
      name: 'ParticipantDetails',
      component: () => import(/* webpackChunkName: "participantDetails" */ '../views/ParticipantDetails'),
      props: (route) => ({id: Number(route.params.participantId)})
    },
    {
      path: '/login',
      name: 'Login',
      component: () => import(/* webpackChunkName: "login" */ '../views/Login'),
    }
  ]
})
