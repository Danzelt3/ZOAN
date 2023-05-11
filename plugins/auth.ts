// /*
//  * @Description: 我将以全盛状态出动
//  * @Author: Danzel <Danzelt1999@gmail.com> 
//  * @Date: 2023-05-09 17:00:23
//  * @LastEditTime: 2023-05-09 17:00:28
//  * @LastEditors: Danzel 
//  * @FilePath: \starter-3\plugins\auth.ts
//  * @Tel: 86-17520146706
//  */


export default defineNuxtPlugin(() => {
    addRouteMiddleware('auth', () => {
      console.log('this global middleware was added in a plugin and will be run on every route change')
    }, { global: true })
    addRouteMiddleware('named-test', () => {
      console.log('this named middleware was added in a plugin and would override any existing middleware of the same name')
    })
  })