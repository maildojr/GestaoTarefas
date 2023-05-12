<template>
    <FormularioTarefa @aoSalvarTarefa="salvarTarefa" />
    <div class="lista">
        <BoxTarefa v-if="listaEstaVazia">
            Sem Tarefas criadas!
        </BoxTarefa>
        <TarefaLista v-for="(tarefa, index) in tarefas" :key="index" :tarefa="tarefa" />
    </div>
</template>
  
<script lang="ts">
import { defineComponent } from 'vue';
import FormularioTarefa from '../components/Formulario.vue';
import TarefaLista from '../components/Tarefa.vue';
import ITarefa from '../interfaces/ITarefa'
import BoxTarefa from '../components/BoxTarefa.vue';


export default defineComponent({
  name: "App",
  components: {
    FormularioTarefa,
    TarefaLista,
    BoxTarefa
  },
  data() {
    return {
      tarefas: [] as ITarefa[]
    }
  },
  computed: {
    listaEstaVazia(): boolean {
      return this.tarefas.length === 0
    }
  },
  methods: {
    salvarTarefa(tarefa: ITarefa) {
      this.tarefas.push(tarefa)
    }
  }
});
</script>
  