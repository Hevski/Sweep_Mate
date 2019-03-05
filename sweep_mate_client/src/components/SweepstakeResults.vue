<template lang="html">
  <div>
    <h2>Winner: {{ getWinner }}</h2>
    <h2>Result: {{ sweep.finalAnswer}}</h2>
  </div>
</template>

<script>
export default {
  props: ['sweep'],
	computed: {
		getWinner(){
			const winningOption = this.sweep.options.find(option => option.name === this.sweep.finalAnswer)
			return winningOption.allocatedTo
		}
	},

}
</script>

<style lang="css" scoped>
</style>
