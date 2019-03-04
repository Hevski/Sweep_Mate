<template lang="html">
  <div class="">
      <sweep-list-item :sweepsList="sweepsList"></sweep-list-item>
  </div>
</template>

<script>
import SweepListItem from './SweepListItem.vue'
import {eventBus} from '../main.js'
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
    .then(data => {this.sweepsList = data
    eventBus.$on("sweep-deleted", (id) => {
      this.sweepsList = this.sweepsList.filter(sweep => sweep._id !== id)
    })
  })
  }
}
</script>

<style lang="css" scoped>
</style>
