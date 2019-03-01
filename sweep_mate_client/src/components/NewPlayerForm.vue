<template lang="html">
  <form action="/SingleSweepstake.vue">
    First name:<br>
    <input type="text" name="firstname" value="name">
    <br>
    E-Mail:<br>
    <input type="text" name="email" value="email">
    <br><br>
    <input type="submit" value="Submit">
  </form>

  <!-- name, email,  -->

  <!-- submit button v:on-click="generateChoice"-->
</template>

<script>
export default {
  methods: {
    generateChoice() {

    }
  }
}
</script>

<style lang="css" scoped>
</style>
