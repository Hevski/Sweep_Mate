<template lang="html">
  <form v-on:submit="createNonRandSweep">
    <label>Title of Sweep:
      <input type="text" name="sweepTitle" value="" v-model="newSweep.title" required>
    </label>
    <label>Picture:
      <input type="picture" name="sweepPicture" value="" v-model="newSweep.picture" required>
    </label>
    <label>Cut off Date:
      <input type="date" name="cutOffDate" value="" v-model="newSweep.cutOffDate" required>
    </label>
    <label>Options:
      <input type="text" name="options" value="" v-model="newSweep.options" required>
    </label>
    <button v-on:click="optionsArray" type="submit" name="button">CREATE</button>
  </form>
</template>

<script>
export default {
  data () {
    return {
      newSweep: {
        title: "",
        picture: "",
        cutOffDate: "",
        options: [],
        finalAnswer: ""
      }
    }
  },
  methods: {
    createNonRandSweep(e){
      e.preventDefault();
      fetch("http://localhost:3000/api/sweepstakes/", {
        method: 'post',
        body: JSON.stringify(this.newSweep),
        headers: { 'Content-Type': 'application/json'}
      })
    }
  }
}
</script>

<style lang="css" scoped>
</style>
