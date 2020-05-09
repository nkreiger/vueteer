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
                        :key="element.id"
                >
                    <v-btn rounded color="primary" class="mb-4" @click="handleCmdClick(element)">
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
                commands: []
            };
        },
        methods: {
            handleCmdClick(e) {
                console.log(e);
            },
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
            log(event) {
                if (event.added) {
                    this.$store.dispatch('cmds/addOrRemoveCmd',
                        {
                            el: event.added.element,
                            add: true }
                            )
                }
                if (event.removed) {
                    this.$store.dispatch('cmds/addOrRemoveCmd',
                        {
                            el: event.removed.element,
                            add: false }
                    )
                }
            }
        }
    };
</script>
