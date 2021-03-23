import '@babel/polyfill';
import 'mutationobserver-shim';
import { createApp } from 'vue';
import PrimeVue from 'primevue/config';
import App from './App.vue';
import router from './router';
import store from './store';

import 'primevue/resources/themes/saga-blue/theme.css';
import 'primevue/resources/primevue.min.css';
import 'primeicons/primeicons.css';

/* PrimeVue Componenten */
import Slider from 'primevue/slider';

const app = createApp(App);
app.use(store);
app.use(router);

/* PrimeVue */
app.use(PrimeVue, { ripple: true });

app.component('Slider', Slider);

app.mount('#app');
