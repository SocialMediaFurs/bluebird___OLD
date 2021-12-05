import { createRouter, createWebHistory } from 'vue-router';
import store from "./../store/index.js"
// Welche Ansicht
import General from '../views/General';
import Profil from '../views/Profil';
//Allgemeine Seiten
import Home from '../views/General/Home.vue';
import About from '../views/General/About.vue';
import Profile from '../views/General/Profile.vue';
//Profil Seiten
import Kink from '../views/Profil/Kinks.vue';
import AboutMe from '../views/Profil/AboutMe';
import Links from '../views/Profil/Links';
//Loggedin Seiten
import HomeLoggedin from '../views/Login/Login.vue';
import Dashboard from "../views/Login/User/Dashboard";
//Loggedin - Admin Seiten
import AdminKinks from '../views/Login/Admin/Kinks.vue';
import AdminAuth from '../views/Login/Admin/Authentication.vue';

const routes = [
  {
    path: '/',
    component: General,
    redirect: { name: 'Home' },
    children: [
      {
        name: 'Home',
        path: 'home',
        components: {
          general: Home
        }
      },
      {
        name: 'About',
        path: 'about',
        components: {
          general: About
        }
      },
      {
        name: 'Profile',
        path: 'profile',
        components: {
          general: Profile
        }
      }
    ]
  },
  {
    path: '/profil',
    name: 'Profil',
    component: Profil,
    redirect: { name: 'Profile' },
    children: [
      {
        name: 'Kink',
        path: ':user/kink',
        components: {
          profil: Kink
        }
      },
      {
        name: 'AboutMe',
        path: ':user/aboutme',
        components: {
          profil: AboutMe
        },
      },
      {
        name: 'Links',
        path: ':user/links',
        components: {
          profil: Links
        }
      },
    ]
  },
  {
    path: '/admin',
    name: 'Admin',
    component: General,
    redirect: { name: 'Home' },
    children: [
      {
        name: 'AdminKinks',
        path: 'kinks',
        components: {
          general: AdminKinks
        }
      },
      {
        name: 'AdminAuth',
        path: ':user/auth',
        components: {
          general: AdminAuth
        }
      }
    ]
  },
  {
    path: '/login',
    name: 'Login',
    component: General,
    redirect: { name: 'HomeLoggedin' },
    children: [
      {
        name: 'HomeLoggedIn',
        path: 'home',
        components: {
          general: HomeLoggedin
        }
      },
      {
        name: 'Dashboard',
        path: 'dashboard',
        components: {
          general: Dashboard
        },
        meta: {
          auth: true
        }
      },
    ]
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

router.beforeEach((to, from, next) => {
  if (
    to.matched.some(route => route.meta.auth) &&
    !store.getters.getSettings
  ) {
    next('/login/home');
  }
  else next()
})

export default router;
