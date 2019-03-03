<template lang="html">
  <single-player :playersList="playersList"></single-player>
</template>

<script>
import SinglePlayer from './SinglePlayer.vue'
export default {
  // props: ['playersList'],
  data(){
    return {
      playersList: [],
      // SweepsPlayers: []
    }
  },
  components: {
    SinglePlayer
  },
  mounted() {
    fetch("http://localhost:3000/api/players/")
    .then(res => res.json())
    .then(players => this.playersList = players)
  },
  methods: {
  //add players from sweep to sweepsPlayers array, list only these
  //per sweep
  }
}
</script>

<style lang="css" scoped>
</style>
