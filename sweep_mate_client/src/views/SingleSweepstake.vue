<template lang="html">
  <div v-if="sweep">
    <sweepstake-details :sweep="sweep" :sweepstakeClosed="sweepstakeClosed"/>
    <p>{{message}}</p>
    <list-players :playersList="playersList" :sweepsPlayers="sweepsPlayers"></list-players>
    <new-player-form v-if="!sweepstakeClosed() && optionsLength > 0" :sweep="sweep"></new-player-form>
    <sweepstake-results :sweep="sweep" :sweepsPlayers="sweepsPlayers"></sweepstake-results>
  </div>
</template>

<script>
import { eventBus } from '../main.js';
import NewPlayerForm from '../components/NewPlayerForm.vue';
import SweepstakeDetails from '../components/SweepstakeDetails.vue';
import ListPlayers from '../components/ListPlayers.vue';
import sweepstakeResults from '../components/SweepstakeResults.vue';

export default {
  data(){
    return {
      sweep: '',
      playersList: [],
      sweepsPlayers: [],
      message: '',
      optionsLength: 0,
      winner: ''
    }
  },
  mounted(){
    // get the sweepstake object
    const id = this.$route.params.id
    fetch("http://localhost:3000/api/sweepstakes/" + id)
    .then(res => res.json())
    .then(res => {
      this.sweep = res
      this.optionsLength = this.sweep.options.filter(option => option.allocated === false).length
      eventBus.$on('option-allocated', allocatedOption => {this.makeOptionUnavailable(allocatedOption)
      this.reduceOptions()
     })
    });
    fetch("http://localhost:3000/api/players/")
    .then(res => res.json())
    .then(players => {
      this.playersList = players
      this.sweepsPlayers = this.filterSweepPlayers()
      this.winner = this.findWinner()
    })
  },
  components: {
    SweepstakeDetails,
    ListPlayers,
    NewPlayerForm,
    sweepstakeResults
  },
  methods: {
    sweepstakeClosed() {
      const today = new Date();
      const cutOffDate = this.sweep.cutOffDate ? new Date(this.sweep.cutOffDate) : null ;
      //returns true if sweepstake cut off date is past
      return today >= cutOffDate;
    },
    makeOptionUnavailable(optionName){
      const optionToRemove = this.sweep.options.find( option => option.name === optionName);
      optionToRemove.allocated = true

      //save changes to database
      fetch("http://localhost:3000/api/sweepstakes/" + this.sweep._id, {
        method: 'put',
        body: JSON.stringify(this.sweep),
        headers: { 'Content-Type': 'application/json'}
      })
    },
    filterSweepPlayers(){
      const finalResult = []
      this.playersList.forEach((player) => {
        const playerHasSweep = player.games.find(game => game.game_id === this.sweep._id)
        if (playerHasSweep) {
          finalResult.push(player)
        }
      })
      return finalResult
    },
    reduceOptions(){
      this.optionsLength -= 1
      if (this.optionsLength < 1) {
      this.message = "Sweep full"
     }
   },
   findWinner(){
     let winner = ''
     this.sweepsPlayers.forEach(player => {
     const hasWinningOption = player.games.find(game => game.allocatedOption === this.sweep.finalAnswer)
     if (hasWinningOption) {
       winner = player
     }
     return winner
   })
   }
  }
}
</script>

<style lang="css" scoped>
</style>
