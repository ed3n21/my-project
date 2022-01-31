<template>
  <span v-if="participant">
    <div class="container col-md-7 my-5">
      <div class="row text-center">
        <div class="col">
          <img
            width="300px"
            height="auto"
            :src="$store.state.rootApiUrl + participant.imageUrl"
          />
        </div>
        <div class="col">
          <h4>{{ participant.firstName }} {{ participant.lastName }}</h4>
          <p>Tournaments: {{ participant.tournaments.length }}</p>
          <p>Tournaments won: {{ participant.tournamentsWon.length }}</p>
          <p>Total prize: {{ participant.totalPrize }}</p>
        </div>
      </div>
    </div>
    <div class="container container col-md-7">
      <table class="table table-borderless">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Tournament</th>
            <th scope="col">Date</th>
            <th scope="col">Prize</th>
            <th scope="col"></th>
          </tr>
        </thead>
        <tbody>
          <tr
            v-for="tournament in participant.tournaments"
            :key="tournament.title"
          >
            <th scope="row">{{ tournament.id }}</th>
            <td>
              <router-link
                class="link-dark"
                :to="{
                  name: 'TournamentDetails',
                  params: { id: tournament.id },
                }"
                >
                    {{ tournament.title }}
              </router-link>
            </td>
            <td>{{new Date(tournament.date).toLocaleDateString()}}</td>
            <td>{{tournament.prize}}</td>
            <td 
            v-if="tournament.winner && tournament.winner.id == id"><font-awesome-icon :icon="['fas', 'trophy']" />
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </span>
</template>

<script>
export default {
  computed: {
    participant() {
        return this.$store.state.currentParticipant
    }
  },

  props: {
    id: {
      type: Number,
      required: true,
    },
  },

  created() {
    this.$store.dispatch("fetchParticipantById", this.id);
  }
};
</script>