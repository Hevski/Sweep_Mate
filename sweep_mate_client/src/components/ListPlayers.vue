<template lang="html">
  <div class="">
    <single-player v-for="(player, index) in sweepsPlayers" :key="index" :player="player"></single-player>
  </div>
</template>

<script>
import SinglePlayer from './SinglePlayer.vue'
export default {
  props: ['sweepsPlayers'],
  data(){
    return {
    }
  },
  components: {
    SinglePlayer
  },
  mounted() {
  },
  methods: {
  }
}
</script>

<style lang="css" scoped>
</style>
