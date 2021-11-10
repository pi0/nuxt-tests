import sharedConfig from '../nuxt.config'
import { version } from 'nuxt-edge/package.json'
import { version as bridgeVersion } from '@nuxt/bridge/package.json'
import { defineNuxtConfig } from '@nuxt/bridge'

export default defineNuxtConfig({
  ...sharedConfig,
  publicRuntimeConfig: {
    nuxtVersion: `${version} (bridge ${bridgeVersion})`
  }
})
