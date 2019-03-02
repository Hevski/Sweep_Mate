<template lang="html">
  <div class="">
    <div class="single-player" v-for="(player, index) in playersList" index="id">
      <p>Player Name: {{player.name}}</p>
    </div>
  </div>
</template>

<script>
import ListPlayers from './ListPlayers.vue'
export default {
  name: "SinglePlayers",
  props: ['playersList']
}
</script>

<style lang="css" scoped>
</style>
