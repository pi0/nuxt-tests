import { version } from 'nuxt-edge/package.json'
import type { NuxtConfig } from '@nuxt/types'
import sharedConfig from '../base/nuxt.config'

export default <NuxtConfig>{
  ...sharedConfig,
  publicRuntimeConfig: { nuxtVersion: version }
}
