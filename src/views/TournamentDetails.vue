<template>
  <span>
    <div v-if="loading">
      <img class="mx-auto d-block" src="../assets/spinner.gif" />
    </div>
    <div v-else>
      <header>
        <img
          class="image img-fluid"
          :src="$store.state.rootApiUrl + tournament.imageHeaderUrl"
        />
      </header>
      <div class="intro my-5 text-center">
        <div class="container my-5">
          <h3>{{ tournament.title }}</h3>
        </div>
        <div class="container">
          <div class="row">
            <div class="col">
              <h5>Date</h5>
              <p class="details">
                {{ new Date(tournament.date).toLocaleDateString() }}
              </p>
            </div>
            <div class="col">
              <h5>Prize</h5>
              <p class="details">${{ tournament.prize }}</p>
            </div>
            <div class="col">
              <h5>Winner</h5>
              <p v-if="tournament.winner" class="details">
                {{ tournament.winner.firstName }}
                {{ tournament.winner.lastName }}
              </p>
              <p v-else class="details">To be determined</p>
            </div>
          </div>
        </div>
      </div>
      <div class="container col-md-7 mb-5">
        <div v-html="tournament.description"></div>
      </div>
      <div class="container container col-md-7">
        <table class="table table-borderless">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Participants</th>
            </tr>
          </thead>
          <tbody>
            <tr
              v-for="participant in tournament.participants"
              v-bind:key="participant.id"
            >
              <th scope="row">{{ participant.id }}</th>
              <td>
                <router-link
                  class="link-dark"
                  :to="{
                    name: 'ParticipantDetails',
                    params: { participantId: participant.id },
                  }"
                >
                  {{ participant.firstName }} {{ participant.lastName }}
                </router-link>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </span>
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
      tournament: (state) => state.currentTournament,
    }),
  },

  props: {
    id: {
      type: Number,
      required: true,
    },
  },

  methods: {
    ...mapActions("tournaments", {
      fetchTournamentById: "fetchTournamentById",
    }),
  },

  async created() {
    this.loading = true;
    await this.fetchTournamentById(this.id);
    this.loading = false;
  },
};
</script>

<style scoped>
.details {
  color: #fc5356;
}
</style>