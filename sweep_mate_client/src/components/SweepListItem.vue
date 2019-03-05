<template lang="html">
  <div class="sweep-list-item">
    <div v-for="(sweep, index) in sweepsList" :key="index">
      <h3>{{sweep.title}}</h3>
      <router-link :to="{name: 'admin-sweepstakes-edit', params: {id: sweep._id}}" class="button">Edit</router-link>
      <button type="button" name="delete-sweep" v-on:click="deleteSweep(sweep._id)">Delete</button>
    </div>

  </div>
</template>

<script>
import {eventBus} from '../main.js'
export default {
  name: "SweepsListItem",
  props: ['sweepsList'],
  methods:{
    deleteSweep: function(id){
      fetch("http://localhost:3000/api/sweepstakes/" + id, {
        method: "DELETE"
      })
      eventBus.$emit('sweep-deleted', id)
    }
  }
}




</script>

<style lang="css" scoped>

</style>
