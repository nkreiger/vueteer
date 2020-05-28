<template>
    <div class="row">
        <div class="col-3">
        </div>
        <div class="col-9">
            <h3>EDITOR</h3>
            <draggable class="list-group pa-1 pt-4" :list="commands" group="cmd" @change="log">
                <div
                        class="list-group-item"
                        v-for="(element, index) in commands"
                        :key="index"
                >
                    <v-btn rounded color="primary" class="mb-4" @click="handleCmdClick(element)">
                        {{ element.name }}
                    </v-btn>
                </div>
            </draggable>
        </div>
    </div>
</template>
<script>
    import draggable from "vuedraggable";

    export default {
        name: "two-lists",
        display: "Two Lists",
        order: 1,
        components: {
            draggable
        },
        data() {
            return {
                commands: []
            };
        },
        methods: {
            handleCmdClick(e) {
                console.log(e);
            },
            async log(evt) {
                this.$emit('handleChange', this.commands);
            }
        }
    };
</script>
