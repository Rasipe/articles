import Vue from 'vue'
import App from './App.vue'
import router from './router'
import Router from 'vue-router'

import '@/assets/style/_style.scss'
import '@/assets/style/_colors.sass'
import '@/assets/style/_typography.sass'
import '@/assets/style/reset.scss'
import '@/assets/style/_shadow.sass'
import '@/assets/style/_flexbox.sass'
import '@/assets/style/_spacing.sass'
import '@/assets/style/_util.sass'
import store from './store'

Vue.config.productionTip = false
Vue.use(Router)

Vue.mixin({
  methods: {
    getImage(imageName) {
      const image = require.context('@/assets/', false, /\.svg$/)
      return image(`./${imageName}`)
    }
  }
})

new Vue({
  render: h => h(App),
  store,
  router
}).$mount('#app')
