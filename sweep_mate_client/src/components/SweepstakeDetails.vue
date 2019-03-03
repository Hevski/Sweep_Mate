<template lang="html">
	<div id="sweep-details">
		<h1>{{ sweep.title }}</h1>
		<p>Available until: {{ cutOffDate }}</p>
		<img :src="sweep.picture" alt="sweep.title" />
	</div>
</template>

<script>
export default {
	name: "sweepstake-details",
	props: ['sweep'],
	computed: {
		cutOffDate: function(){
			const cutOffDate = new Date(this.sweep.cutOffDate)
			return cutOffDate.toLocaleDateString('en-GB', {
				weekday: 'long',
				year: 'numeric',
				month: 'long',
				day: 'numeric'
			});
		}
	}
}
</script>

<style lang="css" scoped>
</style>
