<!--
 * @Description: 我将以全盛状态出动
 * @Author: Danzel <Danzelt1999@gmail.com> 
 * @Date: 2023-05-09 14:01:31
 * @LastEditTime: 2023-05-09 16:32:21
 * @LastEditors: Danzel 
 * @Tel: 86-17520146706
-->
<template>

   <h1>辣个男人-谢冠廷</h1>
   {{$route.params}}<br>
   {{$route.params.id}} <br>
   {{$route.query.name}}<br>

   <button @click="enableCustomLayout">Update</button>

</template>

<script setup>
import {ref,reactive} from 'vue'
const route = useRoute()
console.log(route.params, route.query);

definePageMeta({
   layout:false
})

function enableCustomLayout() {
   // route.meta.layout
   setPageLayout('custom')
}
</script>

<style lang='less' scoped>

</style>