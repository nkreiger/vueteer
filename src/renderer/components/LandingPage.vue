<template>
  <div class="page-container">
    <md-app>
      <md-app-toolbar class="md-primary">
        <span class="md-title">My Title</span>
      </md-app-toolbar>
      <md-app-content>
        <p v-for="i in range" :key="i">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error quibusdam, non molestias et! Earum magnam, similique, quo recusandae placeat dicta asperiores modi sint ea repudiandae maxime? Quae non explicabo, neque.
        </p>
        <div class="md-layout">
          <div class="md-layout-item">
            <md-button class="btn-primary" @click="testAPI()">CLICK ME TO TEST API CALL</md-button>
          </div>
          <div class="md-layout-item">
            <h1>Check the console dumb dumb</h1>
          </div>
        </div>
      </md-app-content>
    </md-app>
  </div>
</template>

<style lang="css" scoped>
  .md-app {
    border: 1px solid black;
  }
  .md-drawer {
    width: 230px;
    max-width: calc(100vw - 125px);
  }
</style>

<script>
  export default {
    name: 'Normal',
    data: () => ({
      range: [0, 1, 2, 3, 4, 5]
    }),
    methods: {
      async testAPI() {
        console.log('testing api!')
        console.log(this.$store.getters['Test/getTest']);
        await this.$store.dispatch('Test/testExpressServer', 'test it!').catch((err) => {
          if (err) {
            console.log(err);
          }
        });
        console.log(this.$store.getters['Test/getTest']);
      }
    }
  }
</script>
