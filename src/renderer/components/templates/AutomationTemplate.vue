<template>
    <v-container class="template-body">
        <v-row>
            <v-col col="4">
                <!-- drawer of commands -->
                <drag-area />
            </v-col>
            <v-col col="8">
                <!-- drag and drop command list -->
                <drop-area />
            </v-col>
        </v-row>
        <v-row class="sticky-bottom">
            <v-col style="display: flex; justify-content: flex-end">
                <v-btn color="error" @click="executeCmds">EXECUTE</v-btn>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
    export default {
        components: {
            'drag-area': require('@/components/organisms/Automation/DragArea').default,
            'drop-area': require('@/components/organisms/Automation/DropArea').default
        },
        methods: {
            executeCmds() {
                const cmds = this.$store.getters['cmds/getCmds']
                if (cmds.length !== 0) {
                    this.$store.dispatch('cmds/executeCmds', cmds)
                }
            }
        },
        mounted() {
            this.$store.dispatch('cmds/setCmds', [])
        }
    }
</script>

<style>
    .v-application--wrap {
        background-size: 40px 40px;
        background-image: radial-gradient(circle, #000000 1px, rgba(0, 0, 0, 0) 1px);
        background-repeat: repeat;
    }

    .sticky-bottom {
        position: -webkit-sticky;
        position: sticky;
        bottom: 1rem;
    }
</style>
