<template>
  <b-navbar toggleable="lg" type="light" variant="light">
    <div class="container">
      <b-navbar-brand href="/">
      <router-link class="nav-link text-dark" to="/">Tennis</router-link>
      </b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav class="me-auto">
          <b-nav-item>
            <router-link class="nav-link" to="/tournaments">Tournaments</router-link>
            </b-nav-item>
          <b-nav-item>
            <router-link class="nav-link" to="/participants">Participants</router-link>
            </b-nav-item>
        </b-navbar-nav>
        <b-navbar-nav>
          <b-nav-item>
            <router-link class="nav-link" to="/login">Login</router-link>
            </b-nav-item>
        </b-navbar-nav>
      </b-collapse>
    </div>
  </b-navbar>
</template>