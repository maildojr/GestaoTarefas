<template>
    <section class="is-flex is-align-items-center is-justify-content-space-between">
        <CronometroTarefa 
            :tempoEmSegundos="tempoEmSegundos" 
        />
        <BotoesCronometro
            @clicado="iniciar"
            icone="fas fa-play"
            texto="play"
            :desabilitado="cronometroRodando"
        />
        <BotoesCronometro
            @clicado="finalizar"
            icone="fas fa-stop"
            texto="stop"
            :desabilitado="!cronometroRodando"
        />
        
    </section>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import CronometroTarefa from './Cronometro.vue';
import BotoesCronometro from './BotoesCronometro.vue';

export default defineComponent({
    name: 'TemporizadorTarefa',
    emits: ['aoTemporizadorFinalizado'],
    components: {
    CronometroTarefa,
    BotoesCronometro
},
    data () {
        return {
            tempoEmSegundos: 0,
            cronometro: 0,
            cronometroRodando: false
        }
    },
    
    methods: {
        iniciar (event: MouseEvent) {
            // contar o tempo
            // 1 seg = 1000 ms
            this.cronometroRodando = true
            this.cronometro = setInterval(() => {
                this.tempoEmSegundos += 1
            }, 1000)
        },
        finalizar (event: MouseEvent){
            this.cronometroRodando = false
            clearInterval(this.cronometro)
            this.$emit('aoTemporizadorFinalizado', this.tempoEmSegundos)
            this.tempoEmSegundos = 0
        }
    }
})
</script>