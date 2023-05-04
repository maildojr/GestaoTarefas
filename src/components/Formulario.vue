<template>
    <div class="box formulario">
        <div class="columns">
            <div class="column is-8" role="form" aria-label="Formulário Para criação de uma nova tarefa">
                <input 
                    type="text" 
                    class="input" 
                    name="" id="" 
                    placeholder="Nome da Tarefa"
                    v-model="descricaoTarefa"
                />
            </div>
            <div class="column">
                
                <TemporizadorTarefa @aoTemporizadorFinalizado="finalizarTarefa"/>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import TemporizadorTarefa from './Temporizador.vue';

export default defineComponent({
    name: 'FormularioTarefa',
    emits: ['aoSalvarTarefa'],
    components: {
        TemporizadorTarefa
    },
    data () {
        return {
            descricaoTarefa: ''
        }
    },
    methods: {
        finalizarTarefa (tempoDecorrido: number) : void {
            //console.log('Tempo Decorrido: ',tempoDecorrido)
            //console.log('Tarefa: ',this.descricaoTarefa)
            this.$emit('aoSalvarTarefa', {
                duracaoEmSegundos: tempoDecorrido,
                descricao: this.descricaoTarefa
            })
            this.descricaoTarefa = ''
        }
    }
})
</script>

<style>
.formulario {
    color: var(--texto-primario);
    background-color: var(--bg-primario);
}
</style>