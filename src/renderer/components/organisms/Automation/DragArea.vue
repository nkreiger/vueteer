<template>
    <div class="row">
        <div class="col-6">
            <h3>COMMANDS</h3>
            <draggable class="list-group red lighten-5 pa-1 pt-4" style="border-radius: 15px;" :list="commands" group="cmd" @change="log">
                <div
                        class="list-group-item"
                        v-for="(element, index) in commands"
                        :key="index"
                >
                    <v-btn rounded color="primary" class="mb-4">
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
                commands: [
                    {
                        name: "Open Browser",
                        type: 'browser',
                        cmd: {
                            value: 'open'
                        }
                    },
                    {
                        name: "New Page",
                        type: 'browser',
                        cmd: {
                            value: 'newPage'
                        }
                    },
                    {
                        name: "Close Browser",
                        type: 'browser',
                        cmd: {
                            value: 'close'
                        }
                    },
                    {
                        name: "Navigate To",
                        type: 'page',
                        cmd: {
                            value: 'navigateTo'
                        }
                    },
                    {
                        name: "Type",
                        type: 'element',
                        cmd: {
                            value: 'type'
                        }
                    },
                    {
                        name: "Click",
                        type: 'element',
                        cmd: {
                            value: 'click'
                        }
                    }
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
