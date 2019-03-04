<template lang="html">
  <div class="sweep-list-item" :style="style">
    <h3>{{sweep.title}}</h3>
    <router-link :to="{name: 'admin-edit-sweepstake', params: {id: this.sweep._id}}" class="button">Edit</router-link>
    <button type="button" name="delete-sweep" v-on:click="">Delete</button>
    <button type="button" name="publish-sweep" v-on:click="">Publish</button>
  </div>
</template>

<script>
import ListSweepstakes from './ListSweepstakes.vue'
export default {
  name: "SweepsListItem",
  props: ['']
}




</script>

<style lang="css" scoped>
</style>
