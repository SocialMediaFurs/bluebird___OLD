<template>
  <div class="-z-10 fixed h-screen w-screen bg-primary"></div>
  <div id="background-corner" class="h-screen">
    <div id="background" class="h-screen">
      <div class="header">
        <span>
          <hr class="mt-2">
        </span>
        <div class="menu">
          <img src="./../assets/icons/menu.svg" alt="Profilbild" width="32" height="32" @click="openNavigation" class="mt-0">
        </div>
      </div>
      <!-- Overlay Hauptmenü -->
      <div id="myNav" :class="{ 'navbar_open': showNavbar, 'navbar': !showNavbar }">
        <div class="navbar-content">
          <div class="navbar-content-header p-2 flex" @click="closeNaviagation">
            <img src="./../assets/icons/exit.svg" alt="Profilbild" width="32" height="32" class="cursor-pointer m-0 self-center" />
            <h2 class="ml-4">Menü</h2>
          </div>
          <div class="mt-8">
            <router-link :to="{ name: 'Home'}">Home <i class="pi pi-home"></i></router-link>
            <router-link :to="{ name: 'Profile'}">Profile <i class="pi pi-users"></i></router-link>
            <router-link :to="{ name: 'About'}">About <i class="pi pi-info-circle"></i></router-link>
            <!-- Redirect mode -->
            <vue-telegram-login
              mode="redirect"
              telegram-login="YourTelegramBot"
              redirect-url="https://your-website.io" />

            <VueScriptComponent script='<script async src="https://telegram.org/js/telegram-widget.js?15" data-telegram-login="bluebird_login_bot" data-size="large" data-auth-url="https://bluebird-projekt.web.app/"></script>'></VueScriptComponent>

          </div>
        </div>
      </div>

      <!-- Hauptansicht -->
      <div class="mx-4">
        <h1 class="text-left ml-40">Noataks Profil</h1>
        <div class="nav">
          <div>
            <img src="./../assets/akuma.jpg" alt="Akuma">
          </div>
          <span class="nav-mobile">
            <router-link :to="{ name: 'AboutMe', params: { user: this.user }}">Über Mich</router-link>
            <router-link :to="{ name: 'Links', params: { user: this.user }}">Links</router-link>
            <p class="cursor-pointer" @click="showNSFW=!showNSFW">NSFW <i :class="{ 'pi-chevron-down': showNSFW, 'pi-chevron-up': !showNSFW }" class="pi float-right"/></p>
            <span v-if="showNSFW">
              <router-link :to="{ name: 'Kink', params: { user: this.user }}" class="block">Fetische</router-link>
            </span>

            <span v-if="isAdmin">
                <p>Adminbereich</p>
              <router-link :to="{ name: 'AdminKinks'}">Fetischliste</router-link>
            </span>
          </span>
        </div>
        <div class="content">
          <router-view class="view three" name="profil"></router-view>
        </div>
      </div>
      <div class="footer"></div>
    </div>
  </div>
</template>

<script>
import VueScriptComponent from 'vue-script-component'
import {vueTelegramLogin} from 'vue-telegram-login'

export default {
  components: {
    VueScriptComponent,
    vueTelegramLogin
  },
  data: function () {
    return {
      showNavbar: false,
      showNSFW: false,
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
    setUser(user) {
      this.$store.commit("setCurrentUser", user.id)
    },
    telegramAuth() {
      const urlParams = new URLSearchParams(window.location.search);
      if (urlParams !== null) {
        this.tgUser.id = urlParams.get("id");
        this.tgUser.username = urlParams.get("username");
        this.tgUser.photoURL = urlParams.get("photo_url");
        //this.$store.commit("setCurrentUser", this.tgUser)
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
    yourCallbackFunction (user) {
      // gets user as an input
      // id, first_name, last_name, username,
      // photo_url, auth_date and hash
      console.log(user)
    }
  },
  created() {
    this.telegramAuth()
    //this.setUser(this.$route.params.user)
    console.log(this.$route.params.user)
  },
  updated() {
    this.telegramAuth()
  },
};
</script>

<style scoped lang="scss">
span p {
  color: #fffdf1;
  margin: 10px 0;
  border-bottom: 1px solid #fffdf1;
}
</style>
