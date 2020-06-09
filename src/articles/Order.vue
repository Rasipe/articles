<template>
  <div class="bg-primary order">
    <div
      class="title clickable text-sm row align-center justify-center"
      @click="active = !active"
    >
      <span>Ordenar</span>
    </div>
    <div
      class="options row"
      :style="'max-height: ' + optionsHeight"
    >
      <toggle-button
        class="order-fields mx-lg mb-lg col-6"
        :options="orderFields"
        @toggle="toggleFields"
      />
      <toggle-button
        class="order-directions mb-lg col-3"
        :options="orderDirections"
        @toggle="toggleDirection"
      />
    </div>
  </div>
</template>

<script>
import ToggleButton from '@/components/ToggleButton'

export default {
  name: 'Order',
  components: {
    ToggleButton
  },
  data() {
    return {
      active: false,
      orderFields: [
        {
          value: 'Titulo'
        },
        {
          value: 'Autor'
        }
      ],
      orderDirections: [
        {
          key: 'asc',
          icon: 'sort-asc.svg',
          iconActive: 'sort-asc-white.svg',
          alt: 'asc'
          
        },
        {
          key: 'desc',
          icon: 'sort-desc.svg',
          iconActive: 'sort-desc-white.svg',
          alt: 'desc'
        }
      ]
    }
  },
  computed: {
    optionsHeight() {
      return this.active? '1000px': '0px'
    }
  },
  methods: {
    toggleFields(option) {
      this.orderFields = this.orderFields.map(element => {
        return {
          ...element,
          active: false
        }
      })
      this.orderFields[option.key].active = true
      this.$emit('change-field', option.value)
    },
    toggleDirection(direction) {
      this.orderDirections = this.orderDirections.map(element => {
        return {
          ...element,
          active: false
        }
      })
      this.orderDirections.find(element => element.key == direction.key).active = true
      this.$emit('change-direction', direction.key)
    }
  }
}
</script>

<style lang="sass" scoped>
@import '@/assets/style/_variables.sass'

.order
  @media (max-width: $screen-md - 1)
    position: fixed
    bottom: 0
    width: 100%
    border-radius: 50px 50px 0 0
  @media (min-width: $screen-md)
    background-color: transparent
.title
  height: var(--button-size)
  text-align: center
  height: 45px
  @media (min-width: $screen-md)
    align-items: start
    justify-content: start
    height: auto
    margin-left: $space-md
    margin-bottom: $space-xs
    cursor: none
.options
  $transition: max-height 0.5s ease-in
  transition: $transition
  -moz-transition: $transition
  -webkit-transition: $transition
  -o-transition: $transition
  -ms-transition: $transition
  @media (min-width: $screen-md)
    max-height: 1000px !important
</style>