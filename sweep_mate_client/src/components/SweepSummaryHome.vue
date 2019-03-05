<template lang="html">
  <div class="sweep-summary" :style="style">
    <h3>{{sweep.title}}</h3>
    <router-link :to="{name: 'singleSweepstake', params: {id: this.sweep._id}}" tag="button" class="play-sweep">PLAY</router-link>
  </div>
</template>

<script>
// import SingleSweepstake from '../views/SingleSweepstake.vue';
export default {
  name: "SweepSummaryHome",
  props: ['sweep'],
  components: {
    // SingleSweepstake
  },
  methods: {
  },
  computed: {
    style () {
      return 'background-image: url(' + this.sweep.picture + ');'
    }
  }
}
</script>

<style lang="css" scoped>

.sweep-summary {
  display: flex;
  height: 200px;
  background-size: cover;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  margin-bottom: 20px;
}

button {
  max-width: 50px;
}

h3 {
  color: white;
  background-color: rgba(74,70,70,0.5);
  padding: 10px;
  border-radius: 10px;
}

.play-sweep {
  margin: 10px;
  font-size: 15px;
}
</style>
