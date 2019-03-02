<template>
  <div class="home">
    <section class="logo">
      <h1>SweepMate</h1>
      <img src="../assets/penguin_logo.jpeg" alt="penguin_logo">
    </section>
    <section v-if="sweeps">
      <h2>Current Games</h2>
      <sweep-summary-home v-for="(sweep, index) in sweeps" :key="index" :sweep="sweep"></sweep-summary-home>
    </section>
  </div>
</template>

<script>
import SweepSummaryHome from '../components/SweepSummaryHome.vue';
export default {
  name: 'home',
  components: {
    SweepSummaryHome
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
  }
}
</script>
