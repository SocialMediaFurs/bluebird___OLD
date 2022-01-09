import { app } from '@storybook/vue3';

import Vuex from 'vuex';
import PrimeVue from "primevue/config";

import Slider from 'primevue/slider';
import Dialog from 'primevue/dialog';
import Tooltip from 'primevue/tooltip';

import '../src/assets/index.css'
import 'primevue/resources/themes/saga-blue/theme.css';
import 'primevue/resources/primevue.min.css';
import 'primevue/resources/primevue.min.css';
import 'primeicons/primeicons.css';

//👇 Storybook Vue app being extended and registering the library
app.use(Vuex);
app.use(PrimeVue, {ripple: true})

app.component('Slider', Slider);
app.component('Dialog', Dialog);

app.directive('tooltip', Tooltip)

export const decorators = [
  (story) => ({
    components: { story },
    template: '<div style="margin: 3em;"><story /></div>',
  }),
];

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  decorators
}
