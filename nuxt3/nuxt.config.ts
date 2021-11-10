import { version } from 'nuxt3/package.json'
import { defineNuxtConfig } from 'nuxt3'
import sharedConfig from '../base/nuxt.config'

// https://v3.nuxtjs.org/docs/directory-structure/nuxt.config
export default defineNuxtConfig({
  ...sharedConfig,
  publicRuntimeConfig: {
    nuxtVersion: version
  }
})
