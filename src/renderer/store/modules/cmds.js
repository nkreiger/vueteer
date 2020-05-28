const axios = require('axios');

const actions = {
  async executeCmds({ commit }, cmds) {
    console.log('execute: ', JSON.stringify(cmds));
    const json = JSON.stringify(cmds);
    axios.defaults.headers.post['Content-Type'] = 'application/json'
    const res = await axios.post('http://localhost:3000/pptr', json).catch((err) => {
      if (err) {
        console.log(err);
      }
      console.log('error');
      console.error(err);
    });
    console.log('done executing: ', res);
  }
};

export default {
  namespaced: true,
  actions
}
