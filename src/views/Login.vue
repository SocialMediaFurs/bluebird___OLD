<template>
  <p v-if="user">Eingeloggt mit: <span class="userMail">{{user.email}}</span></p>
  <button @click="test">test</button>
  <div v-if="!user">
    <p>Google Login</p>
    <button @click="googleSignIn" class="google"></button>
  </div>
  <div v-else>
    <p>LogOut</p>
    <button @click="googleLogOut" class="logout">Logout</button>
  </div>
</template>

<script>
import firebase from "firebase";

export default {
  data: function () {
    return {
      idToken: null,
    };
  },
  computed: {
    user() {
      return this.$store.getters.getCurrentUser;
    },
  },
  created() {
    firebase.auth().onAuthStateChanged(user => {
      this.$store.commit("setCurrentUser", user || null)
      this.$router.push('/login/' + user.uid)
    })
  },
  methods: {
    googleSignIn() {
      const provider = new firebase.auth.GoogleAuthProvider();
      firebase.auth().signInWithPopup(provider).then(() => {
      }).catch(err => {
        console.log(err)
      });
    },
    test() {
      var credential = firebase.auth.GoogleAuthProvider.credential(this.idToken);
      firebase.auth().signInWithCredential(credential).catch(() => {
      });
    },
    googleLogOut() {
      firebase.auth().signOut().then(() => {
      }).catch(err => {
        console.log("fehler beim ausgeloggen: " + err)
      })
    }
  },
  mounted() {
  }
};
</script>

<style scoped lang="scss">
@import "../assets/variables/variables";

.userMail{
  color: $fontLight;
}
.google {
  height: 100px;
  width: 100px;
  background-color: $secondary;
  border: 0;
  background-image: url("../assets/Google_Logo.png");
  background-size: 100px;
  cursor: pointer;
}
p {
  font-size: 1.3em;
}
img {
  width: 100px;
  height: auto;
}
</style>
