<template>
  <v-app>
    <router-view />
  </v-app>
</template>

<script>
  import { ipcRenderer } from 'electron'

  export default {
    name: 'app',
    beforeCreate() {
      console.log('Starting server!');
      ipcRenderer.send('start');
    }
  }
</script>
