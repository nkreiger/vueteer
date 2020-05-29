# Vuetify-Electron + Express

### Overview
This project is an Electron Desktop Application Template with VueJS + Veutify, and is connected to an ExpressJS Server on the backend.

``` src/main ``` Renders the below

``` src/renderer ``` is the VueJS + Veutify UI

``` src/server ``` is the ExpressJS Server
#### Build Setup

``` bash
# install dependencies
npm install
cd src/server && npm install

# serve with hot reload at localhost:9080
npm run dev

# build electron application for production
npm run build

```

If error installing chromium, remove the package-lock.json and node-modules in the server directory and
run in ```src/server```
```bash
npm install
```

### Run Setup
```
docker-compose up -d

npm run dev
```
---

This project was generated with [electron-vue](https://github.com/SimulatedGREG/electron-vue) using [vue-cli](https://github.com/vuejs/vue-cli). Documentation about the original structure can be found [here](https://simulatedgreg.gitbooks.io/electron-vue/content/index.html).
