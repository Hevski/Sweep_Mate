<template lang="html">
	<div id="sweep-details">
		<h1>{{ sweep.title }}</h1>
		<p>{{ sweep.cutOffDate }}</p>
	</div>
</template>

<script>
export default {
	name: "sweepstake-details",
	props: ['sweep']
}
</script>

<style lang="css" scoped>
</style>
