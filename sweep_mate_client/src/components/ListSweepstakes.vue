<template lang="html">
  <single-sweeps :sweepsList="sweepsList"></single-sweeps>
</template>

<script>
import SweepListItem from './SweepListItem.vue'
export default {
  // props: [''],
  data(){
    return {
      sweepsList: []
    }
  },
  components: {
    SweepListItem
  },
  mounted() {
    fetch("http://localhost:3000/api/sweepstakes/")
    .then(res => res.json())
    .then(data => this.sweepsList = data)
  },
  methods: {

  }
}
</script>

<style lang="css" scoped>
</style>
