<template>
  <section id="wrapper">
    <div class="container-fluid col-md-3">
      <form @submit.prevent="handleSubmit">
        <div class="form-group">
          <div class="my-3">
            <label class="form-label" for="username">Username</label>
            <input
              type="text"
              id="username"
              class="form-control"
              placeholder="Username"
              v-model="username"
            />
          </div>
          <div v-show="submitted && !username" class="invalid-feedback">Username is required</div>
        </div>
        <div class="form-group">
          <div class="mb-3">
          <label class="form-label" for="password">Password</label>
          <input
            type="password"
            id="password"
            class="form-control"
            placeholder="Password"
            v-model="password"
            @keyup.enter="handleLogin"
          />
          <div v-show="submitted && !password" class="invalid-feedback">Password is required</div>
        </div>
        </div>
        <!-- @Html.ValidationSummary() -->
        <div class="form-group">
          <div class="text-center">
            <button class="btn btn-primary" :disabled="loggingIn">Login</button>
            <img v-show="loggingIn" src="../assets/spinner.gif" />
          </div>
        </div>
      </form>
    </div>
  </section>
</template>

<script>
import { mapState, mapActions } from "vuex";

export default {
  data() {
    return {
      username: "",
      password: "",
      submitted: false,
    };
  },
  computed: {
    ...mapState("authentication", {
      loggingIn: (state) => state.status.loggingIn,
    }),
  },
  methods: {
    ...mapActions("authentication", {
      login: "login",
    }),
    handleSubmit(e) {
      this.submitted = true;
      const { username, password } = this;
      this.login({ username, password });
    },
  },
};
</script>

<style scoped>
label {
  font-size: 20px;
}
</style>