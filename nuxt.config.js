const Prismic = require('prismic-javascript')
const PrismicDOM = require('prismic-dom')

module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'Distantly Yours',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1, shrink-to-fit=no' },
      { hid: 'description', name: 'description', content: 'Product Design, UX Design, and Design Consulting in Seattle, WA' },
      { name: 'application-name', content: 'Distantly Yours' },
      { name: 'theme-color', content: '#197FA1' },
      { name: 'msapplication-navbutton-color', content: '#03a1d5'},
      { name: 'apple-mobile-web-app-status-bar-style', content: '#197FA1'}
    ],
    link: [
      { rel: 'apple-touch-icon', sizes: '180x180', href: '/apple-touch-icon.png?v=wAO9R4Y0rn' },
      { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/favicon-32x32.png?v=wAO9R4Y0rn' },
      { rel: 'icon', type: 'image/png', sizes: '16x16', href: '/favicon-16x16.png?v=wAO9R4Y0rn' },
      { rel: 'manifest', href:'/site.webmanifest?v=YAmWaLEo7o' },
      { rel: 'mask-icon', href:'/safari-pinned-tab.svg?v=wAO9R4Y0rn', color: '#5bbad5' },
      { rel: 'shortcut icon', href:'/favicon.ico?v=wAO9R4Y0rn', color: '#5bbad5' },
      {
        rel: 'stylesheet',
        href: 'https://use.typekit.net/czd3cnh.css'
      }
    ],
  },
  /*
  ** Customize the progress bar color
  */
  loading: { color: 'rgba(3, 161, 213, .3)' },
  modules: [
    ['nuxt-sass-resources-loader', '~/assets/main.scss']
  ],
  /*
  ** Build configuration
  */
  build: {
    /*
    ** Run ESLint on save
    */
    extend (config, { isDev, isClient }) {
      const tsLoader = {
        loader: 'ts-loader',
        options: { appendTsSuffixTo: [/\.vue$/], transpileOnly: true },
        exclude: [/vendor/, /\.nuxt/],
      }
      config.module.rules.push({ test: /((client|server)\.js)|(\.tsx?)$/, ...tsLoader })
      config.resolve.extensions.push('.ts')
      config.module.rules.map((rule) => {
        if (rule.loader === 'vue-loader') { rule.options.loaders = { ts: tsLoader } }
        return rule
      })
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  },
  css: ['~/assets/html.css'],
  generate: {
    routes: async function () {
      const api = await Prismic.getApi('https://distantly-yours-blog.cdn.prismic.io/api/v2')
      const blogQuery = await api.query(Prismic.Predicates.at('document.type', 'blog_post'), { orderings: '[my.blog_post.date desc]' })
      console.log('blog_posts = ', blogQuery.results)
      const portfolioQuery = await api.query(Prismic.Predicates.at('document.type', 'case_study'), {} )
      console.log('Case Studies fetched: ', portfolioQuery.results)
      const routesList = [
        {
          route: '/blog',
          payload: blogQuery.results.map((result) => {
            return {
              title: PrismicDOM.RichText.asText(result.data.title),
              content: PrismicDOM.RichText.asHtml(result.data.body),
              slug: result.uid,
              url: '/blog/' + result.uid
            }
          })
        }
      ]
      blogQuery.results.map( result => {
        console.log('result = ', result);
        routesList.push({
          route: '/blog/' + result.uid,
          payload: {
            title: PrismicDOM.RichText.asText(result.data.title),
            content: PrismicDOM.RichText.asHtml(result.data.body),
            slug: result.uid,
            url: '/blog/' + result.uid
          }
        })
      })
      portfolioQuery.results.map( result => {
        console.log('case study: ', result)
        routesList.push({
          route: '/portfolio/' + result.uid,
          payload: {
            data: result.data
          }
        })
      })
      console.log('routesList = ', routesList)
      return routesList
    }
  },
  router: {
    linkActiveClass: 'active',
    linkExactActiveClass: 'exact-active'
  }
}
