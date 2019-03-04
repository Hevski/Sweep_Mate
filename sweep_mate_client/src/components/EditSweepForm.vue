<template lang="html">
	<form v-if="sweep" v-on:submit="saveChanges">
		<label>Title:
			<input type="text" id="title" name="title" v-model="amendedSweep.title" required>
		</label>

		<label>Picture URL:
			<input type="url" name="picture" v-model="amendedSweep.picture" required>
		</label>

		<img id="sweep-picture" :src="amendedSweep.picture" alt="sweep.title" v-if="sweep.picture"/>

		<label>Cut-off Date:
			<input type="date" name="date" v-model="amendedSweep.cutOffDate" required>
		</label>

		<label> Sweepstake Options (not editable, sorry):
			<textarea name="options" rows="8" cols="80" v-model="sweepOptions" readonly></textarea>
		</label>

		<label :class="{disabled: !sweepstakeClosed()}">Final Answer:
			<input type="text" name="finalAnswer" v-model="amendedSweep.finalAnswer" :disabled="!sweepstakeClosed()">
		</label>

		<button type="submit" name="button">Save Changes</button>
	</form>
</template>

<script>
import { eventBus } from '../main.js';

export default {
	name: "edit-sweep-form",
	props: ['sweep'],
	data(){
		return {
			amendedSweep: {
				title: this.sweep.title,
				picture: this.sweep.picture,
				cutOffDate: this.sweep.cutOffDate,
				options: this.sweep.options,
				finalAnswer: this.sweep.finalAnswer
			}
		}
	},
	computed: {
		sweepOptions: function(){
			const optionsAsString = this.amendedSweep.options.map( option => option.name).join(', ')

			return optionsAsString
		}
	},
	methods: {
		saveChanges(e){
			e.preventDefault()

			const id = this.sweep._id

			// then save the changes into the db
			fetch("http://localhost:3000/api/sweepstakes/" + id, {
				method: 'put',
				body: JSON.stringify(this.amendedSweep),
				headers: { 'Content-Type': 'application/json'}
			}
		)
		.then( res => res.json())
		.then( updatedSweep => eventBus.$emit('sweepstake-updated', updatedSweep) )
	},
	sweepstakeClosed() {
		const today = new Date();
		const cutOffDate = this.sweep.cutOffDate ? new Date(this.sweep.cutOffDate) : null ;

		//returns true if sweepstake cut off date is past
		return today >= cutOffDate;
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
	.disabled {
		color: #848484;
	}
	#sweep-picture {
		height: 200px;
		margin-bottom: 20px;
	}
</style>
