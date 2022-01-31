<template>
  <span>
    <header>
      <img class="image img-fluid"  :src="'http://localhost:62542/' + tournament.imageHeaderUrl">
    </header>
    <div class="intro my-5 text-center">
      <div class="container my-5">
        <h3>{{tournament.title}}</h3>
      </div>
      <div class="container">
        <div class="row">
          <div class="col">
            <h5>Date</h5>
            <p class="details">{{tournament.date}}</p>
          </div>
          <div class="col">
            <h5>Prize</h5>
            <p class="details">${{tournament.prize}}</p>
          </div>
          <div class="col">
            <h5>Winner</h5>
            <p v-if="tournament.winner" class="details">{{tournament.winner.firstName}} {{tournament.winner.lastName}}</p>
            <p v-else class="details">To be determined</p>
          </div>
        </div>
      </div>
    </div>
    <div class="container col-md-7 mb-5">
      <p>{{tournament.description}}</p>
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
          <tr v-for="participant in tournament.participants" v-bind:key="participant.id">
            <th scope="row">{{participant.id}}</th>
            <td>
              <a class="text-dark" href="/members/@part.Id">
              {{participant.firstName}} {{participant.lastName}}</a
              >
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
    tournament() {
      return this.$store.state.currentTournament;
    },
  },

  props: {
    id: {
      type: Number,
      required: true,
    },
  },

  created() {
    this.$store.dispatch("fetchTournamentById", this.id);
  },
};
</script>

<style scoped>
.details {
	color: #fc5356;
}
</style>