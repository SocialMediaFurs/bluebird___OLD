import '@babel/polyfill';
import 'mutationobserver-shim';
import { createApp } from 'vue';
import PrimeVue from 'primevue/config';
import App from './App.vue';
import router from './router';
import store from './store';
import firebase from "firebase";

import 'primevue/resources/themes/saga-blue/theme.css';
import 'primevue/resources/primevue.min.css';
import 'primeicons/primeicons.css';

/* PrimeVue Componenten */
import Slider from 'primevue/slider';
import Dialog from 'primevue/dialog';
import Tooltip from 'primevue/tooltip';

// Initialize Firebase
const firebaseConfig = {
  apiKey: "AIzaSyCCnMJ28oQbQ7WgXBcTsmLoEv1B2UM_Xno",
  authDomain: "bluebird-projekt.firebaseapp.com",
  projectId: "bluebird-projekt",
  storageBucket: "bluebird-projekt.appspot.com",
  messagingSenderId: "149358110334",
  appId: "1:149358110334:web:874840e48d68831e14da2f",
  measurementId: "G-XF4083KCQ6"
};
firebase.initializeApp(firebaseConfig);

const app = createApp(App);
app.use(store);
app.use(router);

/* PrimeVue */
app.use(PrimeVue, { ripple: true });

app.component('Slider', Slider);
app.component('Dialog', Dialog);

app.directive('tooltip', Tooltip)

app.mount('#app');
