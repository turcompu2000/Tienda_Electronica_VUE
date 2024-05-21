<template>
    <div class="container text-start">
        <h1 class="text-primary fw-bold">Editar</h1>
        <div class="card">
            <div class="card-header fw-bold">
                Producto
            </div>
            <div class="card-body">
                <form @submit.prevent="updateProveedor">
                    
                <div class="row mb-3">
                    <label for="id_proveedores" class="form-label">id_proveedores</label>
                    <div class="input-group">
                        <div class="input-group-text"><font-awesome-icon icon="tag" /></div>
                        <input type="text" class="form-control" id="id_proveedores" placeholder="Codigo proveedores" disabled
                          v-model='proveedor.id_proveedores'>
                    </div>
                </div>

                <div class="row mb-3">
                    <label for="nombre" class="form-label">nombre</label>
                    <div class="input-group">
                        <div class="input-group-text"><font-awesome-icon icon="tag" /></div>
                        <input type="text" class="form-control" id="nombre" placeholder="nombre proveedores"
                          v-model='proveedor.nombre'>
                    </div>
                </div>

                <div class="row mb-3">
                    <label for="contacto" class="form-label">contacto</label>
                    <div class="input-group">
                        <div class="input-group-text"><font-awesome-icon icon="tag" /></div>
                        <input type="text" class="form-control" id="contacto" placeholder="contacto proveedores"
                          v-model='proveedor.contacto'>
                    </div>
                </div>

                <div class="row mb-3">
                    <label for="telefono" class="form-label">telefono</label>
                    <div class="input-group">
                        <div class="input-group-text"><font-awesome-icon icon="tag" /></div>
                        <input type="text" class="form-control" id="telefono" placeholder="telefono proveedores"
                          v-model='proveedor.telefono'>
                    </div>
                </div>

                <div class="row mb-3">
                    <label for="direccion" class="form-label">direccion</label>
                    <div class="input-group">
                        <div class="input-group-text"><font-awesome-icon icon="tag" /></div>
                        <input type="text" class="form-control" id="direccion" placeholder="direccion proveedores"
                          v-model='proveedor.direccion'>
                    </div>
                </div>

                <button class="btn btn-primary" type="submit">Actualizar</button>
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
    name: 'EditarProveedor',
    data(){
        return{
            proveedor:{
                id_proveedores: 0,
                nombre: '',
                contacto: 0,
                telefono: 0,
                direccion: ''
            },
        }
    },
    methods: {
        cancelar(){
            this.$router.push({name: 'Proveedores'})
        },

        async updateProveedor(){
            const res = await axios.put(`http://127.0.0.1:8000/api/proveedores/${this.proveedor.id_proveedores}`, this.proveedor)

            if(res.status == 200){
                this.$router.push({name: 'Proveedores'})
                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: 'Proveedores has been updated',
                    showConfirmButton: false,
                    timer: 2000
                })
            }
        }
    },

    mounted(){
        this.proveedor.id_proveedores = this.$route.params.id;
        axios.get(`http://127.0.0.1:8000/api/proveedores/${this.proveedor.id_proveedores}`)
          .then(response => {
            this.proveedor = response.data.proveedor
          })
        }
}
</script>