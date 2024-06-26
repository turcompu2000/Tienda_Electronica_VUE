import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

import EditarProducto from '../components/productos/EditarProducto.vue';
import NewProducto from '../components/productos/NewProducto.vue';
import Productos from '../views/Productos';

import EditarVenta from '../components/ventas/EditarVenta.vue';
import NewVenta from '../components/ventas/NewVenta.vue';
import Ventas from '../views/Ventas';

import EditarCliente from '../components/clientes/EditarCliente.vue';
import NewCliente from '../components/clientes/NewCliente.vue';
import Clientes from '../views/Clientes';

import EditarCategoria from '../components/categorias/EditarCategoria.vue';
import NewCategoria from '../components/categorias/NewCategoria.vue';
import Categorias from '../views/Categorias';

import EditarProveedor from '../components/proveedores/EditarProveedor.vue';
import NewProveedor from '../components/proveedores/NewProveedor.vue';
import Proveedores from '../views/Proveedores';

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
    path: '/add-cliente/',
    name: 'NewCliente',
    component: NewCliente
  },
  {
    path: '/editar-cliente/:id',
    name: 'EditarCliente',
    component: EditarCliente
  },
  {
    path: '/categorias',
    name: 'Categorias',
    component: Categorias
  },
  {
    path: '/add-categoria/',
    name: 'NewCategoria',
    component: NewCategoria
  },
  {
    path: '/editar-categoria/:id',
    name: 'EditarCategoria',
    component: EditarCategoria
  },
  {
    path: '/proveedores',
    name: 'Proveedores',
    component: Proveedores
  },
  {
    path: '/add-proveedor/',
    name: 'NewProveedor',
    component: NewProveedor
  },
  {
    path: '/editar-proveedor/:id',
    name: 'EditarProveedor',
    component: EditarProveedor
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
