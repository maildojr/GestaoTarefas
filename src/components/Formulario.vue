<template>
    <div class="box formulario">
        <div class="columns">
            <div class="column is-5" role="form" aria-label="Formulário Para criação de uma nova tarefa">
                <input 
                    type="text" 
                    class="input" 
                    name="" id="" 
                    placeholder="Nome da Tarefa"
                    v-model="descricaoTarefa"
                />
            </div>
            <div class="column is-3">
                <div class="select">
                    <select v-model="idProjeto">
                        <option value="">Selecione o Projeto</option>
                        <option 
                            :value="projeto.id"
                            v-for="projeto in projetos"
                            :key="projeto.id"
                        >
                            {{ projeto.nome }}
                        </option>
                    </select>
                </div>
            </div>
            <div class="column">
                
                <TemporizadorTarefa @aoTemporizadorFinalizado="finalizarTarefa"/>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue';
import TemporizadorTarefa from './Temporizador.vue';
import { useStore } from 'vuex'
import { key } from '@/store';

export default defineComponent({
    name: 'FormularioTarefa',
    emits: ['aoSalvarTarefa'],
    components: {
        TemporizadorTarefa
    },
    data () {
        return {
            descricaoTarefa: '',
            idProjeto: ''
        }
    },
    methods: {
        finalizarTarefa (tempoDecorrido: number) : void {
            //console.log('Tempo Decorrido: ',tempoDecorrido)
            //console.log('Tarefa: ',this.descricaoTarefa)
            this.$emit('aoSalvarTarefa', {
                duracaoEmSegundos: tempoDecorrido,
                descricao: this.descricaoTarefa,
                projeto: this.projetos.find(proj => proj.id == this.idProjeto)
            })
            this.descricaoTarefa = ''
        }
    },
    setup () {
        const store = useStore(key)
        return {
            projetos: computed(() => store.state.projetos)
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