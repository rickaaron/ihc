import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Signin from './views/Signin.vue'
import Login from './views/Login.vue'
import Logout from './views/Logout.vue'
import Terminos from './views/Terminos.vue'

import Dashboard from './views/Dashboard.vue'



import Paciente from './views/Paciente.vue'
import AgregarPaciente from './views/Agregar_Paciente.vue'

import Cita from './views/Cita.vue'
import AgregarCita from './views/Agregar_Cita.vue'

import Tratamiento from './views/Tratamiento.vue'
import AgregarReceta from './views/Agregar_Receta.vue'

import Expediente from './views/Expediente.vue'

import BuscarFolio from './views/Buscar_Folio.vue'

import VerCitas from './views/Ver_Citas.vue'
import VerExpediente from './views/Ver_Expediente.vue'


import About from './views/About.vue'
import Contact from './views/Contact.vue'

import Modals from './views/Modals.vue'

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
      path: '/logout',
      name: 'logout',
      component: Logout
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
      path: '/tratamiento/:id',
      name: 'tratamiento',
      component: Tratamiento
    },
    {
      path: '/agregar-receta/:id',
      name: 'AgregarReceta',
      component: AgregarReceta
    },
    {
      path: '/expediente/:id',
      name: 'expediente',
      component: Expediente
    }, 

    {
      path: '/buscar-folio/:id',
      name: 'buscar-folio',
      component: BuscarFolio
    },
    {
      path: '/ver-citas/:id',
      name: 'ver-citas',
      component: VerCitas
    },

    {
      path: '/ver-expediente/:id',
      name: 'ver-expediente',
      component: VerExpediente
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
      path: '/Modals',
      name: 'Modals',
      component: Modals
    },
    {
      path: '/terminos-y-condiciones',
      name: 'terminos',
      component: Terminos
    },
     
  ]
})
