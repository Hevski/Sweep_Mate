<template lang="html">
	<div class="single-sweep">
		<sweepstake-details :sweep="sweep" :sweepstakeClosed="sweepstakeClosed"/>
		<!-- <list-players :playersList="playersList" v-if="playersList">
		</list-players> -->
		<new-player-form v-if="!sweepstakeClosed()" :sweep="sweep">
		</new-player-form>
		<!-- <p class="notification" v-else>This sweepstake is no longer available.</p> -->
		<!-- <sweepstake-results v-else="showResult"></sweepstake-results> -->
	</div>
</template>

<script>
import { eventBus } from '../main.js';
import NewPlayerForm from '../components/NewPlayerForm.vue';
import SweepstakeDetails from '../components/SweepstakeDetails.vue';
// import ListPlayers from '../components/ListPlayers.vue';

export default {
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

			eventBus.$on('option-allocated', allocatedOption => this.makeOptionUnavailable(allocatedOption));
	},
	components: {
		SweepstakeDetails,
		// ListPlayers,
		NewPlayerForm
	},
	methods: {
		sweepstakeClosed() {
			const today = new Date();
			const cutOffDate = new Date(this.sweep.cutOffDate);
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
	.notification {
		color: #F00;
	}
</style>
