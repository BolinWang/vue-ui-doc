import Vue from 'vue'
import App from './App'
import router from './router'
import demoBlock from './components/demo-block.vue'
import elementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

Vue.use(elementUI)

const Demos = []

function importDemos (r) {
  r.keys().forEach(key => {
    Demos.push(r(key).default)
  })
}

importDemos(require.context('@/demos', true, /\.vue$/))

Demos.map(component => Vue.component(component.name, component))

Vue.component('demo-block', demoBlock)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
