<template>
    <div>
        <!-- header-->
        <Header />
        <v-app>
            <router-view />
        </v-app>
        <!-- footer -->
    </div>
</template>

<script>
    import Header from '../components/organisms/Nav/header';

    export default {
        name: "Main",
        components: {
            Header
        }
    }
</script>
