<template lang="html">
  <div>
    <h2>Winner: {{winner.name}}</h2>
    <h2>Result: {{winner.finalAnswer}}</h2>
  </div>
</template>

<script>
export default {
  props: ['sweepsPlayers', 'sweep'],
  data(){
    return {
      winner: ''
    }
  },
  methods: {
    // findWinner(){
    //   this.sweepsPlayers.forEach(player => {
    //   const hasWinningOption = player.games.find(game => game.allocatedOption === this.sweep.finalAnswer)
    //   if (hasWinningOption) {
    //     return this.winner = player
    //
    //   }
    // })
    // }
  }
}
</script>

<style lang="css" scoped>
</style>
