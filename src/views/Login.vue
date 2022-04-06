<template>
  <div class="container col-md-3">
    <form :action="loginUrl" method="post">
      <div class="my-3">
      <label class="form-label" for="username">Username</label>
      <input
        type="text"
        id="username"
        class="form-control"
        placeholder="Username"
      />
    </div>
    <div class="mb-3">
      <label class="form-label" for="password">Password</label>
      <input
        type="password"
        id="password"
        class="form-control"
        placeholder="Password"
      />
    </div>
    <!-- @Html.ValidationSummary() -->
    <div class="col-md-12 text-center">
      <button name="login" class="btn btn-primary" type="submit">Login</button>
    </div>
    </form>
  </div>
</template>

<script>

export default {
  data() {
    return {
      loginUrl: process.env.LOGIN_API
    }
  }
};
</script>