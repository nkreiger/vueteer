const axios = require('axios');

const state = {
  cmds: []
};

const getters = {
  getCmds(state) {
    return state.cmds;
  }
};

const mutations = {
  setCmds(state, cmds) {
    state.cmds = cmds
  },
  addCmd(state, cmd) {
    state.cmds.push(cmd)
  },
  removeCmd(state, cmd) {
    state.cmds.splice(state.cmds.findIndex(v => v.id === cmd.id),1)
  }
};

const actions = {
  addOrRemoveCmd({ commit }, cmd) {
    console.log(cmd)
    if (cmd.add) commit('addCmd', cmd.el);
    if (!cmd.add) commit('removeCmd', cmd.el);
  },
  setCmds({ commit }, cmds) {
    commit('setCmds', cmds)
  },
  async executeCmds({ commit }, cmds) {
    console.log('execute: ', cmds);

    let res =await axios.get('http://localhost:3000/pptr/test').catch((err) => {
      if (err) {
        console.log(err);
      }
    });
    console.log('test: ', res)
    res =await axios.get('http://localhost:3000/pptr/open').catch((err) => {
      if (err) {
        console.log(err);
      }
    });
    console.log('open: ', res)


    console.log('done executing');
  }
};

export default {
  namespaced: true,
  state,
  mutations,
  getters,
  actions
}
