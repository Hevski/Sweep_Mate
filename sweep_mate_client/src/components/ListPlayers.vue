<template lang="html">
  <single-player :playersList="playersList"></single-player>
</template>

<script>
import SinglePlayer from './SinglePlayer.vue'
export default {
  // props: ['playersList'],
  data(){
    return {
      playersList: []
    }
  },
  components: {
    SinglePlayer
  },
  // mounted: {
  //   fetch("http://localhost:3000/api/players/")
  //   .then(res => res.json())
  //   .then(players => this.playersList.push(players))
  // },
  methods: {

  }
}
</script>

<style lang="css" scoped>
</style>
