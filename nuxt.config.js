import colors from 'vuetify/es5/util/colors';

const is_production = process.env.NODE_ENV === 'production';

const STATIC_URL =
  "https://imibutton-voice-1259477301.cos.ap-guangzhou.myqcloud.com/";

export default {
  target: 'static',
  server: {
    port: 80, // default: 3000
    host: '0.0.0.0' // default: localhost
  },
  /*
   ** Headers of the page
   */
  head: {
    title: '深按钮',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: '伊深Imi语音按钮'
      },
      {
        hid: 'keywords',
        name: 'keywords',
        content:
          '伊深Imi, imi, virtuareal, 深按钮'
      }
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: '#fff' },
  /*
   ** Global CSS
   */
  css: [],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: [
    { src: '@plugins/i18n' },
    { src: '@plugins/eventBus.js', mode: 'client' },
    { src: '@plugins/analytics.js', mode: 'client' }
  ],
  router: {
    middleware: 'ui_config'
  },
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [['@nuxtjs/vuetify', { treeShake: is_production }]],
  /*
   ** Nuxt.js modules
   */
  modules: ['@nuxtjs/pwa', 
            '@nuxtjs/axios', 
            '@nuxtjs/markdownit', 
            '@nuxtjs/sitemap',
            // 请求代理配置，解决跨域
            '@nuxtjs/proxy'],
  /*
   ** vuetify module configuration
   ** https://github.com/nuxt-community/vuetify-module
   */
  vuetify: {
    customVariables: ['~/assets/variables.scss'],
    theme: {
      dark: false,
      themes: {
        light: {
          primary: '#F2C48D', //orange lighten-3
          secondary: '#BF8C88',
          accent: '#BF8C88',
          error: colors.deepOrange.base,
          warning: colors.orange.base,
          info: colors.blueGrey.base,
          success: colors.teal.base
        },
        dark: {
          primary: '#F2DC99',
          secondary: '#F26389',
          accent: '#F26389',
          error: colors.deepOrange.accent4,
          warning: colors.amber.base,
          info: colors.teal.lighten1,
          success: colors.green.accent3
        }
      }
    },
    defaultAssets: {
      font: null,
      icons: 'mdiSvg'
    }
  },
  pwa: {
    manifest: {
      start_url: '/?standalone=true'
    },
    icon: {
      /* icon options */
    }
  },
  markdownit: {
    preset: 'default',
    linkify: true,
    breaks: false,
    xhtmlOut: true,
    use: ['markdown-it-div', 'markdown-it-attrs']
  },
  sitemap: {
    path: '/sitemap.xml',
    hostname: 'http://imimi.ink',
    routes: [
      {
        url: '/',
        changefreq: 'daily',
        priority: 1,
        lastmod: new Date()
      },
      {
        url: '/about',
        changefreq: 'weekly',
        priority: 0.5,
        lastmod: new Date()
      }
    ]
  },//腾讯云静态资源托管
  env: {
    STATIC_URL: STATIC_URL || '',
  },
  /*
   ** Build configuration
   */
  build: {
    optimizeCSS: is_production,
    extractCSS: is_production,
    extend(config, ctx) {
      // Run ESLint on save
      if (ctx.isDev && ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        });
      }
      if (!ctx.isDev && STATIC_URL) {
        config.output.publicPath = STATIC_URL
      }
      
    }
  },
  axios: {
    proxy: true,
    prefix: '', // it only work when proxy is enabled
    credentials: true,
  },
  proxy: {
    // '/api/proxy/lylares': {
    //   target: 'https://api.berryapi.net',
    //   changeOrigin: true,
    //   pathRewrite: { '^/api/proxy/lylares': '' },
    // },
    '/api': {
      target: 'http://api.live.bilibili.com/',
      pathRewrite: {'^/api/': ''},
      changeOrigin: true,
    },
  }
};
