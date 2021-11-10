import sharedConfig from '../nuxt.config'
import { version } from 'nuxt-edge/package.json'
import type { NuxtConfig } from '@nuxt/types'

export default <NuxtConfig>{
  ...sharedConfig,
  publicRuntimeConfig: { nuxtVersion: version }
}
