<template>
    <v-app-bar
            color="secondary"
            elevate-on-scroll
            scroll-target="#scrolling-techniques-7"
            dark
    >
        <v-toolbar-title style="cursor: pointer;">
            Veutify Application
        </v-toolbar-title>

        <v-spacer/>

        <v-btn class="ma-2" tile outlined color="primary">
            <v-icon left>mdi-magnify</v-icon>
            Automation
        </v-btn>
    </v-app-bar>
</template>

<script>
    import { VAppBar, VIcon, VAppBarNavIcon, VToolbarTitle, VSpacer, VBtn } from 'vuetify/lib';
    export default {
        components: {
            VAppBarNavIcon, VToolbarTitle, VSpacer, VBtn, VAppBar, VIcon
        }
    }
</script>

<style scoped>

</style>
