/*
 * @Description: 我将以全盛状态出动
 * @Author: Danzel <Danzelt1999@gmail.com> 
 * @Date: 2023-05-09 16:37:32
 * @LastEditTime: 2023-05-09 16:37:37
 * @LastEditors: Danzel 
 * @Tel: 86-17520146706
 */
export default defineNuxtPlugin(()=> {
    return {
        provide:{
            hello:(msg:string) => `Hello ${msg}`
        }
    }
})