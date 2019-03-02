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
			// allocate option randomly
			const allocatedOption = this.allocateOption();
			this.newPlayer.games.push({ game_id: this.sweep._id, allocatedOption: allocatedOption, won: false });

			//create new player
			fetch("http://localhost:3000/api/players/", {
				method: 'post',
				body: JSON.stringify(this.newPlayer),
				headers: { 'Content-Type': 'application/json'}
			})
				.then(res => res.json())
				.then(res => { this.makeOptionUnavailable(allocatedOption) })

		},
    allocateOption() {
			// find all available options
			const availableOptions = this.sweep.options.filter(option => option.allocated === false );

			// allocate one of the available options randomly
			const selectedIndex = Math.floor(Math.random() * Math.floor(availableOptions.length - 1));
			const allocatedOption = availableOptions[selectedIndex];

			return allocatedOption.name;
    },
		makeOptionUnavailable(optionName){

			const optionToRemove = this.sweep.options.find( option => option.name === optionName);
			optionToRemove.allocated = true

			//save changes to database
			fetch("http://localhost:3000/api/sweepstakes/" + this.sweep._id, {
				method: 'put',
				body: JSON.stringify(this.sweep),
				headers: { 'Content-Type': 'application/json'}
			})

		}
  }
}
</script>

<style lang="css" scoped>
</style>
