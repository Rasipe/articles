<template>
  <label
    class="input-component row hard-shadow"
    :class="focus? 'is-focus': ''"
  >
    {{ label }}
    <input
      class="input"
      :type="type"
      :value="value"
      @input="valueChange"
      @focus="focus = true"
      @blur="focus = false"
    >
    <div class="after"><slot /></div>
  </label>
</template>

<script>
export default {
  name: 'AInput',
  props: {
    type: String,
    value: [String, Number],
    label: String
  },
  data() {
    return {
      focus: false
    }
  },
  methods: {
    valueChange(e) {
      this.$emit('input', e.target.value)
    }
  }
}
</script>

<style lang="sass" scoped>
@import '@/assets/style/_variables.sass'

.input
  border: none
  background: none
  height: 100%
.after
  margin-right: 2px
  height: 100%
.input-component
  border: 1px solid var(--uni-b)
  border-radius: 5px
  background: white
  height: 35px
  display: grid
  grid-template-columns: auto fit-content(100%)
  grid-template-rows: auto
.is-focus
  border: 1px solid $primary-color
</style>