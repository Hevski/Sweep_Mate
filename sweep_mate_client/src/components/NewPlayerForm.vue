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
		<div class="">
			<img src="../assets/bowler.jpg" class="bowler" alt="bowler-hat" width="500" height="333">
		</div>
	</div>
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
			},
			yourOption: ''
		}
	},
  methods: {
		createPlayer(e){
			e.preventDefault();

			// allocate option randomly
			const pickedOption = this.pickOption();
			this.newPlayer.games.push({ game_id: this.sweep._id, allocatedOption: pickedOption });

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
	input {
		padding: 5px;
		font-family: 'Avenir', Helvetica, Arial, sans-serif;
		font-size: 0.9em;
	}
	button {
		max-width:100px;
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

	button:hover {background-color: #ff0000;}

	button:active {
		background-color: #3e8e41;
		box-shadow: 0 5px #666;
		transform: translateY(4px);
	}

	.announcement {
		margin-top: 30px;
		padding: 30px;
		font-size: 1.2em;
		font-weight: bold;
		border: 3px dotted #999;
	}

	img:hover {
  animation: shake 0.5s;
  animation-iteration-count: infinite;
}

@keyframes shake {
0% { transform: translate(1px, 1px) rotate(0deg); }
10% { transform: translate(-1px, -2px) rotate(-1deg); }
20% { transform: translate(-3px, 0px) rotate(1deg); }
30% { transform: translate(3px, 2px) rotate(0deg); }
40% { transform: translate(1px, -1px) rotate(1deg); }
50% { transform: translate(-1px, 2px) rotate(-2deg); }
60% { transform: translate(-3px, 1px) rotate(0deg); }
70% { transform: translate(3px, 1px) rotate(-2deg); }
80% { transform: translate(-1px, -1px) rotate(2deg); }
90% { transform: translate(1px, 2px) rotate(0deg); }
100% { transform: translate(1px, -2px) rotate(-2deg); }
}
</style>
