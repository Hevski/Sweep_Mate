<template lang="html">
  <div class="sweep-list-item">
    <div v-for="(sweep, index) in sweepsList" :key="index">
      <h3>{{sweep.title}}</h3>
      <router-link :to="{name: 'admin-sweepstakes-edit', params: {id: sweep._id}}" class="button">Edit</router-link>
      <button type="button" name="delete-sweep" v-on:click="deleteSweep(sweep._id)">Delete</button>
      <button type="button" name="publish-sweep">Publish</button>
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
button {
padding: 15px 25px;
font-size: 24px;
text-align: center;
cursor: pointer;
outline: none;
color: #fff;
background-color: #0820d4;
border: none;
border-radius: 15px;
box-shadow: 0 9px #999;
margin-left: 10px;
}

button:hover {background-color: #ff0000;}

button:active {
background-color: #3e8e41;
box-shadow: 0 5px #666;
transform: translateY(4px);
}
</style>
