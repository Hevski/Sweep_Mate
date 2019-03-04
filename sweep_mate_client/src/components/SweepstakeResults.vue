<template lang="html">
  <div class="">
    <h2>Winner: {{winner}}</h2>
    <h2>Result: {{ sweep.finalAnswer}}</h2>
  </div>
</template>

<script>
export default {
  props: ['sweep'],
  data(){
    return {
      winner: ""
    }
  },
	mounted(){
		if(this.sweep.finalAnswer !== ''){
			const winningOption = this.sweep.options.find(option => option.name === this.sweep.finalAnswer)
			this.winner = winningOption.allocatedTo
		}
	}
}
</script>

<style lang="css" scoped>
</style>
