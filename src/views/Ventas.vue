<template>
    <div class="container">
        <h1 class="text-start">Listado ventas
            <button @click="newVenta()"
                     class="btn btn-success mx-2">
                     <font-awesome-icon icon="plus"/>
            </button>
        </h1>
        <table class="table">
            <thead>
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">id_venta</th>
                    <th scope="col">id_producto</th>
                    <th scope="col">nombre_producto</th>
                    <th scope="col">id_cliente</th>
                    <th scope="col">nombre_cliente</th>
                    <th scope="col">cantidad</th>
                    <th scope="col">fecha_venta</th>
                    <th scope="col">total</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(venta,index) in ventas" :key="index">
                    <th scope="row">{{ index+1 }}</th>
                    <td>{{ venta.id_venta }}</td>
                    <td>{{ venta.id_producto }}</td>
                    <td>{{ venta.nombre_producto }}</td>
                    <td>{{ venta.id_cliente }}</td>
                    <td>{{ venta.nombre_cliente }}</td>
                    <td>{{ venta.cantidad }}</td>
                    <td>{{ venta.fecha_venta }}</td>
                    <td>{{ venta.total }}</td>
                    <td>
                        <button @click="deleteVenta(venta.id_venta)"
                                class="btn btn-danger mx-2">
                                <font-awesome-icon icon="trash"/>
                        </button>
                        <button @click="editVenta(venta.id_venta)"
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

    name: 'Venta',
    data(){
        return{
            ventas:[]
        }
    },
    methods: {
        deleteVenta(codigo){
            Swal.fire({
                title: `Do you want to delete the producto with id ${codigo}?`,
                showCancelButton: true,
                confirmButtonText: 'Delete',
                }).then((result) => {
                /* Read more about isConfirmed, isDenied below */
                if (result.isConfirmed) {
                    axios.delete(`http://127.0.0.1:8000/api/ventas/${codigo}`)
                    .then(response => {
                        if(response.data.success){
                            Swal.fire('Deleted!! ', '', 'success')
                            this.ventas = response.data.ventas
                        }
                    })
                }
              })
            },
            editVenta(id){
                this.$router.push({name: 'EditarVenta', params: { id: `${id}` }})
            },
            newVenta(){
                this.$router.push({name: 'NewVenta'});
            }
        },
    mounted() { 
        axios
          .get('http://127.0.0.1:8000/api/ventas')
          .then(response => (this.ventas = response.data.ventas))
    },
}
</script>