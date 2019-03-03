<template lang="html">
	<form>
		<label>Title:
			<input type="text" id="title" name="title" v-model="sweep.title">
		</label>

		<label>Picture URL:
			<input type="url" name="picture" v-model="sweep.picture">
		</label>

		<label>Cut-off Date:
			<input type="date" name="date" v-model="sweep.cutOffDate">
		</label>

		<label>
			<textarea name="options" rows="8" cols="80">{{ sweepOptions }}</textarea>
		</label>

		<label>
			<input type="text" name="finalAnswer" v-model="sweep.finalAnswer">
		</label>
	</form>
</template>

<script>
export default {
	name: "edit-sweep-form",
	props: ['sweep'],
	computed: {
		sweepOptions: function(){
			return this.sweep.options.map( option => option.name).join(', ')
		}
	}
}
</script>

<style lang="css" scoped>
</style>
