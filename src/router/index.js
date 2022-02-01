import Vue from 'vue'
import Router from 'vue-router'
import Home from '../views/Home'

Vue.use(Router)

function dynmaicPropsFn(route) {
    return {
      id: Number(route.params.id),
    };
}

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
      path: '/tournaments/:id',
      name: 'TournamentDetails',
      component: () => import(/* webpackChunkName: "tournamentDetails" */ '../views/TournamentDetails'),
      props: dynmaicPropsFn
    },
    {
      path: '/participants',
      name: 'ParticipantList',
      component: () => import(/* webpackChunkName: "participantList" */ '../views/ParticipantList'),
      props: true
    },
    {
      path: '/participants/:id',
      name: 'ParticipantDetails',
      component: () => import(/* webpackChunkName: "participantDetails" */ '../views/ParticipantDetails'),
      props: dynmaicPropsFn
    }
  ]
})
