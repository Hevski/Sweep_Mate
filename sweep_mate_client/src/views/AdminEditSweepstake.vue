<template lang="html">
	<div v-if="sweep">
		<edit-sweep-form :sweep="sweep"></edit-sweep-form>
		<!-- <list-sweepstakes></list-sweepstakes> -->
		<!-- <list-players></list-players> -->
	</div>
</template>

<script>
// import SweepListItem from '../components/SweepListItem'
import {eventBus} from '../main.js'
import EditSweepForm from '../components/EditSweepForm.vue'
export default {
	name: "admin-edit-sweepstake",
	data(){
		return {
			sweep: ''
		}
	},
	components: {
		EditSweepForm
	},
	mounted(){
		const id = this.$route.params.id
		fetch("http://localhost:3000/api/sweepstakes/" + id)
		.then(res => res.json())
		.then(res => {
			this.sweep = res

			eventBus.$on('sweepstake-updated', updatedSweep => this.sweep = updatedSweep )
		})
	}
}
</script>

<style lang="css" scoped>
</style>
