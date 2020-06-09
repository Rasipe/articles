<template>
  <div id="app">
    <a-header> Artigos </a-header>
    <router-view />
  </div>
</template>

<script>
import Header from '@/components/layout/Header.vue'

export default {
  name: 'App',
  components: {
    'a-header': Header
  }
}
</script>

<style lang="sass">
</style>
