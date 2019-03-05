<template lang="html">
	<div id="sweep-edit-form">

	<p v-if="notification" class="notification">{{ notification }}</p>

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

		<fieldset>
			<legend>Sweepstake Options (already allocated options cannot be edited):</legend>
			<!-- <textarea name="options" rows="8" cols="80" v-model="sweepOptions" readonly></textarea> -->
			<option-list v-for="(option, index) in amendedSweep.options" :key="index" :option="option" :index="index"/>
		</fieldset>

		<label :class="{disabled: !sweepstakeClosed()}">Final Answer:
			<input type="text" name="finalAnswer" v-model="amendedSweep.finalAnswer" :disabled="!sweepstakeClosed()">
		</label>

		<button type="submit" name="button">Save Changes</button>
	</form>
</div>
</template>

<script>
import { eventBus } from '../main.js';
import OptionList from './OptionList.vue'

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
			},
			notification: ''
		}
	},
	components: {
		OptionList
	},
	computed: {
		// sweepOptions: function(){
		// 	const optionsAsString = this.amendedSweep.options.map( option => option.name).join(', ')
		//
		// 	return optionsAsString
		// }
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
		.then( updatedSweep => {
			eventBus.$emit('sweepstake-updated', updatedSweep)
			this.notification = "Sweepstake updated"
		} )
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
	.notification {
		padding:10px;
		background-color: #C4F7DC;
		border: 1px solid #64D598;
		border-radius: 5px;
	}
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
	fieldset {
		display: flex;
		flex-direction:column;
		border: 0;
	}
	.disabled {
		color: #848484;
	}
	#sweep-picture {
		height: 200px;
		margin-bottom: 20px;
	}
</style>
