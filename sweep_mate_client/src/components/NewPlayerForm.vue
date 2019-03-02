<template lang="html">
  <form v-on:submit="createPlayer">
		<label>Name:
			<input type="text" name="playerName" value="" v-model="newPlayer.name" required>
		</label>
		<label>Email:
			<input type="email" name="playerEmail" value="" v-model="newPlayer.email" required>
		</label>

		<button type="submit" name="button">PLAY</button>
  </form>
</template>

<script>
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
			//generate choice
			// const selectedChoice = this.generateChoice();

			//create new player
			fetch("http://localhost:3000/api/players/", {
				method: 'post',
				body: JSON.stringify(this.newPlayer),
				headers: { 'Content-Type': 'application/json'}
			})
			.then(res => res.json())
			.then(res => {
				// this.newPlayer.games.push(selectedChoice)
			})

		},
    generateChoice() {

    }
  }
}
</script>

<style lang="css" scoped>
</style>
