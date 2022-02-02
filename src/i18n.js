import en from '../src/locale/en.json'
import tr from "../src/locale/tr.json";
import VueI18n from "vue-i18n";
import Vue from "vue";

Vue.use(VueI18n);

export default new VueI18n({
  locale: "en",
  messages: {
    en: en,
    tr: tr,
  },
});