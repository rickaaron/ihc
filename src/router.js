import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Signin from './views/Signin.vue'
import Login from './views/Login.vue'

import Dashboard from './views/Dashboard.vue'

import Paciente from './views/Paciente.vue'
import Cita from './views/Cita.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [{
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/signin',
      name: 'Signin',
      component: Signin
    },
    {
      path: '/dashboard/:option',
      name: 'Dashboard',
      component: Dashboard
    },
    {
      path: '/paciente/:id',
      name: 'Paciente',
      component: Paciente
    },
    {
      path: '/cita/:id',
      name: 'Cita',
      component: Cita
    },


  ]
})
