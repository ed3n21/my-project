<template>
  <div class="container mt-3" v-if="tournaments">
    <div class="row">
      <div
        class="col m-2"
        v-for="tournament in tournaments"
        :key="tournament.title"
      >
        <router-link class="link-dark text-decoration-none"
          :to="{ name: 'TournamentDetails', params: { id: tournament.id } }"
        >
          {{ tournament.title }}
        </router-link>
        <figure>
          <router-link
            :to="{ name: 'TournamentDetails', params: { id: tournament.id } }"
          >
            <img width="400px" height="250px"
              :src="$store.state.rootApiUrl + tournament.imageUrl"
              :alt="tournament.title"
            />
          </router-link>
        </figure>
      </div>
    </div>
  </div>
</template>

<script>
import {mapState, mapActions} from 'vuex'

export default {
  computed: {
    ...mapState('tournaments', {
      tournaments: (state) => state.items
    })
  },

  methods: {
    ...mapActions('tournaments', {
      fetchTournaments: 'fetchTournaments'
    })
  },

  created() {
    this.fetchTournaments()
  },
};
</script>