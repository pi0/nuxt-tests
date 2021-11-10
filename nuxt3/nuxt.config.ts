import sharedConfig from '../nuxt.config'
import { version } from 'nuxt3/package.json'
import { defineNuxtConfig } from 'nuxt3'

// https://v3.nuxtjs.org/docs/directory-structure/nuxt.config
export default defineNuxtConfig({
  ...sharedConfig,
  publicRuntimeConfig: {
    nuxtVersion: version
  }
})
