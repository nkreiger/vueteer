<template>
    <div>
        <!-- header-->
        <Header />
        <router-view />
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
