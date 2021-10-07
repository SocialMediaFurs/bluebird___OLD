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
      <router-link :to="'/' + user + '/profil'">Profil</router-link>
      <router-link :to="'/' + user + '/links'">Links</router-link>
      <p>NSFW - Bereich</p>
      <router-link :to="'/' + user + '/kink'">Fetische</router-link>
      <p>Adminbereich</p>
      <router-link to="/admin/kinks">Fetischliste</router-link>
      <p>Login</p>
      <VueScriptComponent script='<script async src="https://telegram.org/js/telegram-widget.js?15" data-telegram-login="bluebird_login_bot" data-size="large" data-onauth="onTelegramAuth(user)" type="application/javascript"></script>'></VueScriptComponent>
      <VueScriptComponent script='<script type="application/javascript">function onTelegramAuth(user) {this.tgUser = user; alert("Logged in as " + user.first_name + " " + user.last_name + " (" + user.id + (user.username ? ", @" + user.username : "") + ")");}</script>'></VueScriptComponent>
      <p>Test Login 2</p>
      <VueScriptComponent script='<script async src="https://telegram.org/js/telegram-widget.js?15" data-telegram-login="bluebird_login_bot" data-size="large" data-auth-url="https://bluebird-projekt.web.app/"></script>'></VueScriptComponent>
    </span>
    {{tgUser}}
  </div>
  <div class="content">
    <router-view />
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
      tgUser: "user_profil_nicht_geladen"
    };
  },
  computed: {
    user() {
      return this.$store.getters.getCurrentUser;
    },
  },
  watch: {
    tgUser: function (newTgUser) {
      this.telegramAuth(newTgUser);
    }
  },
  methods: {
    telegramAuth(user) {
      this.tgUser = user
      this.$store.commit("setCurrentUser", user.username)
      if (user.id === 322709618) {
        this.$store.commit("setIsAdmin", true)
      }
      alert("Logged in as " + user.first_name + " " + user.last_name + " (" + user.id + (user.username ? ", @" + user.username : "") + ")");
    }
  },
  created() {
    this.$store.commit("setCurrentUser", this.$route.params.user)
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
  background: $secondary;
  height: 100%;
}
h1, h2 {
  text-align: left;
  color: white;
  margin-left: $spacing-40 * 3;
}
h1 {
  font-weight: bold;
  font-size: 2.5em;
}
h2 {
  font-size: 2em;
}

#background {
  height: 100%;
  border-radius: 600px 0 0 0;
  background: darken($brand, 15);
}
#app {
  text-align: center;
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
