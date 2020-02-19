import {ipcRenderer} from "electron";
<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
  import { ipcRenderer } from 'electron'

  export default {
    name: 'hackathon-template',
    beforeCreate() {
      console.log('Starting server!')
      ipcRenderer.send('start')
    }
  }
</script>

<style>
  /* CSS */
</style>
