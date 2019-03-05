<template lang="html">
  <form v-on:submit="createSweep">
    <br>
    <br>
    <label>Title of Sweep:
			<input type="text" name="sweepTitle" value="" v-model="newSweep.title" required>
		</label>
		<label>Picture:
			<input type="picture" name="sweepPicture" value="" v-model="newSweep.picture" required>
		</label>
    <label>Cut off Date:
      <input type="date" name="cutOffDate" value="" v-model="newSweep.cutOffDate" required>
    </label>
    <label>Options: (seperate by commas)
      <!-- <input type="textarea" rows="4" cols="50" name="options" value="" v-model="newSweep.options" required> -->
      <textarea rows="8" cols="40" name="options" v-model="newSweep.options" require></textarea>
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
      let optionsArray = this.newSweep.options.split(", ")
      this.newSweep.options = optionsArray.map(name => {
        let newObj = {}
        newObj['name'] = name;
        newObj['allocatedTo'] = '';
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

label{
    display: inline-block;
    float: left;
    clear: left;
    width: 250px;
    text-align: left; /*Change to right here if you want it close to the inputs*/
}
input {
  display: inline-block;
  float: right;

}





</style>
