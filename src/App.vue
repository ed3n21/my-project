<template>
  <div id="app">
    <TheNavigation/>
    <router-view :key="$route.path"/>
  </div>
</template>

<script>
import TheNavigation from './components/TheNavigation.vue'
import ParticipantList from './components/ParticipantList.vue'
import ParticipantDetails from './components/ParticipantDetails.vue'

export default {
  name: 'App',
  components: {
    TheNavigation,
    ParticipantList,
    ParticipantDetails
  }
}
</script>
