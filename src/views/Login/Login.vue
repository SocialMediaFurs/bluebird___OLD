<template>
  <div>
    <h1>Login</h1>
    <Button @click="googleSignIn">
      Mit Google einloggen
    </Button>
  </div>
</template>

<script>
import firebase from "firebase";
import Button from 'primevue/button';
import router from "../../router";

export default {
  name: 'Home',
  components: {
    Button
  },
  methods: {
    googleSignIn: function() {
      let provider = new firebase.auth.GoogleAuthProvider();

      firebase
        .auth()
        .signInWithPopup(provider)
        .then((result) => {
          let user = result.user;
          this.$store.commit("setLoggedinUser", user)
          router.push({name: 'Dashboard'})
        })
        .catch((err) => {
          console.log(err); // This will give you all the information needed to further debug any errors
        });
    },
  },
};
</script>
