<template>
    <div class="box has-text-weight-bold" :style="estilos">
        <slot></slot>
    </div>
</template>

<script lang="ts">
import { DefineComponent, defineComponent } from 'vue';

export default defineComponent({
    name: 'boxTarefa',
    data () {
        return {
            estilos: {
                background: '#faf0ca'
            }
        }
    }
})
</script>