import themeColor from './utils/theme'
const packageJson = import('./package.json')

export default {
  ssr: false,
  target: 'server',
  loading: false,
  head: {
    // titleTemplate: '%s - nuxt-vite-vuetify-test',
    title: 'عنوان',
    htmlAttrs: {
      lang: 'fa',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },
  env: {
    CLIENT_IP: process.env.NUXT_ENV_CLIENT_IP,
    CLIENT_TAG: process.env.NUXT_ENV_CLIENT_TAG,
    CLIENT_VERSION: packageJson.version,
  },
  css: ['~/assets/_main.scss'],
  plugins: [
    '~/plugins/datePicker',
    '~/plugins/persianTools',
    '~/plugins/filters.js',
  ],
  components: true,
  buildModules: [
    'nuxt-vite',
    '@nuxtjs/eslint-module',
    '@nuxtjs/stylelint-module',
    '@nuxtjs/vuetify',
  ], 
  modules: ['nuxt-route-meta', '@nuxtjs/axios'],
  vuetify: {
    rtl: true,
    icons: {
      iconfont: 'mdi',
    },
    theme: {
      dark: false,
      options: { customProperties: true },
      themes: themeColor,
    },
  },
  build: {
    publicPath: '/dist/',
    filenames: {
      chunk: ({ isDev }) => (isDev ? '[name].js' : '[id].[contenthash:7].js'),
    },
  },
}
