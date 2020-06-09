<template>
  <li
    class="list-item bg-accent clickable"
    @click="$router.push(`/${id}`)"
  >
    <h3 class="text-md text-center text-primary title">
      {{ title }}
    </h3>
    <p class="text-bold text-xs text-center">
      {{ getActors }}
    </p>
    <p class="ma-md description">
      {{ getDescription }}
    </p>
  </li>
</template>

<script>

export default {
  name: 'AticlesListItem',
  props: {
    id: String,
    title: String,
    actors: Array,
    description: String
  },
  computed: {
    getActors() {
      return [].concat(this.actors).sort().join(', ')
    },
    getDescription() {
      if (this.description.length < 150)
        return this.description
      return this.description.slice(0, 150) + '...'
    }
  }
}
</script>

<style lang="sass" scoped>
@import '@/assets/style/_variables.sass'

.list-item
  @media (max-width: $screen-sm)
    &:not(:last-child)
      border-bottom: 1px solid var(--uni-b)
  @media (min-width: $screen-sm)
    box-shadow: var(--hard-shadow)
    border-bottom: 0px
    max-width: 800px
    width: 100%
    border-radius: 15px
    &:not(:first-child)
      margin-top: $space-xl
  @media (min-width: $screen-lg)
    margin-top: $space-xl !important
    &:nth-child(even)
      margin-left: 100px
  @media (min-width: $screen-xl)
    margin-top: $space-xl !important
    flex-basis: 700px
    margin-left: 50px !important
    margin-right: 50px
</style>