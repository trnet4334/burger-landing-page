import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import './plugins/element.js'
// import ElementUI from 'element-ui'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faFacebook, faInstagram, faYelp, faGoogle } from '@fortawesome/free-brands-svg-icons'
import { faMapPin, faClock, faPhoneAlt, faComment, faDownload, faStar } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faFacebook, faInstagram, faYelp, faGoogle, faMapPin, faClock, faPhoneAlt, faComment, faDownload, faStar)
Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.config.productionTip = false
// Vue.use(ElementUI)

new Vue({
  render: h => h(App)
}).$mount('#app')
