import { blogDataMock, caseStudyMock } from './dataMocks'
import paths from './paths'
const Prismic = require('prismic-javascript')
const PrismicDOM = require('prismic-dom')
require('dotenv').config()

const isDevProcess = process.env.NODE_ENV === 'development';

module.exports = {
  target: 'static',
  /*
  ** Headers of the page
  */
  head: {
    title: 'Dan Hiester • A Product Designer who leverages technical skills and strategic thinking to elevate design.',
    titleTemplate: '%s • Dan Hiester • A Product Designer who leverages technical skills and strategic thinking to elevate design.',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Product Design, UX Design, and Design Consulting' },
      { name: 'application-name', content: 'Dan Hiester' },
//      { name: 'theme-color', content: '#197FA1' },
      { name: 'msapplication-navbutton-color', content: '#03a1d5'},
      { name: 'apple-mobile-web-app-status-bar-style', content: '#197FA1'},
      { property: 'og:locale', content: 'en_US' },
      { property: 'og:type', content: 'website' },
      { hid: 'og:url', property: 'og:url', content: 'https://dan.hiester.design/portfolio' },
      { property: 'og:site_name', content: 'Dan Hiester' },
      { hid: 'og:title', property: 'og:title', content: 'Dan Hiester' },
      { hid: 'og:description', property: 'og:description', content: 'Dan Hiester • A Product Designer who leverages technical skills and product strategy to elevate design.' },
      { hid: 'og:image', property: 'og:image', content: 'https://dan.hiester.design/img/fb-ogp-default.jpg' },
      { hid: 'twitter:card', name: 'twitter:card', content: 'summary' },
      { hid: 'twitter:image', name: 'twitter:image', content: 'https://dan.hiester.design/img/twitter-card-default.jpg' },
      { hid: 'twitter:image:alt', name: 'twiter:image:alt', content: 'Dan Hiester • A Product Designer who leverages technical skills and product strategy to elevate design.' },
      { hid: 'twitter:site', name: 'twitter:site', content: '@majtom2grndctrl' },
      { hid: 'twitter:creator', name: 'twitter:creator', content: '@majtom2grndctrl' },
    ],
    link: [
      { rel: 'apple-touch-icon', sizes: '180x180', href: '/apple-touch-icon.png?v=Lbza6x4knM' },
      { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/favicon-32x32.png?v=Lbza6x4knM' },
      { rel: 'icon', type: 'image/png', sizes: '16x16', href: '/favicon-16x16.png?v=Lbza6x4knM' },
      { rel: 'manifest', href:'/site.webmanifest?v=YAmWaLEo7o' },
      { rel: 'mask-icon', href:'/safari-pinned-tab.svg?v=Lbza6x4knM', color: '#5bbad5' },
      { rel: 'shortcut icon', href:'/favicon.ico?v=Lbza6x4knM', color: '#5bbad5' },
      {
        rel: 'stylesheet',
        href: 'https://use.typekit.net/hpz2tnd.css'
      }
    ]
  },
  /*
  ** Customize the progress bar color
  */
  loading: { color: 'rgba(3, 161, 213, .3)' },
  modules: ['@nuxtjs/gtm'],
  publicRuntimeConfig: {
    gtm: { id: process.env.NUXT_ENV_GTM_ID },
  },
  buildModules: [
    '@nuxt/typescript-build',
  ],
  plugins: [],
  /*
  ** Build configuration
  */
  build: {
    babel: {
      plugins: [
        ["@babel/plugin-proposal-decorators", { legacy: true }],
        ["@babel/plugin-proposal-class-properties", { loose: true }]
      ]
    },
    postcss: {
      postcssOptions: {
        plugins: {
          '@csstools/postcss-global-data': {
            files: [
              './assets/vars.pcss'
            ]
          },
          'postcss-custom-media': {},
          'postcss-nesting': {},
        }
      }
    }
  },
  css: ['~/assets/html.css', '~/assets/vars.pcss'],
  generate: {
    routes: async () => {
      const apiUrl = 'https://distantly-yours-blog.cdn.prismic.io/api/v2'
      const blogQuery = await Prismic.getApi(apiUrl)
        .then( api =>  {
          return api.query(
            Prismic.Predicates.at('document.type', 'blog_post'), { orderings: '[my.blog_post.date desc]' }
          )
        })
        .catch(err => {
          console.warn('Heeeyyyy, something happened to the network.', err)
          isDevProcess && console.log('Using datamocks for blog posts: ', blogDataMock)
          // If we’re in dev mode, return a data mock. Otherwise, return null and force an error.
          return isDevProcess ? { blogDataMock } : { results: [] };
        });
      console.log('blogQuery = ', blogQuery)
      const portfolioQuery = await Prismic.getApi(apiUrl)
        .then( api => { 
          return api.query(
            Prismic.Predicates.at('document.type', 'case_study'), null 
          )
        }).catch(err => {
          console.warn('Heeeyyyy, something happened to the network.', err)
          isDevProcess && console.log('Using datamocks for case study: ', caseStudyMock);
          // If we’re in dev mode, return a data mock. Otherwise, return null and force an error.
          return isDevProcess ? { caseStudyMock } : { results: [] };
        });
      console.log('portfolioQuery = ', portfolioQuery)
      const routesList = [
        {
          route: paths.blog,
          payload: blogQuery.results.map((result) => {
            const { data } = result
            return {
              title: PrismicDOM.RichText.asText(data.title),
//              content: PrismicDOM.RichText.asHtml(data.body),
              preview: PrismicDOM.RichText.asHtml(data.preview),
              slug: result.uid,
              url: paths.blog_item(result.uid),
              cta: data.cta,
              indexBgColor: data.index_page_background_color,
            }
          })
        },
        /*
        {
          route: paths.portfolio_all,
          payload: portfolioQuery.results.map(result => {
            return {
              data: result.data,
              slug: result.uid,
              url: paths.portfolio_all_item(result.uid)
            }
          })
        },
        {
          route: '/work',
          redirect: paths.portfolio_all
        }
        */
      ]
      blogQuery.results.map( result => {
        console.log('blog post: ', result)
        const { data } = result
        routesList.push({
          route: paths.blog_item(result.uid),
          payload: {
            title: PrismicDOM.RichText.asText(data.title),
            subhead: PrismicDOM.RichText.asText(data.subhead),
            preview: PrismicDOM.RichText.asText(data.preview),
            heroImage: data.hero_image,
            heroBackground: data.hero_background,
            prismicDocument: result,
            slug: result.uid,
            url: paths.blog_item(result.uid),
          }
        })
      })
      portfolioQuery.results.map( result => {
        console.log('case study: ', result)
        routesList.push({
          route: paths.portfolio_item(result.uid),
          payload: {
            data: result.data,
            slug: result.uid,
            document: result
          }
        })
        /*
        routesList.push({
          route: paths.portfolio_all_item(result.uid),
          payload: {
            data: result.data
          }
        })
        */
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
