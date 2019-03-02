<template lang="html">
<<<<<<< HEAD
  <h1>Playing</h1>
  <sweepstake-details/>
  <new-player-form v-if="!sweepstakeClosed">
  </new-player-form>
  <sweepstake-results v-else-if="generateResult"></sweepstake-results>
=======

  <!-- <sweepstake-details/> -->
  <new-player-form v-if="!sweepstakeClosed" :sweep="sweep">
  </new-player-form>
  <!-- <sweepstake-results v-else="generateResult"></sweepstake-results> -->

>>>>>>> develop
</template>

<script>
import NewPlayerForm from '../components/NewPlayerForm.vue'
export default {
<<<<<<< HEAD
  mounted() {
    fetch("http://localhost:3000/api/sweepstakes/" + $route.params.id)
    .then(res => res.json)
  },
=======
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
>>>>>>> develop
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
