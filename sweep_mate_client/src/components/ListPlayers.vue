<template lang="html">
  <div class="">
    <single-player :playersList="playersList" :sweepsPlayers="sweepsPlayers"></single-player>
  </div>

</template>

<script>
import SinglePlayer from './SinglePlayer.vue'
export default {
  props: ['sweep'],
  data(){
    return {
      playersList: [],
      sweepsPlayers: []
    }
  },
  components: {
    SinglePlayer
  },
  mounted() {
    fetch("http://localhost:3000/api/players/")
    .then(res => res.json())
    .then(players => {
      this.playersList = players
      this.sweepsPlayers = this.filterSweepPlayers()
    });
  },
  methods: {
    filterSweepPlayers(){
      const finalResult = []
      this.playersList.forEach((player) => {
        console.log(this.sweep);
        const playerHasSweep = player.games.find(game => game.game_id === this.sweep._id)
        if (playerHasSweep) {
          finalResult.push(player)
        }
      })
      return finalResult
    }
  }
}
</script>

<style lang="css" scoped>
</style>
