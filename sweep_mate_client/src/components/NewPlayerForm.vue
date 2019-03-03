<template lang="html">
  <form v-on:submit="createPlayer">
		<label>Name:
			<input type="text" name="playerName" value="" v-model="newPlayer.name" required>
		</label>
		<label>Email:
			<input type="email" name="playerEmail" value="" v-model="newPlayer.email" required>
		</label>
		<button type="submit" name="button">PLAY</button>
    <div class="bowler-hat">
      <img src="../assets/bowler.jpg" alt="">
    </div>
  </form>
</template>

<script>
import { eventBus } from '../main.js';
export default {
	name: "new-player-form",
	props: ["sweep"],
	data(){
		return {
			newPlayer: {
				name: "",
				email: "",
				games: []
			}
		}
	},
  methods: {
		createPlayer(e){
			e.preventDefault();
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

  .bowler-hat {
    /* max-width: 10px; */
    /* max-height: 10px; */
  }
</style>
