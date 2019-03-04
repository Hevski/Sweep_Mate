<template lang="html">
  <div class="admin-home">
    <section>
      <h1>Your Games</h1>
    </section>
    <section>
      <new-sweep-button></new-sweep-button>
    </section>
    <list-sweepstakes></list-sweepstakes>
    <!-- <game-analysis></game-analysis> -->
  </div>

</template>

<script>
import ListSweepstakes from '../components/ListSweepstakes'
import newSweepButton from '../components/NewSweepButton'
export default {
  components: {
    ListSweepstakes,
    newSweepButton
    // gameAnalysis
  }
}
</script>

<style lang="css" scoped>
</style>
