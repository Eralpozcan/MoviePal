import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle';
import "bootstrap-icons/font/bootstrap-icons.css";
import en from '@/locale/en.json'
import tr from '@/locale/tr.json'
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { createI18n } from 'vue-i18n'
import VueGtag from "vue-gtag";

import App from './App.vue'
import router from './router'

const i18n = createI18n({
  legacy: false,
  messages: {
    en,
    tr
  },
})

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(i18n)
app.use(VueGtag, {
  config: { id: "G-F7ZQE4QT99" }
});

app.mount('#app')
