<template lang="html">
  <div class="">
    <!-- <list-sweepstakes :name="ListSweepstakes"></list-sweepstakes> -->
    <new-sweep-form :name="newSweepForm"></new-sweep-form>
  </div>
</template>

<script>
import ListSweepstakes from '../components/ListSweepstakes'
import newSweepForm from '../components/NewSweepForm'
export default {
  components: {
    // ListSweepstakes,
    newSweepForm
 }
}
</script>

<style lang="css" scoped>
</style>
