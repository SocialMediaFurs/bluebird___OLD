<template>
  <div class="-z-10 fixed h-screen w-screen bg-primary"></div>
  <div id="background-corner" class="h-screen">
    <div id="background" class="h-screen">
      <div class="header">
        <span>
          <hr>
        </span>
        <div class="menu">
          <img src="./../assets/icons/menu.svg" alt="Profilbild" width="32" height="32" @click="openNavigation" >
        </div>
      </div>
      <!-- Overlay Hauptmenü -->
      <div id="myNav" :class="{ 'navbar_open': showNavbar, 'navbar': !showNavbar }">
        <div class="navbar-content">
          <div class="navbar-content-header p-2 flex" @click="closeNaviagation">
            <img src="./../assets/icons/exit.svg" alt="Profilbild" width="32" height="32" class="cursor-pointer" />
            <h2 class="ml-4">Menü</h2>
          </div>
          <div class="mt-8">
            <router-link to="/">Home <i class="pi pi-home"></i></router-link>
            <router-link to="/">Profile <i class="pi pi-users"></i></router-link>
            <router-link to="/">About <i class="pi pi-info-circle"></i></router-link>
          </div>
        </div>
      </div>

      <!-- Hauptansicht -->
      <div class="profil">
        <h1>Noataks Profil</h1>
      </div>
      <div class="nav">
        <div>
          <img src="./../assets/akuma.jpg" alt="Akuma">
        </div>
        <span class="nav-mobile">
          <router-link :to="'/' + user.username + '/aboutme'">Über Mich</router-link>
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
        <router-view class="view three" name="profil"></router-view>
      </div>
      <div class="footer"></div>
    </div>
  </div>
</template>

<script>
import VueScriptComponent from 'vue-script-component'

export default {
  components: {
    VueScriptComponent
  },
  data: function () {
    return {
      showNavbar: false,
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
    },
    openNavigation() {
      this.showNavbar = true;
    },
    closeNaviagation() {
      this.showNavbar = false;
    },
  },
  created() {
    this.telegramAuth()
  },
  updated() {
    this.telegramAuth()
  },
};
</script>
