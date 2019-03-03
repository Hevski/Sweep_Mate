<template lang="html">
  <div class="player-list">
    <div class="single-player" v-for="(player, index) in sweepsPlayers" index="id">
      <p>Player Name: {{player.name}}</p>
      <div class="" v-for="game in player.games">
        <p>Allocated: {{game.allocatedOption}}</p>
      </div>
    </div>
  </div>
</template>

<script>
import ListPlayers from './ListPlayers.vue'
export default {
  name: "SinglePlayers",
  props: ['playersList', 'sweepsPlayers']
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
