<template lang="html">
  <div class="">
    <div class="">
      <list-players :playersList="playersList" v-if="playersList">
      </list-players>
    </div>
    <!-- <sweepstake-details/> -->
    <new-player-form :sweep="sweep">
    </new-player-form>
    <!-- <sweepstake-results v-else="generateResult"></sweepstake-results> -->
  </div>
</template>

<script>
import NewPlayerForm from '../components/NewPlayerForm.vue'
import ListPlayers from '../components/ListPlayers.vue'
import SinglePlayer from '../components/SinglePlayer.vue'
export default {
  // mounted() {
  //   // fetch("http://localhost:3000/api/sweepstakes/" + $route.params.id)
  // },
	data(){
		return {
			sweep: '',
      playersList: []
		}
	},
	mounted(){
		const id = this.$route.params.id
		fetch("http://localhost:3000/api/sweepstakes/" + id)
			.then(res => res.json())
			.then(res => this.sweep = res)
    // fetch("http://localhost:3000/api/players/")
    //   .then(res => res.json())
    //   .then(players => this.playersList.push(players))
	},
	components: {
		NewPlayerForm,
    ListPlayers
	},
  methods: {
    sweepstakeClosed() {
      //returns true if sweepstake cut off date is past
      return false;
    },

    generateResult() {
      //return winners name and option
    }
  }
}
</script>

<style lang="css" scoped>
</style>
