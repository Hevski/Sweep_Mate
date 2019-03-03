<template lang="html">
  <div class="create-new">
      <button v-on:click="createNew" type="button" name="button">Create New</button>
  </div>
</template>

<script>
export default {
  methods: {
    createNew() {
      // this.$route.router.go('/admin/sweepstakes/new')
      //metho do redirect create new button to newSweepForm.vue
    }
  }
}
</script>

<style lang="css" scoped>
</style>
