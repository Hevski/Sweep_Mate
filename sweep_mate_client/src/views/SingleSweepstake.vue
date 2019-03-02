<template lang="html">

  <!-- <sweepstake-details/> -->
  <new-player-form :sweep="sweep">
  </new-player-form>
  <!-- <sweepstake-results v-else="generateResult"></sweepstake-results> -->

</template>

<script>
import NewPlayerForm from '../components/NewPlayerForm.vue'
export default {
  // mounted() {
  //   // fetch("http://localhost:3000/api/sweepstakes/" + $route.params.id)
  // },
	data(){
		return {
			sweep: ''
		}
	},
	mounted(){
		const id = this.$route.params.id
		fetch("http://localhost:3000/api/sweepstakes/" + id)
			.then(res => res.json())
			.then(res => this.sweep = res)
	},
	components: {
		NewPlayerForm
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
