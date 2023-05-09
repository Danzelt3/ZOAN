<!--
 * @Description: 我将以全盛状态出动
 * @Author: Danzel <Danzelt1999@gmail.com> 
 * @Date: 2023-05-09 14:02:40
 * @LastEditTime: 2023-05-09 16:58:01
 * @LastEditors: Danzel 
 * @Tel: 86-17520146706
-->
<template>

   <h1>中安-刘山</h1>
   <p>{{ $hello("World") }}</p>
   <p>{{ test("ZOAN Company") }}</p>

   <NuxtLink  to="/user/18?name=泰酷辣">Go</NuxtLink>

   <ul>
      <li v-for="id in [1,2,3]"><NuxtLink :to="{path:`/user/${id}`,query:{name:'泰酷辣'}}">user - {{ id }}</NuxtLink></li>
   </ul>

   <button @click="enableCustomLayout">Update</button>
</template>

<script setup lang="ts">
import {ref,reactive} from 'vue'
const route = useRoute()
function enableCustomLayout(){
   route.meta.layout = "custom"
}
const { $hello } = useNuxtApp()
function test(str:string){
   return `${str}`
}

definePageMeta({
   middleware:["auth"]
})
</script>

<style lang='less' scoped>

</style>