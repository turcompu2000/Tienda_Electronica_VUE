<template>
    <div class="container text-start">
        <h1 class="text-primary fw-bold">New</h1>
        <div class="card">
            <div class="card-header fw-bold">
                Producto
            </div>
            <div class="card-body">
                <form @submit.prevent="saveProducto">
                    
                <div class="row mb-3">
                    <label for="id_producto" class="form-label">Codigo</label>
                    <div class="input-group">
                        <div class="input-group-text"><font-awesome-icon icon="tag" /></div>
                        <input type="text" class="form-control" id="id_producto" placeholder="Codigo Producto" disabled
                          v-model='producto.id_producto'>
                    </div>
                </div>

                <div class="row mb-3">
                    <label for="nombre_producto" class="form-label">Nombre producto:</label>
                    <div class="input-group">
                        <div class="input-group-text"><font-awesome-icon icon="tag" /></div>
                        <input type="text" class="form-control" id="nombre_producto" placeholder="Nombre Producto"
                          v-model='producto.nombre_producto'>
                    </div>
                </div>

                <div class="row mb-3">
                    <label for="descripción" class="form-label">Descripción</label>
                    <div class="input-group">
                        <div class="input-group-text"><font-awesome-icon icon="tag" /></div>
                        <input type="text" class="form-control" id="descripción" placeholder="Producto descripción"
                          v-model='producto.descripción'>
                    </div>
                </div>

                <div class="row mb-3">
                    <label for="precio" class="form-label">Precio</label>
                    <div class="input-group">
                        <div class="input-group-text"><font-awesome-icon icon="tag" /></div>
                        <input type="text" class="form-control" id="precio" placeholder="Precio Producto"
                          v-model='producto.precio'>
                    </div>
                </div>

                <div class="row mb-3">
                    <label for="stock" class="form-label">Stock</label>
                    <div class="input-group">
                        <div class="input-group-text"><font-awesome-icon icon="tag" /></div>
                        <input type="text" class="form-control" id="stock" placeholder="Stock Producto"
                          v-model='producto.stock'>
                    </div>
                </div>

                <div class="row mb-3">
                    <label for="id_categoria" class="form-label">id_categoria</label>
                    <div class="input-group">
                        <div class="input-group-text"><font-awesome-icon icon="tag" /></div>
                        <select class="form-select" v-model="id_categoria">
                          <option selected value="0">Seleccione una categoria</option>
                          <option v-for="categoria in categorias" v-bind:value="categoria.id_categoria">{{ categoria.nombre_categoria }}</option>
                        </select>
                    </div>
                </div>
                <button class="btn btn-primary" type="submit">Save</button>
                <button class="btn btn-secondary mx-2" @click="cancelar">Cancelar</button>
                </form>
            </div>
        </div>
    </div>
</template>
<script>
import axios from 'axios'
import Swal from 'sweetalert2'

export default {
    name: 'EditarProducto',
    data(){
        return{
            producto:{
                id_producto: 0,
                nombre_producto: '',
                descripción: '',
                precio: 0,
                stock: 0,
                id_categoria: 0,
                nombre_categoria: ''
            },
            categorias: [],
            id_categoria: "0"
        }
    },
    methods: {
        cancelar(){
            this.$router.push({name: 'Productos'})
        },

    async saveProducto(){
        this.producto.id_categoria = this.id_categoria
        const res = await axios.post(`http://127.0.0.1:8000/api/productos/`, this.producto)
        console.log(res);
        if(res.status == 200){
            this.$router.push({name: 'Productos'})
            Swal.fire({
                position: 'top-end',
                icon: 'success',
                title: 'Producto has been saved',
                showConfirmButton: false,
                timer: 2000
            })
          }
      }
   },

   mounted(){
    axios.get(`http://127.0.0.1:8000/api/categorias/`)
         .then(response => {
            this.categorias = response.data.categorias
         })
   },
}
</script>