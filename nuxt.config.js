export default {
  router: {
    base: '/'
  },
  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    htmlAttrs: {
      lang: 'en'
    },
    title: 'Gothamist: New York City Local News, Food, Arts & Events',
    meta: [
      { charset: 'utf-8' },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1'
      },
      {
        hid: 'description',
        name: 'description',
        content: 'Gothamist is a website about New York City news, arts and events, and food, brought to you by New York Public Radio.'
      },
      {
        hid: 'og_site_name',
        name: 'og:site_name',
        content: 'Gothamist'
      },
      {
        hid: 'og_url',
        name: 'og:url',
        content: 'https://gothamist.com'
      },
      {
        hid: 'og_type',
        name: 'og:type',
        content: 'website'
      },
      {
        hid: 'og_locale',
        name: 'og:locale',
        content: 'en_US'
      },
      {
        hid: 'og_title',
        name: 'og:title',
        content: 'Gothamist: New York City Local News, Food, Arts & Events'
      },
      {
        hid: 'og_description',
        name: 'og:description',
        content: 'Gothamist is a website about New York City news, arts and events, and food, brought to you by New York Public Radio.'
      },
      {
        hid: 'og_image',
        name: 'og:image',
        content: 'https://gothamist.com/static-images/home_og_1200x650.png'
      },
      {
        hid: 'og_image_width',
        name: 'og:image:width',
        content: '1200'
      },
      {
        hid: 'og_image_height',
        name: 'og:image:height',
        content: '650'
      },
      {
        hid: 'og_image_alt',
        name: 'og:image:alt',
        content: 'Gothamist'
      },
      {
        hid: 'fb_app_id',
        name: 'fb:app_id',
        content: '151261804904925'
      },
      {
        hid: 'twitter_title',
        name: 'twitter:title',
        content: 'Gothamist: New York City Local News, Food, Arts & Events'
      },
      {
        hid: 'twitter_description',
        name: 'twitter:description',
        content: 'Gothamist is a website about New York City news, arts and events, and food, brought to you by New York Public Radio.'
      },
      {
        hid: 'twitter_url',
        name: 'twitter:url',
        content: 'https://gothamist.com'
      },
      {
        hid: 'twitter_site',
        name: 'twitter:site',
        content: '@gothamist'
      },
      {
        hid: 'twitter_image',
        name: 'twitter:image',
        content: 'https://gothamist.com/static-images/home_og_1200x650.png'
      },
      {
        hid: 'twitter_alt',
        name: 'twitter:alt',
        content: 'Gothamist'
      }
    ]
  },

  link: [
    {
      rel: 'icon',
      type: 'image/x-icon',
      href: '/favicon.ico'
    },
    {
      rel: 'preconnect',
      href: process.env.API,
      crossorigin: true
    }
  ],

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: [
    {
      lang: 'scss',
      src: './assets/main.scss'
    }
  ],

  styleResources: { scss: './assets/*.scss' },

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: false,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    '@nuxtjs/style-resources',
    '@nuxtjs/google-analytics'
  ],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    '@nuxtjs/sentry',
    '@nuxtjs/gtm'
  ],

  publicRuntimeConfig: {
    gtm: {
      id: process.env.GTM_ID
    },
    // Axios module configuration (https://go.nuxtjs.dev/config-axios)
    axios: {
      baseURL: process.env.API
    }
  },

  gtm: {
    // pageTracking: true, // using custom page tracking instead
    enabled: true,
    debug: true, // set this to true when you are testing to get console logs
    pageViewEventName: 'Page View'
  },

  googleAnalytics: {
    id: process.env.GA_ID
  },

  // sentry: {
  //   dsn: process.env.SENTRY_DSN,
  //   config: {
  //     lazy: true
  //   }
  // },

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {
    // this is needed to transpile es6 modules imported from radial
    transpile: [
      'nypr-design-system-vue'
    ],
    extend (config, ctx) {
      config.module.rules.push({
        resolve: { symlinks: false }
      })
      if (ctx.isDev) {
        config.devtool = ctx.isClient ? 'source-map' : 'inline-source-map'
      }
    }
  }
}
