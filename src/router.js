import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Signin from './views/Signin.vue'
import Login from './views/Login.vue'
import Logout from './views/Logout.vue'
import Terminos from './views/Terminos.vue'

import Dashboard from './views/Dashboard.vue'



import Paciente from './views/Ver_Paciente.vue'
import AgregarPaciente from './views/Agregar_Paciente.vue'

import Ver_Cita from './views/Ver_Cita.vue'
import AgregarCita from './views/Agregar_Cita.vue'

import Tratamiento from './views/Ver_Tratamiento.vue'
import AgregarReceta from './views/Agregar_Receta.vue'
import VerExpediente from './views/Ver_Paciente_Expediente.vue'
import About from './views/About.vue'
import Contact from './views/Contact.vue'

// Paciente
import BuscarFolio from './views/paciente/Folio.vue'
import Expediente from './views/paciente/Expediente.vue'
import VerCitas from './views/paciente/Citas.vue'

// Buscar pacietne

import BuscarPaciente from './views/paciente/BuscarPaciente.vue'


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
      name: 'signin',
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
      name: 'paciente',
      component: Paciente
    },
    {
      path: '/agregar-paciente',
      name: 'agregar-paciente',
      component: AgregarPaciente
    },
    {
      path: '/cita/:id',
      name: 'ver_cita',
      component: Ver_Cita
    },
    {
      path: '/agregar-cita/:id_patient',
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
      name: 'agregar-receta',
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
      path: '/citas/:id',
      name: 'citas',
      component: VerCitas
    },
    {
      path: '/buscar-paciente',
      name: 'buscar-paciente',
      component: BuscarPaciente
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
      path: '/contacto',
      name: 'contacto',
      component: Contact
    },
    {
      path: '/Modals',
      name: 'Modals',
      component: Modals
    },
    {
      path: '/terminos-y-condiciones',
      name: 'terminos-y-condiciones',
      component: Terminos
    },
     
  ]
})
