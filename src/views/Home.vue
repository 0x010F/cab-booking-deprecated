<template>
  <b-container>
    <Navigation />
    <RequestForm />
  </b-container>
</template>

<script>
import { BContainer } from "bootstrap-vue"
import Navigation from "@/components/Navigation"
import RequestForm from "@/components/RequestForm"

export default {
  name: "Home",
  components: {
    "b-container": BContainer,
    Navigation,
    RequestForm
  }
}
</script>

<style>
</style>