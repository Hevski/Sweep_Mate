<template lang="html">

  <!-- <sweepstake-details/> -->
  <new-player-form v-if="!sweepstakeClosed()" :sweep="sweep">
  </new-player-form>
	<p class="notification" v-else>This sweepstake is no longer available.</p>
  <!-- <sweepstake-results v-else="generateResult"></sweepstake-results> -->

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
			const today = new Date();
			const cutOffDate = new Date(this.sweep.cutOffDate);
      //returns true if sweepstake cut off date is past
      return today >= cutOffDate;
    },

    generateResult() {
      //return winners name and option
    }
  }
}
</script>

<style lang="css" scoped>
	.notification {
		color: #F00;
	}
</style>
