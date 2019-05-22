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
// Vue.http.headers.common['Authorization'] = 'Basic YXBpOnBhc3N3b3Jk';

// Vue.http.interceptors.push(function(request, next) {
//   if (localStorage.getItem('token')) {
//       try {
//           request.headers.set("Accept", "application/json");
//           request.headers.set('Authorization', 'Bearer ' + localStorage.getItem('token'));
//       } catch (e) {}
//   }
//   return function(response) {
//       console.log('Mensjae desde interceptor', response.body);
//       if (response.status == 401) {
//           console.log('Sin autorizacion ', response.body);
//           router.push({
//               name: 'logout',
//               params: {
//                   message: 'Su sesion a expirado, inicie sesion nuevamente para continuar'
//               }
//           });
//       }
//       return response;
//   }; 
// });
Vue.http.interceptors.push(function (request) {
  console.log(request)
  return function (response) {
    console.log(response)
  };


});



Vue.component('fa-icon', FontAwesomeIcon)
Vue.config.productionTip = true;

window.validate = require("validate.js");


window.moment = require('moment');

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
