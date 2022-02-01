<template>
  <div class="container col-md-7 mt-5">
    <!-- <b-table borderless hover :items="participants" :fields="fields">
            <template v-slot:cell(firstName)="row">
                <b-link class="text-dark" :to="{ name: 'ParticipantDetails', params: { id: row.item.id } }">{{row.value}}</b-link>
            </template>
        </b-table> -->

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
                params: { id: participant.id },
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
</template>

<script>
import { mapState, mapActions } from "vuex";

export default {
  computed: {
    ...mapState('participants', {
      participants: (state) => state.items,
    }),
  },

  methods: {
    ...mapActions('participants', {
      fetchParticipants: 'fetchParticipants'
    })
  },

  created() {
    this.fetchParticipants()
  },
};
</script>