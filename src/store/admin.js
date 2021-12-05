import {db} from '@/firebase/firebase'
import router from '@/router'

export const adminModule = {
  state: {
    allToken: [],
    allKinks: [],
    isAdmin: false,
  },
  mutations: {
    setAllToken(state, payload) {
      state.allToken = payload;
    },
    setAllKinks(state, payload) {
      state.allKinks = payload;
    },
    setIsAdmin(state, payload) {
      state.isAdmin = payload;
    }
  },
  actions: {
    async setKinkList(state) {
      await db.collection('List').doc('kinks').get().then(snapshot => {
        const data = snapshot.data();
        console.table(data.allKinks)
        state.commit("setAllKinks", data.allKinks)
      })
    },
    async setTokenList(rootState) {
      let allToken = [];
      await db.collection('User').doc(router.currentRoute.value.params.user).collection('Access').get().then(snapshot => {
        snapshot.docs.map(doc => {
          let token = doc.data()
          token.name = doc.id;
          allToken.push(token)
        });
        rootState.commit("setAllToken", allToken)
      })
    },
  },
  getters: {
    getAllKinks: state => state.allKinks,
    getAllToken: state => state.allToken,
    getIsAdmin: state => state.isAdmin,
  }
}
