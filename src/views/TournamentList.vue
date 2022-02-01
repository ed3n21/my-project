<template>
  <div class="container mt-3">
    <div v-if="loading">
      <img class="mx-auto d-block" src="../assets/spinner.gif" />
    </div>
    <div v-else>
      <div class="row">
        <div
          class="col m-2"
          v-for="tournament in tournaments"
          :key="tournament.id"
        >
          <router-link
            class="link-dark text-decoration-none"
            :to="{
              name: 'TournamentDetails',
              params: { tournamentId: tournament.id },
            }"
          >
            {{ tournament.title }}
          </router-link>
          <figure>
            <router-link
              :to="{
                name: 'TournamentDetails',
                params: { tournamentId: tournament.id },
              }"
            >
              <img
                width="400px"
                height="250px"
                :src="$store.state.rootApiUrl + tournament.imageUrl"
                :alt="tournament.title"
              />
            </router-link>
          </figure>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";

export default {
  data() {
    return {
      loading: false,
    };
  },

  computed: {
    ...mapState("tournaments", {
      tournaments: (state) => state.items,
    }),
  },

  methods: {
    ...mapActions("tournaments", {
      fetchTournaments: "fetchTournaments",
    }),
  },

  async created() {
    this.loading = true;
    await this.fetchTournaments();
    this.loading = false;
  },
};
</script>