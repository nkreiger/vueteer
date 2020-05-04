<template>
  <v-app>
    <router-view />
  </v-app>
</template>

<script>
  import { ipcRenderer } from 'electron'
  import { VApp } from 'vuetify/lib';

  export default {
    name: 'app',
    components: {
      VApp
    },
    beforeCreate() {
      console.log('Starting server!');
      ipcRenderer.send('start');
    }
  }
</script>
