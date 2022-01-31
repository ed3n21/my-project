import Vue from 'vue'
import Router from 'vue-router'

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
      path: '/tournaments',
      name: 'TournamentList',
      component: () => import(/* webpackChunkName: "tournamentList" */ '../components/TournamentList'),
      props: true
    },
    {
      path: '/tournaments/:id',
      name: 'TournamentDetails',
      component: () => import(/* webpackChunkName: "tournamentDetails" */ '../components/TournamentDetails'),
      props: dynmaicPropsFn
    },
    {
      path: '/participants',
      name: 'ParticipantList',
      component: () => import(/* webpackChunkName: "participantList" */ '../components/ParticipantList'),
      props: true
    },
    {
      path: '/participants/:id',
      name: 'ParticipantDetails',
      component: () => import(/* webpackChunkName: "participantDetails" */ '../components/ParticipantDetails'),
      props: dynmaicPropsFn
    }
  ]
})
