<template>
    <v-container class="template-body">
        <!-- drawer of commands -->
        <drag-area />
        <!-- drag and drop command list -->
        <drop-area />
    </v-container>
</template>

<script>
    export default {
        components: {
            'drag-area': require('@/components/organisms/Automation/DragArea').default,
            'drop-area': require('@/components/organisms/Automation/DropArea').default
        }
    }
</script>

<style>
    .v-application--wrap {
        background-size: 40px 40px;
        background-image: radial-gradient(circle, #000000 1px, rgba(0, 0, 0, 0) 1px);
        background-repeat: repeat;
    }
</style>
