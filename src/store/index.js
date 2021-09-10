import { createStore } from 'vuex';

export default createStore({
  state: {
    currentUser: null,
  },
  mutations: {
    setCurrentUser(state, payload) {
      state.currentUser = payload;
    },
  },
  actions: {
  },
  modules: {
  },
  getters: {
    getCurrentUser: state => state.currentUser,
  }
});
