/*
 * @Description: 我将以全盛状态出动
 * @Author: Danzel <Danzelt1999@gmail.com> 
 * @Date: 2023-05-09 16:56:03
 * @LastEditTime: 2023-05-09 17:01:33
 * @LastEditors: Danzel 
 * @Tel: 86-17520146706
 */

export default defineNuxtRouteMiddleware((to,from) => {
    console.log("auth");

    // skip middleware on server
    if (process.server) return
    // skip middleware on client side entirely
    if (process.client) return
    // or only skip middleware on initial client load
    const nuxtApp = useNuxtApp()
    if (process.client && nuxtApp.isHydrating && nuxtApp.payload.serverRendered) return
  
    
})