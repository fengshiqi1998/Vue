<template>
  <div>
    <Navigator></Navigator>
    <div class="container">
      <router-view />
    </div>
  </div>
</template>

<script>
import Navigator from '@/components/Navigator'
export default {
  name: 'App',
  components: {
    Navigator
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
