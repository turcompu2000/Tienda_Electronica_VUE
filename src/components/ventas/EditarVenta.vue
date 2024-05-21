<template>
    <div class="container text-start">
        <h1 class="text-primary fw-bold">Editar</h1>
        <div class="card">
            <div class="card-header fw-bold">
                Ventas
            </div>
            <div class="card-body">
                <form @submit.prevent="updateVenta">
                    
                <div class="row mb-3">
                    <label for="id_venta" class="form-label">id_venta</label>
                    <div class="input-group">
                        <div class="input-group-text"><font-awesome-icon icon="tag" /></div>
                        <input type="text" class="form-control" id="id_venta" placeholder="Codigo Venta" disabled
                          v-model='venta.id_venta'>
                    </div>
                </div>

                <div class="row mb-3">
                    <label for="id_producto" class="form-label">id_producto</label>
                    <div class="input-group">
                        <div class="input-group-text"><font-awesome-icon icon="tag" /></div>
                        <select class="form-select" v-model="venta.id_producto">
                            <option selected value="0">Seleccione una categoria</option>
                          <option v-for="producto in productos" v-bind:value="producto.id_producto">{{ producto.nombre_producto }}</option>
                        </select>
                    </div>
                </div>

                <div class="row mb-3">
                    <label for="id_cliente" class="form-label">id_cliente</label>
                    <div class="input-group">
                        <div class="input-group-text"><font-awesome-icon icon="tag" /></div>
                        <select class="form-select" v-model="venta.id_cliente">
                          <option selected value="0">Seleccione una categoria</option>
                          <option v-for="cliente in clientes" v-bind:value="cliente.id_cliente">{{ cliente.nombre_cliente }}</option>
                        </select>
                    </div>
                </div>

                <div class="row mb-3">
                    <label for="cantidad" class="form-label">cantidad</label>
                    <div class="input-group">
                        <div class="input-group-text"><font-awesome-icon icon="tag" /></div>
                        <input type="text" class="form-control" id="cantidad" placeholder="cantidad"
                          v-model='venta.cantidad'>
                    </div>
                </div>

                <div class="row mb-3">
                    <label for="fecha_venta" class="form-label">fecha_venta</label>
                    <div class="input-group">
                        <div class="input-group-text"><font-awesome-icon icon="tag" /></div>
                        <input type="date" class="form-control" id="fecha_venta" placeholder="fecha_venta"
                        v-model="venta.fecha_venta">
                    </div>
                </div>

                <div class="row mb-3">
                    <label for="total" class="form-label">total</label>
                    <div class="input-group">
                        <div class="input-group-text"><font-awesome-icon icon="tag" /></div>
                        <input type="text" class="form-control" id="total" placeholder="total"
                          v-model='venta.total'>
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
    name: 'EditarVenta',
    data(){
        return{
            venta:{
                id_venta: 0,
                id_producto: 0,
                nombre_producto: '',
                id_cliente: 0,
                nombre_cliente: '',  
                cantidad: 0,
                fecha_venta: "0000-00-00",
                total: 0
            },
            productos: [],
            id_producto: "0",
            clientes: [],
            id_cliente: "0"
        }
    },
    methods: {
        cancelar(){
            this.$router.push({name: 'Ventas'})
        },

        async updateVenta(){
            const res = await axios.put(`http://127.0.0.1:8000/api/ventas/${this.venta.id_venta}`, this.venta)

            if(res.status == 200){
                this.$router.push({name: 'Ventas'})
                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: 'Ventas has been updated',
                    showConfirmButton: false,
                    timer: 2000
                })
            }
        }
    },

    mounted(){
        this.venta.id_venta = this.$route.params.id;
        axios.get(`http://127.0.0.1:8000/api/ventas/${this.venta.id_venta}`)
          .then(response => {
            this.ventas = response.data.ventas
            this.productos = response.data.productos
            this.clientes = response.data.clientes
          })
        }
}
</script>