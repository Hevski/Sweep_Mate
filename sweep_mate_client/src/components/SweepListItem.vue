<template lang="html">
  <div class="sweep-list-item" :style="style">
    <h3>{{sweep.title}}</h3>
    <router-link :to="{name: 'admin-edit-sweepstake', params: {id: this.sweep._id}}" class="button">Edit</router-link>
    <button type="button" name="delete-sweep" v-on:click="">Delete</button>
  </div>
</template>

<script>
export default {
}


export default {

  },
  data() {

    }
  },
  mounted(){
    fetch("http://localhost:3000/api/sweepstakes/")
    .then(res => res.json())
    .then(data => this.sweeps = data)
  }
}



</script>

<style lang="css" scoped>
</style>









<template lang="html">
  <div class="">
    <div class="single-player" v-for="(player, index) in playersList" index="id">
      <p>Player Name: {{player.name}}</p>
      <div class="" v-for="game in player.games">
        <p>Allocated: {{game.allocatedOption}}</p>
      </div>
    </div>
  </div>

</template>

<script>
import ListPlayers from './ListPlayers.vue'
export default {
  name: "SinglePlayers",
  props: ['playersList']
}
</script>

<style lang="css" scoped>

.single-player {
  display: flex;
  border-style: solid;
  justify-content: center;
  margin-left: auto;
  margin-right: auto;
  justify-content: space-around;
  margin: 2px;
}
</style>
