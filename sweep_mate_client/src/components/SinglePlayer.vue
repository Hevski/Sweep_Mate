<template lang="html">
  <div class="">
    <div class="single-player" v-for="(player, index) in playersList" :key="index">
      <p>Player Name: {{player.name}}</p>
      <div class="" v-for="(game, index) in player.games" :key="index">
        <p>Allocated: {{game.allocatedOption}}</p>
      </div>
    </div>
  </div>

</template>

<script>
// import ListPlayers from './ListPlayers.vue'
export default {
  name: "SinglePlayers",
  props: ['playersList']
}
</script>

<style lang="css" scoped>

.single-player {
  display: flex;
  border-style: solid;
  justify-content: center;
  margin-left: auto;
  margin-right: auto;
  justify-content: space-around;
  margin: 2px;
}
</style>
