import { defineNuxtConfig } from "nuxt/config"
import { createApp } from 'vue';
import VueCountdown from '@chenfengyuan/vue-countdown';

const app = createApp({});

app.component(VueCountdown.name, VueCountdown);

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: {enabled: true},
  css: ['~/assets/css/tailwind.css'],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
})
