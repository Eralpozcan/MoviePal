import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle';
import "bootstrap-icons/font/bootstrap-icons.css";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/mousewheel';
import 'swiper/css/autoplay';
import 'swiper/css/parallax';
import 'swiper/css/a11y';
import en from '@/locale/en.json'
import tr from '@/locale/tr.json'
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { createI18n } from 'vue-i18n'
// skipcq: JS-C1003 - sentry does not expose itself as an ES Module.
import * as Sentry from "@sentry/vue";
import VueGtag from "vue-gtag";
import { inject } from '@vercel/analytics';
import App from './App.vue'
import router from './router'

const i18n = createI18n({
  legacy: false,
  locale: 'tr',
  messages: {
    en,
    tr
  },
})

const app = createApp(App)

Sentry.init({
  app,
  dsn: import.meta.env.VITE_VUE_APP_SENTRY_DSN,
  release: `MoviePal@${APP_VERSION}`,
  integrations: [
    new Sentry.BrowserTracing({
      // Set `tracePropagationTargets` to control for which URLs distributed tracing should be enabled
      tracePropagationTargets: ["localhost", "https://moviepal.vercel.app", /^https:\/\/yourserver\.io\/api/],
      routingInstrumentation: Sentry.vueRouterInstrumentation(router),
    }),
    new Sentry.Replay(),
  ],
  // Performance Monitoring
  tracesSampleRate: import.meta.env.VITE_VUE_APP_SENTRY_TRACE_SAMPLE_RATE, // Capture 100% of the transactions, reduce in production!
  // Session Replay
  replaysSessionSampleRate: import.meta.env.VITE_VUE_APP_SENTRY_SESSION_SAMPLE_RATE, // This sets the sample rate at 10%. You may want to change it to 100% while in development and then sample at a lower rate in production.
  replaysOnErrorSampleRate: import.meta.env.VITE_VUE_APP_SENTRY_ON_ERROR_SAMPLE_RATE, // If you're not already sampling the entire session, change the sample rate to 100% when sampling sessions where errors occur.
  trackComponents: true,
});

inject();

app.use(createPinia())
app.use(router)
app.use(i18n)
app.use(VueGtag, {
  config: { id: import.meta.env.VITE_VUE_APP_GA_ID },
});

app.mount('#app')
