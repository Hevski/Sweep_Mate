<template lang="html">
	<div>
  <form v-on:submit="createPlayer">
		<label>Name:
			<input type="text" name="playerName" value="" v-model="newPlayer.name" required>
		</label>
		<label>Email:
			<input type="email" name="playerEmail" value="" v-model="newPlayer.email" required>
		</label>

		<button type="submit" name="button">PLAY</button>
  </form>

	<modal name="email-exists">
		<p>This email already exists in the database.</p>
		<p>Do you want to add this sweep to the existing account?</p>
	</modal>

</div>
</template>

<script>
import { eventBus } from '../main.js';
// import VModal from 'vue-js-modal';

// Vue.use(VModal, {dialog: true});

export default {
	name: "new-player-form",
	props: ["sweep", "players"],
	data(){
		return {
			newPlayer: {
				name: "",
				email: "",
				games: []
			},
			createdPlayer: null
		}
	},
	mounted(){
		this.$modal.hide('email-exists');
	},
  methods: {
		createPlayer(e){
			e.preventDefault();
			if(this.alreadyExists(this.newPlayer.email)){
				this.$modal.show('email-exists');
			}

			// allocate option randomly
			const pickedOption = this.pickOption();
			this.newPlayer.games.push({ game_id: this.sweep._id, allocatedOption: pickedOption, won: false });

			//create new player
			fetch("http://localhost:3000/api/players/", {
				method: 'post',
				body: JSON.stringify(this.newPlayer),
				headers: { 'Content-Type': 'application/json'}
			})
				.then(res => res.json())
				.then(player => {
					eventBus.$emit('option-allocated', player.games[player.games.length-1].allocatedOption)

					//form reset
					this.newPlayer.name = this.newPlayer.email = ""
				})
		},
    pickOption() {
			// find all available options
			const availableOptions = this.sweep.options.filter(option => option.allocated === false );

			// allocate one of the available options randomly
			const selectedIndex = Math.floor(Math.random() * Math.floor(availableOptions.length - 1));
			const allocatedOption = availableOptions[selectedIndex];

			return allocatedOption.name;
    },
		alreadyExists(emailAddress){
			const existingPlayer = this.players.find( player => player.email === emailAddress )
			return existingPlayer ? true : false
		}
  }
}
</script>

<style lang="css" scoped>
	form {
		display: flex;
		flex-direction: column;
		align-items: center;
	}
	label {
		margin-bottom: 20px;
	}
	button {
		max-width:100px;
		padding: 5px 10px;
	}
</style>
