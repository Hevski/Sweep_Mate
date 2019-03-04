<template lang="html">
	<div id="new-layer-forms">
		<form v-on:submit="createPlayer">
			<label>Name:
				<input type="text" name="playerName" value="" v-model="newPlayer.name" required>
			</label>
			<label>Email:
				<input type="email" name="playerEmail" value="" v-model="newPlayer.email" required>
			</label>
			<button type="submit" name="button">PLAY</button>
		</form>

		<div class="announcement" v-if="yourOption">
			Your sweep is {{ this.yourOption }}
		</div>
	</div>
</template>

<script>
import { eventBus } from '../main.js';
// import VModal from 'vue-js-modal';

// Vue.use(VModal, {dialog: true});

export default {
	name: "new-player-form",
	props: ["sweep"],
	data(){
		return {
			newPlayer: {
				name: "",
				email: "",
				games: []
			},
			yourOption: ''
			// createdPlayer: null
		}
	},
	mounted(){
		// this.$modal.hide('email-exists');
	},
  methods: {
		createPlayer(e){
			e.preventDefault();
			// if(this.alreadyExists(this.newPlayer.email)){
			// 	// this.$modal.show('email-exists');
			// }

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
					//announce choice
					this.yourOption = player.games[player.games.length-1].allocatedOption

					// pass it over to set the corresponding sweep's option as allocated
					eventBus.$emit('option-allocated', this.yourOption )

					//form reset
					this.newPlayer.name = this.newPlayer.email = ""
					this.newPlayer.games = []
				})
		},
    pickOption() {
			// find all available options
			const availableOptions = this.sweep.options.filter(option => option.allocated === false );

			// allocate one of the available options randomly
			const selectedIndex = Math.floor(Math.random() * Math.floor(availableOptions.length - 1));
			const allocatedOption = availableOptions[selectedIndex];

			return allocatedOption.name;
    }
		// alreadyExists(emailAddress){
		// 	const existingPlayer = this.players.find( player => player.email === emailAddress )
		// 	return existingPlayer ? true : false
		// }
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
	.announcement {
		margin-top: 30px;
		padding: 30px;
		font-size: 1.2em;
		font-weight: bold;
		border: 3px dotted #999;
	}

  .bowler-hat {
    /* max-width: 10px; */
    /* max-height: 10px; */
  }
</style>
