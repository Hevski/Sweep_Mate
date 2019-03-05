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
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
}

/* div.polaroid {
  width: 250px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  text-align: center;
} */

div.container {
  padding: 10px;
}

button {
  box-shadow: 0 0 0;
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

@media (min-width:768px) {
  .sweep-summary {
    width: 46%;
    margin: 2%;
  }
}
</style>
