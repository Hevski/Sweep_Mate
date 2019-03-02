<template lang="html">
  <div class="sweep-list-item" :style="style">
    <h3>{{sweep.title}}</h3>
    <router-link :to="{name: 'admin-edit-sweepstake', params: {id: this.sweep._id}}" class="button">Edit</router-link>
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
