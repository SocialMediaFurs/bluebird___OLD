<template>
  <div class="header">
    <span>
      <hr>
    </span>
    <div class="menu">
      <img src="../src/assets/menu.png" alt="Profilbild" width="32" height="32">
    </div>
  </div>
  <div class="profil">
    <h1>Noataks Profil</h1>
  </div>
  <div class="nav">
    <div>
      <img src="../src/assets/akuma.jpg" alt="Akuma">
    </div>
    <span class="nav-mobile">
      <router-link to="/">Home</router-link>
      <router-link :to="'/' + user.username + '/profil'">Profil</router-link>
      <router-link :to="'/' + user.username + '/links'">Links</router-link>
      <p>NSFW - Bereich</p>
      <router-link :to="'/' + user.username + '/kink'">Fetische</router-link>
      <span v-if="isAdmin">
        <p>Adminbereich</p>
        <router-link to="/admin/kinks">Fetischliste</router-link>
      </span>
      <p>Login</p>
      <VueScriptComponent script='<script async src="https://telegram.org/js/telegram-widget.js?15" data-telegram-login="bluebird_login_bot" data-size="large" data-auth-url="https://bluebird-projekt.web.app/"></script>'></VueScriptComponent>
    </span>
  </div>
  <div class="content">
    <router-view />
    <pre>
      <code>
        {{tgUser}}
      </code>
    </pre>
  </div>
  <div class="footer"></div>
</template>

<script>
import VueScriptComponent from 'vue-script-component'

export default {
  components: {
    VueScriptComponent
  },
  data: function () {
    return {
      tgUser: {
        id: 0,
        username: "",
        photoURL: ""
      },
    };
  },
  computed: {
    user() {
      return this.$store.getters.getCurrentUser;
    },
    isAdmin() {
      return this.$store.getters.getIsAdmin;
    },
  },
  watch: {
    tgUser: function (newTgUser) {
      this.telegramAuth(newTgUser);
    }
  },
  methods: {
    telegramAuth() {
      const urlParams = new URLSearchParams(window.location.search);
      if (urlParams !== null) {
        this.tgUser.id = urlParams.get("id");
        this.tgUser.username = urlParams.get("username");
        this.tgUser.photoURL = urlParams.get("photo_url");
        this.$store.commit("setCurrentUser", this.tgUser)
        if (this.tgUser.id === "322709618") {
          this.$store.commit("setIsAdmin", true)
        }
      }
    }
  },
  created() {
    this.telegramAuth()
  },
  updated() {
    this.telegramAuth()
  },
};
</script>

<style lang="scss">
@import "assets/variables/variables";

* {
  font-family: Roboto,serif;
  color: #333333;
}
html, body {
  background: darken($brand, 15);
  height: 100%;
}
h1, h2 {
  text-align: left;
  color: white;
  margin-left: $spacing-40 * 3;
}

#background {
  height: 100%;
  border-radius: 600px 0 0 0;
  background: darken($brand, 15);
}
#background-corner {
  height: 100%;
  background: $secondary;
}
#app {
  text-align: center;
  padding-left: 20px;
  color: $accent;
}

.contentbox {
  width: 80%;
  margin: 10px auto;
  padding: 15px;
  border-radius: 20px;
  background-color: #547EBD;
}

.logout {
  margin-top: 20px;
  height: 25px;
  width: 80px;
  color: $fontLight;
  background-color: $warn;
  border: 2px solid darken($warn, 15%);
  border-radius: 10px;
}
.header {
  display: flex;
  flex-direction: row;

  span {
    width: calc(100% - 32px);
    margin: $spacing-8 $spacing-20;

    hr {
      background-color: $fontLight;
      height: 1.5px;
      border-radius: 1px;
      border: 0;
    }
  }

  .menu {
    margin-right: $spacing-16;
  }
}
.nav {
  display: flex;
  flex-direction: column;
  margin: auto;
  padding: 30px;
  height: fit-content;
  width: 90%;

  img {
    border-radius: 50%;
    margin-bottom: 30px;
    box-shadow: 6px 6px 15px 2px $shadow;
  }

  a, p {
    color: $fontLight;
    margin: 10px 0;
    border-bottom: 0;
    text-decoration: none;
    text-align: left;
    padding: 6px 19px;
  }
  p {
    cursor: default;
  }
  .router-link-exact-active {

    border-bottom: 2px solid $fontLight;
  }

  &-mobile {
    padding-bottom: $spacing-8;
    border-bottom: 1px solid $fontLight;
    width: fit-content;
    margin: auto;
  }

  @media (min-width: $breakpoint-tablet) {
    display: flex;
    flex-direction: column;
    position: fixed;
    top: 0;
    bottom: 0;
    right: 25px;
    margin: 117px auto;
    padding: 30px;
    height: fit-content;
    width: 300px;
    border-radius: 20px;
    background-color: $brand;

    a {
      color: $fontLight;
      margin: 10px 0;
      border-bottom: 1px solid $fontLight;
      text-decoration: none;
      text-align: left;
      padding: 0 0 5px 20px;
    }

    .router-link-exact-active {
      color: $fontLight-secondary;
      border-bottom: 1px solid $fontLight-secondary;
    }

    &-mobile {
      border-bottom: 0;
      display: flex;
      flex-direction: column;
      width: 100%;
    }
  }
}
.content {
  width: 100%;

  @media (min-width: $breakpoint-tablet) {
    width: calc(100% - 300px - 25px);
  }
}
.footer {
  height: 20px;
}
</style>
