<template>
  <div class="container mt-3">
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
              :src="'http://localhost:62542/' + tournament.imgUrl"
              :alt="tournament.title"
            />
          </router-link>
        </figure>
      </div>
    </div>
  </div>
</template>
<div class="container mt-3">
    <div class="row">
        @foreach(var item in Model.Children<Tournament>()) 
        {
        <div class="col m-2">
            <a class="link-dark text-decoration-none" href="@item.Url">
                <img width="400px" height="250px" src="@item.Image.Url" alt="@item.Title">
                <p>@item.Title</p>
            </a>
        </div>
        }
    </div>
</div>

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