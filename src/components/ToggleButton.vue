<template>
  <div class="toggle-button">
    <button
      v-for="option in formatedOptions"
      :key="option.key"
      :class="option.active? 'is-active': ''"
      class="option"
      :style="{width: optionWidth}"
      :aria-label="getAccessibilityValue(option)"
      @click="toggle(option)"
    >
      {{ option.value }}
      <img
        v-if="option.icon"
        :src="getImage(option.icon)"
        width="30px"
        alt=""
      >
    </button>
  </div>
</template>

<script>
export default {
  name: 'ToggleButton',
  props: {
    options: Array
  },
  computed: {
    formatedOptions() {
      let index = 0
      let formatedOptions = this.options.map(option => {
        index++
        return {
          key: option.key || index-1,
          value: !option.value && !option.icon? option: option.value,
          active: option.active,
          icon: option.active? option.iconActive || option.icon: option.icon
        }
      })
      const activeOption = formatedOptions.filter(option => option.active)
      if (!activeOption.length && formatedOptions.length) {
        formatedOptions[0].active = true
        formatedOptions[0].icon = this.options[0].iconActive
        return formatedOptions
      }
      if (activeOption.length > 1) {
        const defaultOption = activeOption[0]
        index = 0
        return formatedOptions.map(option => {
          let originalOption = this.options[index]
          index++
          return {
            key: option.key || index,
            value: option.value || option,
            active: option.key == defaultOption.key,
            icon: option.key == defaultOption.key? originalOption.iconActive: originalOption.icon
          }
        })
      }
      return formatedOptions
    },
    optionWidth() {
      return 100 / this.formatedOptions.length + '%'
    }
  },
  methods: {
    toggle(option) {
      this.$emit('toggle', option)
    },
    getAccessibilityValue(option) {
      return option.aria || option.value || option.icon
    }
    
  }
}
</script>

<style lang="sass" scoped>
@import '@/assets/style/_variables.sass'

$button-border-radius: 5px
.option
  background-color: $accent-color
  border: 0px
  height: 45px
.toggle-button > :first-child
  border-radius: $button-border-radius 0px 0px $button-border-radius
.toggle-button > :last-child
  border-radius: 0px $button-border-radius $button-border-radius 0px
.is-active
  background-color: $secondary-color
  color: $accent-color

</style>