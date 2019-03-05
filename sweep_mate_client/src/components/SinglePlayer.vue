<template lang="html">
  <div class="player-list">
    <div class="single-player" v-for="(player, index) in sweepsPlayers" :key="index">
      <p>Player Name: {{player.name}}</p>
      <div class="option" v-for="(game, index) in player.games" :key="index" >
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

.option {
  padding-left: 40px;
}
</style>
