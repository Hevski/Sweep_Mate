<template lang="html">
  <div class="sweep-summary" :style="style">
    <h3>{{sweep.title}}</h3>
    <button v-on:click="goToSingleSweepPage" type="button" name="button">Play</button>
  </div>
</template>

<script>
export default {
  name: "SweepSummaryHome",
  props: ['sweep'],
  methods: {
    goToSingleSweepPage(){

    }
  },
  computed: {
    style () {
      return 'background-image: url(' + this.sweep.picture + ');'
        }
  }
}
</script>

<style lang="css" scoped>
.sweep-summary {

}
</style>
