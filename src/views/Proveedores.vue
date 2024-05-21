<template>
    <div class="container">
        <h1 class="text-start">Listado Proveedores
            <button @click="newProveedor()"
                     class="btn btn-success mx-2">
                     <font-awesome-icon icon="plus"/>
            </button>
        </h1>
        <table class="table">
            <thead>
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">id_proveedores</th>
                    <th scope="col">nombre</th>
                    <th scope="col">contacto</th>
                    <th scope="col">telefono</th>
                    <th scope="col">direccion</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(proveedor,index) in proveedores" :key="index">
                    <th scope="row">{{ index+1 }}</th>
                    <td>{{ proveedor.id_proveedores }}</td>
                    <td>{{ proveedor.nombre }}</td>
                    <td>{{ proveedor.contacto }}</td>
                    <td>{{ proveedor.telefono }}</td>
                    <td>{{ proveedor.direccion }}</td>
                    <td>
                        <button @click="deleteProveedor(proveedor.id_proveedores)"
                                class="btn btn-danger mx-2">
                                <font-awesome-icon icon="trash"/>
                        </button>
                        <button @click="editProveedor(proveedor.id_proveedores)"
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

    name: 'Proveedor',
    data(){
        return{
            proveedores:[]
        }
    },
    methods: {
        deleteProveedor(codigo){
            Swal.fire({
                title: `Do you want to delete the producto with id ${codigo}?`,
                showCancelButton: true,
                confirmButtonText: 'Delete',
                }).then((result) => {
                /* Read more about isConfirmed, isDenied below */
                if (result.isConfirmed) {
                    axios.delete(`http://127.0.0.1:8000/api/proveedores/${codigo}`)
                    .then(response => {
                        if(response.data.success){
                            Swal.fire('Deleted!! ', '', 'success')
                            this.proveedores = response.data.proveedores
                        }
                    })
                }
              })
            },
            editProveedor(id){
                this.$router.push({name: 'EditarProveedor', params: { id: `${id}` }})
            },
            newProveedor(){
                this.$router.push({name: 'NewProveedor'});
            }
        },
    mounted() { 
        axios
          .get('http://127.0.0.1:8000/api/proveedores')
          .then(response => (this.proveedores = response.data.proveedores))
    },
}
</script>