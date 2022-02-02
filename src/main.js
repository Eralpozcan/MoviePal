import Vue from 'vue'
import App from './App.vue'
import store from './store'
import router from './router'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle';
import "bootstrap-icons/font/bootstrap-icons.css";
import dotenv from 'dotenv'
import i18n from "./i18n";

dotenv.config()

Vue.config.productionTip = false



new Vue({
  store,
  router,
  dotenv,
  i18n,
  render: h => h(App)
}).$mount('#app')
