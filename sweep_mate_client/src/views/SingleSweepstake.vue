<template lang="html">
  <div class="">
		<sweepstake-details v-if="sweep" :sweep="sweep" :sweepstakeClosed="sweepstakeClosed"/>
		<list-players :sweep="sweep"></list-players>
    <new-player-form v-if="sweep && !sweepstakeClosed()" :sweep="sweep"></new-player-form>
  </div>

	<!-- <sweepstake-results v-else="showResult"></sweepstake-results> -->

</template>

<script>
import { eventBus } from '../main.js';
import NewPlayerForm from '../components/NewPlayerForm.vue';
import SweepstakeDetails from '../components/SweepstakeDetails.vue';
import ListPlayers from '../components/ListPlayers.vue';

export default {
	data(){
		return {
			sweep: null,
			allExistingPlayers: []
      // playersList: []
		}
	},
	created(){
		// get the sweepstake object
		const id = this.$route.params.id
		fetch("http://localhost:3000/api/sweepstakes/" + id)
		.then(res => res.json())
		.then(res => {
			this.sweep = res;

			eventBus.$on('option-allocated', allocatedOption => this.makeOptionUnavailable(allocatedOption));
		})

		// get the list of all existing players, from this and other sweeps.
		// Used to pass to NewPlayerForm.vue. Can also be used to filter players for this sweep.
		fetch("http://localhost:3000/api/players/")
			.then(res => res.json())
			.then(res => this.allExistingPlayers = res)

	},
	components: {
		SweepstakeDetails,
		ListPlayers,
		NewPlayerForm
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
		showResult() {
			//return winners name and option
		}
	}
}
</script>

<style lang="css" scoped>
</style>
