import { version } from 'nuxt-edge/package.json'
import { version as bridgeVersion } from '@nuxt/bridge/package.json'
import { defineNuxtConfig } from '@nuxt/bridge'
import sharedConfig from '../base/nuxt.config'

export default defineNuxtConfig({
  ...sharedConfig,
  publicRuntimeConfig: {
    nuxtVersion: `${version} (bridge ${bridgeVersion})`
  }
})
