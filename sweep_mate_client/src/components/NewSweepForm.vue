<template lang="html">
  <form class="" action="index.html" method="post">
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
		<button type="submit" name="button">CREATE</button>
  </form>
</template>

<script>
export default {
  name: 'new-sweep-form'
  props: ['']
  data () {
    return {
      newSweep: {
        title: "",
        picture: "",
        cutOffDate: "",
        options: []
      }
    }
  }
}
</script>

<style lang="css" scoped>
</style>
