<template>
    <div class="row">
        <div class="col-6">
            <h3>COMMANDS</h3>
            <draggable class="list-group red lighten-5 pa-1 pt-4" style="border-radius: 15px;" :list="commands" group="cmd" @change="log">
                <div
                        class="list-group-item"
                        v-for="(element, index) in commands"
                        :key="element.id"
                >
                    <v-btn rounded color="primary" class="mb-4">
                        {{ element.name }} {{ index }}
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
                commands: [
                    { name: "Open Browser", id: 1 },
                    { name: "Navigate To", id: 2 },
                    { name: "Click", id: 3 },
                    { name: "Open Browser", id: 4 },
                    { name: "Navigate To", id: 5 },
                    { name: "Click", id: 6 },
                    { name: "Open Browser", id: 7 },
                    { name: "Navigate To", id: 8 },
                    { name: "Click", id: 9 },
                    { name: "Open Browser", id: 10 },
                    { name: "Navigate To", id: 11 },
                    { name: "Click", id: 12 },
                ]
            };
        },
        methods: {
            add: function() {
                this.list.push({ name: "Juan" });
            },
            replace: function() {
                this.list = [{ name: "Edgard" }];
            },
            clone: function(el) {
                return {
                    name: el.name + " cloned"
                };
            },
            log: function(evt) {
               // window.console.log(evt);
            }
        }
    };
</script>

<style scoped>
    .list-group {
        border: 5px solid black;
    }
</style>
