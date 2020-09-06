<template>
<div>
  <h1 class="display-3 font-weight-light mb-4">Home</h1>
  </div>
</template>

<script>
export default {
  computed: {
    funds() { 
      return this.$store.getters.funds 
      }
  }
}
</script>

<style>

</style>