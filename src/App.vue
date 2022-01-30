<template>
  <div id="app">
    <TheNavigation/>
    <hr>
    <router-view :key="$route.path"/>
  </div>
</template>

<script>
import TournamentList from './components/TournamentList.vue'
import TheNavigation from './components/TheNavigation.vue'

export default {
  name: 'App',
  components: {
    TournamentList,
    TheNavigation
  },

  mounted() {
    let recaptchaScript = document.createElement('script')
    recaptchaScript.setAttribute('src', 'https://www.google.com/recaptcha/api.js')
    document.head.appendChild(recaptchaScript)
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
