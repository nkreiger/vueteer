<template>
    <v-content>
        <automation-template />
    </v-content>
</template>

<script>
    export default {
        name: "Automation",
        components: {
            'automation-template': require('@/components/templates/AutomationTemplate').default
        }
    }
</script>
