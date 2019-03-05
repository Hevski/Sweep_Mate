<template lang="html">
  <div class="sweep-list">
    <div v-for="(sweep, index) in sweepsList" :key="index">
      <div class="item">
        <h3>{{sweep.title}}</h3>
        <router-link :to="{name: 'admin-sweepstakes-edit', params: {id: sweep._id}}" class="button">Edit</router-link>
        <button type="button" name="delete-sweep" v-on:click="deleteSweep(sweep._id)">Delete</button>
      </div>
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

/* .sweep-list-item {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-content: flex-start;
  flex-wrap: wrap;
}

.item {
  display: flex;
  border-style: solid;
  width: 100px;
  height: auto;
  align-items: flex-start;
  align-content:flex-start;
} */

</style>
