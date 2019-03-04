<template lang="html">
	<form v-if="sweep" v-on:submit="saveChanges">
		<label>Title:
			<input type="text" id="title" name="title" v-model="sweep.title" required>
		</label>

		<label>Picture URL:
			<input type="url" name="picture" v-model="sweep.picture" required>
		</label>

		<label>Cut-off Date:
			<input type="date" name="date" v-model="sweep.cutOffDate" required>
		</label>

		<label> Sweepstake Options (please list them all, separated by comma):
			<textarea name="options" rows="8" cols="80" v-model="sweepOptions" required></textarea>
		</label>

		<label>Final Answer:
			<input type="text" name="finalAnswer" v-model="sweep.finalAnswer">
		</label>

		<button type="submit" name="button">Save Changes</button>
	</form>
</template>

<script>
import { eventBus } from '../main.js';

export default {
	name: "edit-sweep-form",
	props: ['sweep'],
	computed: {
		sweepOptions: function(){
			return this.sweep.options.map( option => option.name).join(', ')
		}
	},
	methods: {
		saveChanges(){
			//first turn the comma separated string into objects
			const sweepOptions = this.generateOptionsObjects()
			this.amendedSweep.options = sweepOptions;

			const id = this.sweep._id

			// then save the changes into the db
			fetch("http://localhost:3000/api/sweepstakes/" + id, {
				method: 'put',
				body: JSON.stringify(this.amendedSweep),
				headers: { 'Content-Type': 'application/json'}
				}
			)
			.then(res => res.json())
			.then(res => eventBus.$emit('sweepstake-updated', res))
		},
		generateOptionsObjects(){
			//turn comma separated string into objects. See NewSweepFrom, could be passed over?
			const arrayOfOptions = this.amendedSweep.options.split(', ')
			return arrayOfOptions.map( option => {
				let newObj = {};
				newObj.name = option;
				newObj.allocated = false
				return newObj;
			} )
		}
	}
}
</script>

<style lang="css" scoped>
	form {
		display: flex;
		flex-direction: column;
		align-items: center;
		margin-top: 30px;
	}
	label {
		margin-bottom: 20px;
	}
	button {
		max-width:100px;
		padding: 5px 10px;
	}
</style>
