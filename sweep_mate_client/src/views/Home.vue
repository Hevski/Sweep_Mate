<template>
	<div class="home">
		<section class="logo">
			<h1>SweepMate</h1>
			<img src="../assets/penguin_logo.jpeg" alt="penguin_logo">
		</section>
		<section id="sweeps-container" v-if="sweeps">
			<h2>Current Games</h2>
			<sweep-summary-home v-for="(sweep, index) in sweeps" :key="index" :sweep="sweep"></sweep-summary-home>
		</section>
		<!-- <new-player-form></new-player-form> -->
	</div>
</template>

<script>
import SweepSummaryHome from '../components/SweepSummaryHome.vue';

// import NewPlayerForm from '../components/NewPlayerForm.vue';
export default {
  name: 'home',
  components: {
    SweepSummaryHome
		// NewPlayerForm
  },
  data() {
    return {
      sweeps: []
    }
  },
  mounted(){
    fetch("http://localhost:3000/api/sweepstakes/")
    .then(res => res.json())
    .then(data => this.sweeps = data)
  },
	methods: {
	}
}
</script>

<style lang="css" scoped>

  #sweeps-container {
    display: flex;
    flex-direction: column;
  }

	h1 {
		font-family: 'Righteous', cursive;
		font-size: 50px;
		margin-bottom: 2px
	}
</style>
