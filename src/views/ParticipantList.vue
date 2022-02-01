<template>
  <span>
    <div v-if="loading">
      <img class="mx-auto d-block" src="../assets/spinner.gif" />
    </div>
    <div v-else>
      <div class="container col-md-7 mt-5">
        <table class="table table-borderless">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Name</th>
              <th scope="col">Total Prize</th>
              <th scope="col">Tournaments Played</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="participant in participants" :key="participant.id">
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
              <td>{{ participant.totalPrize }}</td>
              <td>{{ participant.tournaments.length }}</td>
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
    ...mapState("participants", {
      participants: (state) => state.items,
    }),
  },

  methods: {
    ...mapActions("participants", {
      fetchParticipants: "fetchParticipants",
    }),
  },

  async created() {
    this.loading = true;
    await this.fetchParticipants();
    this.loading = false;
  },
};
</script>