import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';

// Create the Vue app instance and mount it
createApp(App)
  .use(router)  // Use Vue Router
  .use(store)   // Use Vuex Store
  .mount('#app');  // Mount the app to the DOM element with the ID 'app'


