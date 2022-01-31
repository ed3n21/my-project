<template>
  <div id="app">
    <TheNavigation/>
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


</style>
