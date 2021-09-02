<template>
  <header>
    <b-navbar variant="faded" type="light" class="d-flex align-items-center justify-content-between">
      <b-navbar-brand tag="h1" class="m-0 font-weight-bolder">Online Cab Request</b-navbar-brand>
      <router-link to="/admin">
        <b-button variant="primary">Admin</b-button>
      </router-link>
    </b-navbar>
  </header>
</template>

<script>
import { BNavbar, BNavbarBrand, BButton } from "bootstrap-vue";

export default {
  name: "Navigation",
  components: {
    "b-button": BButton,
    "b-navbar": BNavbar,
    "b-navbar-brand": BNavbarBrand,
  },
};
</script>

<style>
</style>