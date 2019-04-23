import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store/'
import ModalError from './plugins/modal_error.js'

import {
  library
} from '@fortawesome/fontawesome-svg-core'
import {
  fas
} from '@fortawesome/free-solid-svg-icons'
import {
  FontAwesomeIcon
} from '@fortawesome/vue-fontawesome'
import Resource from 'vue-resource';

library.add(fas)

Vue.use(Resource);
Vue.use(ModalError);
// Vue.http.options.credentials = false;
Vue.http.options.root = 'http://localhost:3000/api/';
Vue.http.headers.common['Authorization'] = 'Basic YXBpOnBhc3N3b3Jk';
Vue.component('fa-icon', FontAwesomeIcon)
Vue.config.productionTip = true;
window.validate = require("validate.js");
window.validate.async.options = {
  format: "flat",
  fullMessages: false
};
window.validate.extend(window.validate.validators.datetime, {
  parse: function (value, options) {
    return new Date(value).valueOf()
  },
  // Input is a unix timestamp
  format: function (value, options) {
    return new Date(value)
  }
})




new Vue({
  router,
  store,
  render: function (h) {
    return h(App)
  }
}).$mount('#app')
