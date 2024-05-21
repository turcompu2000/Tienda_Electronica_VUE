import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

import EditarProducto from '../components/productos/EditarProducto.vue';
import NewProducto from '../components/productos/NewProducto.vue';
import Productos from '../views/Productos';

import EditarVenta from '../components/ventas/EditarVenta.vue';
import NewVenta from '../components/ventas/NewVenta.vue';
import Ventas from '../views/Ventas';

import Clientes from '../views/Clientes';

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/productos',
    name: 'Productos',
    component: Productos
  },
  {
    path: '/add-producto/',
    name: 'NewProducto',
    component: NewProducto
  },
  {
    path: '/editar-producto/:id',
    name: 'EditarProducto',
    component: EditarProducto
  },
  {
    path: '/ventas',
    name: 'Ventas',
    component: Ventas
  },
  {
    path: '/add-venta/',
    name: 'NewVenta',
    component: NewVenta
  },
  {
    path: '/editar-venta/:id',
    name: 'EditarVenta',
    component: EditarVenta
  },
  {
    path: '/clientes',
    name: 'Clientes',
    component: Clientes
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
