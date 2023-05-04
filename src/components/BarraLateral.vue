<template>
    <header>
        <h1>
            <img src="../assets/logo.png" alt="">
        </h1>
        <Button class="button" @click="alterarTema">
            <span class="icon">
                <i :class="iconBotao"></i>
            </span>
        </Button>
    </header>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    name: 'BarraLateral',
    emits: ['aoTemaAlterado'],
    data () {
        return {
            modoEscuroAtivo: false
        }
    },
    computed: {
        iconBotao () {
            if(this.modoEscuroAtivo) {
                return 'fa-regular fa-lightbulb'
            }
            return 'fa-solid fa-lightbulb'
        }
    },
    methods: {
        alterarTema () {
            this.modoEscuroAtivo = !this.modoEscuroAtivo
            this.$emit('aoTemaAlterado', this.modoEscuroAtivo)
        }
    }

})
</script>

<style scoped>
header {
    background: #0d3b66;
    width: 100%;
    height: 100vh;
    text-align: center;
}
@media only screen and (max-width: 768px) {
    header {
        padding: 2.5rem;
        height: auto;
    }
    
}
</style>
