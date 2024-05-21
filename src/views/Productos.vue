<template>
    <div class="container">
        <h1 class="text-start">Listado Productos
            <button @click="newProducto()"
                     class="btn btn-success mx-2">
                     <font-awesome-icon icon="plus"/>
            </button>
        </h1>
        <table class="table">
            <thead>
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">id_producto</th>
                    <th scope="col">nombre_producto</th>
                    <th scope="col">descripción</th>
                    <th scope="col">precio</th>
                    <th scope="col">stock</th>
                    <th scope="col">id_categoria</th>
                    <th scope="col">nombre_categoria</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(producto,index) in productos" :key="index">
                    <th scope="row">{{ index+1 }}</th>
                    <td>{{ producto.id_producto }}</td>
                    <td>{{ producto.nombre_producto }}</td>
                    <td>{{ producto.descripción }}</td>
                    <td>{{ producto.precio }}</td>
                    <td>{{ producto.stock }}</td>
                    <td>{{ producto.id_categoria }}</td>
                    <td>{{ producto.nombre_categoria }}</td>
                    <td>
                        <button @click="deleteProducto(producto.id_producto)"
                                class="btn btn-danger mx-2">
                                <font-awesome-icon icon="trash"/>
                        </button>
                        <button @click="editProducto(producto.id_producto)"
                                class="btn btn-warning mx-2">
                                <font-awesome-icon icon="pencil"/>
                        </button>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>
<script>
import axios from 'axios'
import Swal from 'sweetalert2'

export default {

    name: 'Producto',
    data(){
        return{
            productos:[]
        }
    },
    methods: {
        deleteProducto(codigo){
            Swal.fire({
                title: `Do you want to delete the producto with id ${codigo}?`,
                showCancelButton: true,
                confirmButtonText: 'Delete',
                }).then((result) => {
                /* Read more about isConfirmed, isDenied below */
                if (result.isConfirmed) {
                    axios.delete(`http://127.0.0.1:8000/api/productos/${codigo}`)
                    .then(response => {
                        if(response.data.success){
                            Swal.fire('Deleted!! ', '', 'success')
                            this.productos = response.data.productos
                        }
                    })
                }
              })
            },
            editProducto(id){
                this.$router.push({name: 'EditarProducto', params: { id: `${id}` }})
            },
            newProducto(){
                this.$router.push({name: 'NewProducto'});
            }
        },
    mounted() { 
        axios
          .get('http://127.0.0.1:8000/api/productos')
          .then(response => (this.productos = response.data.productos))
    },
}
</script>