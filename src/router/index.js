import { createRouter, createWebHistory } from 'vue-router';
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
import HomeLoggedin from '../views/Login/Home.vue';
//Loggedin - Admin Seiten
import AdminKinks from '../views/Login/Admin/Kinks.vue';

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
      {
        name: 'HomeLoggedIn',
        path: 'login/:id',
        components: {
          profil: HomeLoggedin
        }
      },
      {
        name: 'AdminKinks',
        path: 'admin/kinks',
        components: {
          profil: AdminKinks
        }
      }
    ]
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
