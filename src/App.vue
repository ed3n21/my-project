<template>
  <div id="app">
    <TheNavigation/>
    <router-view :key="$route.path"/>
  </div>
</template>

<script>
import TheNavigation from './components/TheNavigation.vue'

export default {
  name: 'App',
  components: {
    TheNavigation
  }
}
</script>
