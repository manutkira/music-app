import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import VeeValidatePlugin from './includes/validation';
import { auth } from './includes/firebase';
import i18n from './includes/i18n';
import Icon from './directive/icon';
import './assets/tailwind.css';
import './assets/main.css';
import './registerServiceWorker';
import GlobalComponent from './includes/_global';
import ProgressBar from './includes/progress-bar';
import 'nprogress/nprogress.css';

ProgressBar(router);

let app;
auth.onAuthStateChanged(() => {
  if (!app) {
    app = createApp(App).use(i18n);
    app.use(store);
    app.use(router);
    app.use(VeeValidatePlugin);
    app.use(GlobalComponent);
    app.directive('icon', Icon);
    app.mount('#app');
  }
});
