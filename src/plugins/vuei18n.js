import Vue from 'vue'
import VueI18n from 'vue-i18n'

import store from '../store'

import de from '@/locales/de.json'
import fr from '@/locales/fr.json'
import it from '@/locales/it.json'

Vue.use(VueI18n)

export const i18n = new VueI18n({
  locale: store.getters.language,
  fallbackLocale: 'fr',
  messages: { de, fr }
})
