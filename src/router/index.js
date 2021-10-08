import { createRouter, createWebHistory } from 'vue-router';
// Welche Ansicht
import General from '../views/General';
import Profil from '../views/Profil'
//Allgemeine Seiten
import Home from '../views/General/Home.vue';
import About from '../views/General/About.vue';
import Profile from '../views/General/Profile.vue';
//Profil Seiten
import Kink from '../views/Profil/Kinks.vue';
import AboutMe from '../views/Profil/AboutMe';
import Links from '../views/Profil/Links';
//Loggedin Seiten
import HomeLoggedin from '../views/Login/Home.vue';
//Loggedin - Admin Seiten
import AdminKinks from '../views/Login/Admin/Kinks.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: General,
    children: [
      {
        path: 'home',
        components: {
          general: Home
        }
      },
      {
        path: 'about',
        components: {
          general: About
        }
      },
      {
        path: 'profile',
        components: {
          general: Profile
        }
      }
    ]
  },

  {
    path: '/profil',
    name: 'Profile',
    component: Profil,
    children: [
      {
        path: ':user/kink',
        components: {
          profil: Kink
        }
      },
      {
        path: ':user/aboutme',
        components: {
          profil: AboutMe
        }
      },
      {
        path: ':user/links',
        components: {
          profil: Links
        }
      },
      {
        path: 'login/:id',
        components: {
          profil: HomeLoggedin
        }
      },
      {
        path: 'admin/kinks',
        components: {
          profil: AdminKinks
        }
      }
    ]
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  mode: 'history',
  routes
});

export default router;
