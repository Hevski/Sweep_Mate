<template lang="html">

  <!-- <sweepstake-details/> -->
  <new-player-form v-if="!sweepstakeClosed">
  </new-player-form>
  <!-- <sweepstake-results v-else="generateResult"></sweepstake-results> -->

</template>

<script>
import NewPlayerForm from '../components/NewPlayerForm.vue'
export default {
  mounted() {
    // fetch("http://localhost:3000/api/sweepstakes/" + $route.params.id)
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
