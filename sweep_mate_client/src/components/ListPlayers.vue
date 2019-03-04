<template lang="html">
    <single-player :playersList="playersList" :sweepsPlayers="sweepsPlayers"></single-player>
</template>

<script>
import SinglePlayer from './SinglePlayer.vue'
export default {
  props: ['playersList', 'sweepsPlayers'],
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
