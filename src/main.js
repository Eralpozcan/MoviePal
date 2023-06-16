import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle';
import "bootstrap-icons/font/bootstrap-icons.css";
import en from '@/locale/en.json'
import tr from '@/locale/tr.json'
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { createI18n } from 'vue-i18n'
import * as Sentry from "@sentry/vue";
import VueGtag from "vue-gtag";

import App from './App.vue'
import router from './router'

const i18n = createI18n({
  legacy: false,
  locale: 'tr',
  messages: {
    en: en,
    tr: tr
  },
})

const app = createApp(App)

Sentry.init({
  app,
  dsn: import.meta.env.VITE_VUE_APP_SENTRY_DSN,
  logErrors: true,
  integrations: [
    new Sentry.BrowserTracing({
      // Set `tracePropagationTargets` to control for which URLs distributed tracing should be enabled
      tracePropagationTargets: ["localhost", /^https:\/\/yourserver\.io\/api/],
      routingInstrumentation: Sentry.vueRouterInstrumentation(router),
    }),
    new Sentry.Replay(),
  ],
  // Performance Monitoring
  tracesSampleRate: 1.0, // Capture 100% of the transactions, reduce in production!
  // Session Replay
  replaysSessionSampleRate: 0.1, // This sets the sample rate at 10%. You may want to change it to 100% while in development and then sample at a lower rate in production.
  replaysOnErrorSampleRate: 1.0, // If you're not already sampling the entire session, change the sample rate to 100% when sampling sessions where errors occur.
});

app.use(createPinia())
app.use(router)
app.use(i18n)
app.use(VueGtag, {
  config: { id: "G-F7ZQE4QT99" }
});

app.mount('#app')
