<template>
  <div>
  <b-navbar toggleable="lg" type="light" variant="light">
    <b-navbar-brand href="#">Tennis</b-navbar-brand>

    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav>
        <b-nav-item href="#"><router-link class="nav-link" to="/tournaments">Tournaments</router-link></b-nav-item>
        <b-nav-item href="#"><router-link class="nav-link" to="/participants">Participants</router-link></b-nav-item>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</div>

</template>