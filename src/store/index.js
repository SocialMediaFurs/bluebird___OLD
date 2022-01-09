import { createStore } from 'vuex';
import {db} from '@/firebase/firebase'

import {adminModule} from "./admin";
import {loggedinUserModule} from "./logedin";

export default createStore({
  state: {
    currentUser: null,
    currentProfil: null,
    token: null,
    settings: {},
  },
  mutations: {
    setCurrentUser(state, payload) {
      state.currentUser = payload;
    },
    setCurrentProfil(state, payload) {
      state.currentUser = payload;
    },
    setSettings(state, payload) {
      state.settings = payload;
    },
    setToken(state, payload) {
      state.token = payload;
      this.dispatch("setSettings");
    },
  },
  actions: {
    async setProfil(state) {
      await db.collection('User').doc(state.currentProfil).get().then(snapshot => {
        const data = snapshot.data();
        console.log(data)
        state.commit("setCurrentProfil", data)
      })
    },
    setSettings(state) {
      const tokenRef = db.collection('Token').doc(this.state.token);

      tokenRef.get()
        .then((docSnapshot) => {
          if (docSnapshot.exists) {
            tokenRef.onSnapshot((doc) => {
              state.commit("setSettings", doc.data())
            })
          }
        })
    },
  },
  modules: {
    admin: adminModule,
    loggedinUser: loggedinUserModule
  },
  getters: {
    getCurrentUser: state => state.currentUser,
    getCurrentProfil: state => state.currentProfil,
    getToken: state => state.token,
    getSettings: state => state.settings,
  }
});
