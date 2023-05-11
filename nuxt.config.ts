/*
 * @Description: 我将以全盛状态出动
 * @Author: Danzel <Danzelt1999@gmail.com> 
 * @Date: 2023-05-09 11:32:26
 * @LastEditTime: 2023-05-11 17:02:14
 * @LastEditors: Danzel 
 * @FilePath: \starter-3\nuxt.config.ts
 * @Tel: 86-17520146706
 */
// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  typescript:{
    strict:true
  },
  
  vite:{
    css:{
      preprocessorOptions:{
        scss:{
          additionalData:'@import "assets/styles/variable.scss";',
        }
      }
    }
  },
  app: {
    head: {
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
    },

  },
  css: [
    // Load a Node.js module directly (here it's a Sass file).
    // 'bulma',
    // CSS file in the project
    '@/assets/styles/style.css',
    // SCSS file in the project
    // '@/assets/css/main.scss'
  ],
  modules: [
    '@nuxtjs/i18n'

  ],
  
  // i18n: {
  //   locales: [
  //     {
  //       code: 'en',
  //       file: 'en-US.json',
  //     },
  //     { code: 'zh', file: 'zh-CN.json' },
  //   ],
  //   defaultLocale: 'tr',
  //   lazy: true,
  //   langDir: 'locales/',
  //   strategy: 'prefix_except_default',
  //   detectBrowserLanguage: {
  //     useCookie: true,
  //     cookieKey: 'i18n_redirected',
  //     redirectOn: 'root', // recommended
  //   },
  //   vueI18n: {
  //     legacy: false,
  //     locale: 'zh',
  //     fallbackLocale: 'zh',
  //     availableLocales: ['en','zh'],
  //   },
  // },

})





