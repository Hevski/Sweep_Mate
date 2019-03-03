<template lang="html">
  <single-player :playersList="playersList" :sweepsPlayers="sweepsPlayers"></single-player>
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
    .then(players => this.playersList = players)
    .then(players => this.sweepsPlayers = this.playersList.filter(player => player.games.game_id === this.sweep._id ))
    .then(console.log(this.playersList))
  },
  methods: {
  //add players from sweep to sweepsPlayers array, list only these
  //per sweep
  }
}
</script>

<style lang="css" scoped>
</style>
