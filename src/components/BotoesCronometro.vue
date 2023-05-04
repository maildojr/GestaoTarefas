<template>
    <button class="button" @click="clicado" :disabled="desabilitado">
        <span class="icon">
            <i :class="icone"></i>
        </span>
        <span>{{texto}}</span>
    </button>
</template>

<script lang="ts">
import { DefineComponent, defineComponent } from 'vue';

export default defineComponent ({
    name: 'BotoesCronometro',
    emits: ['clicado'],
    props: {
        desabilitado: {
            type: Boolean,
        },
        icone: {
            type: String,
            required: true,
        },
        texto: {
            type: String,
            required: true,
        }
    },
    methods: {
        clicado () : void {
            this.$emit('clicado')
        }
    }
})

</script>