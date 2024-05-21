<template>
    <div class="container text-start">
        <h1 class="text-primary fw-bold">Editar</h1>
        <div class="card">
            <div class="card-header fw-bold">
                Categoria
            </div>
            <div class="card-body">
                <form @submit.prevent="updateCategoria">
                    
                <div class="row mb-3">
                    <label for="id_categoria" class="form-label">id_categoria</label>
                    <div class="input-group">
                        <div class="input-group-text"><font-awesome-icon icon="tag" /></div>
                        <input type="text" class="form-control" id="id_categoria" placeholder="Codigo categoria" disabled
                          v-model='categoria.id_categoria'>
                    </div>
                </div>

                <div class="row mb-3">
                    <label for="nombre_categoria" class="form-label">nombre categoria</label>
                    <div class="input-group">
                        <div class="input-group-text"><font-awesome-icon icon="tag" /></div>
                        <input type="text" class="form-control" id="nombre_categoria" placeholder="nombre categoria"
                          v-model='categoria.nombre_categoria'>
                    </div>
                </div>

                <div class="row mb-3">
                    <label for="descripción" class="form-label">descripción</label>
                    <div class="input-group">
                        <div class="input-group-text"><font-awesome-icon icon="tag" /></div>
                        <input type="text" class="form-control" id="descripción" placeholder="descripción"
                          v-model='categoria.descripción'>
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
    name: 'EditarCategoria',
    data(){
        return{
            categoria:{
                id_categoria: 0,
                nombre_categoria: '',
                descripción: ''
            },
        }
    },
    methods: {
        cancelar(){
            this.$router.push({name: 'Categorias'})
        },

        async updateCategoria(){
            const res = await axios.put(`http://127.0.0.1:8000/api/categorias/${this.categoria.id_categoria}`, this.categoria)

            if(res.status == 200){
                this.$router.push({name: 'Categorias'})
                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: 'Categoria has been updated',
                    showConfirmButton: false,
                    timer: 2000
                })
            }
        }
    },

    mounted(){
        this.categoria.id_categoria = this.$route.params.id;
        axios.get(`http://127.0.0.1:8000/api/categorias/${this.categoria.id_categoria}`)
          .then(response => {
            this.categoria = response.data.categoria
          })
        }
}
</script>