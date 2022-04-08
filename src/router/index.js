import Vue from "vue";
import Router from "vue-router";
import Home from "../views/Home";

Vue.use(Router);

const router = new Router({
  mode: "history",
  routes: [
    {
      path: "/",
      name: "Home",
      component: Home
    },
    {
      path: "/tournaments",
      name: "TournamentList",
      component: () =>
        import(
          /* webpackChunkName: "tournamentList" */ "../views/TournamentList"
        ),
      props: true
    },
    {
      path: "/tournaments/:tournamentId",
      name: "TournamentDetails",
      component: () =>
        import(
          /* webpackChunkName: "tournamentDetails" */ "../views/TournamentDetails"
        ),
      props: route => ({ id: Number(route.params.tournamentId) })
    },
    {
      path: "/participants",
      name: "ParticipantList",
      component: () =>
        import(
          /* webpackChunkName: "participantList" */ "../views/ParticipantList"
        ),
      props: true
    },
    {
      path: "/participants/:participantId",
      name: "ParticipantDetails",
      component: () =>
        import(
          /* webpackChunkName: "participantDetails" */ "../views/ParticipantDetails"
        ),
      props: route => ({ id: Number(route.params.participantId) })
    },
    {
      path: "/login",
      name: "Login",
      component: () => import(/* webpackChunkName: "login" */ "../views/Login")
    },
    {
      path: "/logout",
      name: "Logout",
      component: () => import(/* webpackChunkName: "login" */ "../views/Login")
    }
  ]
});

export default router;

router.beforeEach((to, from, next) => {
  // redirect to login page if not logged in and trying to access a restricted page
  const publicPages = ["/login"];
  const authRequired = !publicPages.includes(to.path);
  const loggedIn = localStorage.getItem("user");

  if (authRequired && !loggedIn) {
    return next("/login");
  } else {
    next();
  }
});
