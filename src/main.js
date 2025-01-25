import { createApp } from 'vue'
import './style.css'
import 'bootstrap/dist/css/bootstrap.css';
// import 'node_modules/bootstrap-vue/src/index.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js'
import '@fortawesome/fontawesome-free/css/all.min.css';
import { createPinia } from 'pinia';

import App from './App.vue'
import router from './router';
const pinia = createPinia();
const app = createApp(App);

app.use(pinia); // Ensure Pinia is registered here
app.use(router)
app.mount('#app');
