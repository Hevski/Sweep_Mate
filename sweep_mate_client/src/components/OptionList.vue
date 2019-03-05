<template lang="html">
	<label>
		<input type="input" :name="fieldName" v-model="option.name" :readonly="alreadyAllocated"/>
		<input type="hidden" v-model="option.allocated" />
		<span v-if="alreadyAllocated"> - allocated</span>
	</label>
</template>

<script>
export default {
	name: "option-checkbox",
	props: ['option', 'index'],
	computed: {
		alreadyAllocated(){
			return this.option.allocated !== false
		},
		fieldName(){
			return 'option-' + this.index
		}
	}
}
</script>

<style lang="css" scoped>
</style>
