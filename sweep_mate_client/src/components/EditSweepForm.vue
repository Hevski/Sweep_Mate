<template lang="html">
	<div id="sweep-edit-form">

		<p v-if="notification" class="notification">{{ notification }}</p>

		<form v-if="sweep" v-on:submit="saveChanges">
			<label for="title">Title:		</label>
			<input type="text" id="title" name="title" v-model="amendedSweep.title" required>

			<label for="picture">Picture URL:		</label>
			<input type="url" id="picture" name="picture" v-model="amendedSweep.picture" required>

			<img id="sweep-picture" :src="amendedSweep.picture" alt="sweep.title" v-if="sweep.picture"/>

			<label for="date">Cut-off Date:</label>
			<input type="date" id="date" name="date" v-model="amendedSweep.cutOffDate" required>

			<fieldset>
				<legend>Sweepstake Options (already allocated options cannot be edited):</legend>
				<option-list v-for="(option, index) in amendedSweep.options" :key="index" :option="option" :index="index"/>
			</fieldset>

			<label for="finalAnswer" :class="{disabled: !sweepstakeClosed}">Final Answer:</label>
			<input type="text" id="finalAnswer" name="finalAnswer" v-model="amendedSweep.finalAnswer" :disabled="!sweepstakeClosed">

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
	computed: {
		sweepstakeClosed() {
			const today = new Date();
			const cutOffDate = this.amendedSweep.cutOffDate ? new Date(this.amendedSweep.cutOffDate) : null ;

			//returns true if sweepstake cut off date is past
			return today >= cutOffDate;
		}
	},
	components: {
		OptionList
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
	input {
		padding: 5px;
		font-family: 'Avenir', Helvetica, Arial, sans-serif;
		font-size: 0.9em;
		margin-bottom: 20px;
	}
	button {
		max-width:170px;
		padding: 5px 10px;
		font-size: 0.9em;
		background-color: #fff;
		border-radius: 5px;
		box-shadow: 3px 3px 3px #ddd;
		transition: box-shadow 400ms ease;
		cursor: pointer;
	}
	button:hover{
		box-shadow: 0 0 0 #fff;
	}
	fieldset {
		display: flex;
		flex-direction: column;
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
