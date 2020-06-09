<template>
  <div class="bg-secondary text-accent badge"><slot/></div>
</template>

<script>
export default {
  name: 'Badge',
  props: {
    value: [String, Number]
  }
}
</script>

<style lang="sass" scoped>
@import '@/assets/style/_variables.sass'
.badge
  font-size: 15px
  padding: 8px
  border-radius: 5px
</style>