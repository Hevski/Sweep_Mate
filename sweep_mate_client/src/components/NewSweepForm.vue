<template lang="html">
  <form v-on:submit="createSweep">
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
      <input type="textarea" name="options" value="" v-model="newSweep.options" required>
    </label>
    <label>Final Answer:
      <input type="text" name="finalAnswer" value="" v-model="newSweep.finalAnswer">
    </label>
		<button v-on:click="optionsArray" type="submit" name="button">CREATE</button>
  </form>
</template>

<script>
export default {
  name: 'new-sweep-form',
  props: [''],
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
    createSweep(e){
      e.preventDefault();
      fetch("http://localhost:3000/api/sweepstakes/", {
        method: 'post',
        body: JSON.stringify(this.newSweep),
        headers: { 'Content-Type': 'application/json'}
      })
    },

    optionsArray() {
      let optionsArray = this.newSweep.options.split(" ")
      this.newSweep.options = optionsArray.map(name => {
        let newObj = {}
        newObj['name'] = name;
        newObj['allocated'] = false;
        return newObj
      })
    }
  }
}
</script>

<style lang="css" scoped>
form {
  display: flex;
  flex-direction: column;
  align-items: center;
}
label {
  margin-bottom: 20px;
}
button {
  max-width:100px;
  padding: 5px 10px;
}
</style>
