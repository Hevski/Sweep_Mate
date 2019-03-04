<template lang="html">
  <div class="">
    <h2>Winner: {{winner.name}}</h2>
    <h2>Result: {{winner.allocatedOption}}</h2>
  </div>
</template>

<script>
export default {
  props: ['sweepsPlayers', 'sweep'],
  data(){
    return {
      winner: ""
    }
  },
  methods: {
    findWinner(){
      this.winner = this.sweepsPlayers.find(player => player.allocatedOption === this.sweep.finalAnswer)
    }
  }
}
</script>

<style lang="css" scoped>
</style>
