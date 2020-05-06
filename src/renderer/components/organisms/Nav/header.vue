<template>
    <v-app-bar
            color="secondary"
            elevate-on-scroll
            scroll-target="#scrolling-techniques-7"
            dark
    >
        <v-toolbar-title style="cursor: pointer;" @click="navigateTo('/')">
            Veutify Application
        </v-toolbar-title>

        <v-spacer/>

        <v-btn class="ma-2" tile outlined color="primary" @click="navigateTo('/automation')" link>
            <v-icon left>mdi-magnify</v-icon>
            Automation
        </v-btn>
    </v-app-bar>
</template>

<script>
    import { VAppBar, VAppBarNavIcon, VToolbarTitle } from 'vuetify/lib';
    export default {
        components: {
            VAppBarNavIcon, VToolbarTitle, VAppBar
        },
        methods: {
            navigateTo(path) {
                this.$router.push(path).catch((err) => console.log(err))
            }
        }
    }
</script>
