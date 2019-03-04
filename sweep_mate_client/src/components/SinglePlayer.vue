<template lang="html">
<<<<<<< HEAD
  <div class="player-list">
=======

  <div v-if="sweepsPlayers" class="player-list">
>>>>>>> develop
    <div class="single-player" v-for="(player, index) in sweepsPlayers" :key="index">
      <p>Player Name: {{player.name}}</p>
      <div class="" v-for="(game, index) in player.games" :key="index" >
        <p>Allocated: {{game.allocatedOption}}</p>
      </div>
    </div>
  </div>
</template>

<script>
// import ListPlayers from './ListPlayers.vue'
export default {
  name: "SinglePlayers",
  props: ['sweepsPlayers']
}
</script>

<style lang="css" scoped>

.single-player {
  display: flex;
  justify-content: center;
  margin: 2px;
}
.player-list {
  border-style: solid;
}
</style>
