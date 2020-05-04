const axios = require('axios');

const state = {
    test: "initial"
}

const getters = {
    getTest(state) {
        return state.test;
    }
}

const mutations = {
    setTest(state, payload) {
        state.test = payload;
    }
}

const actions = {
    async testExpressServer({ commit }, payload) {
        console.log('received: ', payload);
        const res = await axios.get('http://localhost:3000/pptr/test').catch((err) => {
            if (err) {
                console.log(err);
            }
        })

        commit('setTest', res.data);
    }
}

export default {
    namespaced: true,
    state,
    mutations,
    getters,
    actions
}
