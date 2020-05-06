<template>
    <div class="row">
        <div class="col-3">
            <h3>Draggable 1</h3>
            <draggable class="list-group" :list="list1" group="people" @change="log">
                <div
                        class="list-group-item"
                        v-for="(element, index) in list1"
                        :key="element.name"
                >
                    {{ element.name }} {{ index }}
                </div>
            </draggable>
        </div>

        <div class="col-3">
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
                list1: [
                    { name: "John", id: 1 },
                    { name: "Joao", id: 2 },
                    { name: "Jean", id: 3 },
                    { name: "Gerard", id: 4 }
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
                window.console.log(evt);
            }
        }
    };
</script>
