<template>
  <div>
    <div v-for="tournament in tournaments" :key="tournament.title">
      <router-link
        :to="{ name: 'TournamentDetails', params: { id: tournament.id } }"
      >
        {{ tournament.title }}
      </router-link>
      <figure>
        <router-link
          :to="{ name: 'TournamentDetails', params: { id: tournament.id } }"
        >
          <img :src="'http://localhost:62542/' + tournament.imgUrl" :alt="tournament.title" />
        </router-link>
      </figure>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    tournaments() {
      return this.$store.state.tournaments;
    },
  },

  created() {
    this.$store.dispatch("fetchTournaments");
  },
};
</script>