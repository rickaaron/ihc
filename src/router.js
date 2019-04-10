import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Signin from './views/Signin.vue'
import Login from './views/Login.vue'

import Dashboard from './views/Dashboard.vue'

import Configuration from './views/Configuration.vue'

import Paciente from './views/Paciente.vue'
import AgregarPaciente from './views/Agregar_Paciente.vue'

import Cita from './views/Cita.vue'
import AgregarCita from './views/Agregar_Cita.vue'

import About from './views/About.vue'
import Contact from './views/Contact.vue'

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
      path: '/dashboard',
      name: 'Dashboard',
      component: Dashboard
    },
    {
      path: '/dashboard/:option',
      name: 'Dashboard/Option',
      component: Dashboard
    },
    {
      path: '/paciente/:id',
      name: 'Paciente',
      component: Paciente
    },
    {
      path: '/agregar-paciente',
      name: 'AgregarPaciente',
      component: AgregarPaciente
    },
    {
      path: '/cita/:id',
      name: 'Cita',
      component: Cita
    },
    {
      path: '/agregar-cita/:id',
      name: 'AgregarCita',
      component: AgregarCita
    },

    {
      path: '/about',
      name: 'about',
      component: About
    },
    {
      path: '/contact',
      name: 'contact',
      component: Contact
    },
    {
      path: '/configuracion',
      name: 'configuracion',
      component: Configuration
    },


  ]
})
