<!--
 * @Description: 我将以全盛状态
 * @Author: Danzel <Danzelt1999@gmail.com> 
 * @Date: 2023-05-09 14:27:33
 * @LastEditTime: 2023-05-10 10:00:58
 * @LastEditors: Danzel 
 * @FilePath: \starter-3\pages\img.vue
 * @Tel: 86-17520146706
-->
<template>
    <!-- <Title>ZA5000 AI智能探测安检门-深圳中安高科电子有限公司</Title> -->
    <Title>{{ $route.query.title }}</Title>
    <!-- <h1>ZA5000 AI智能探测安检门</h1> -->
    <h1>{{ $route.query.name }}</h1>
    <div>
        <img src="~/assets/za5000.png" alt="ZA5000 AI手机智能安检门">
    </div>
</template>

<script setup lang="ts">
const route = useRoute()
let des:any = route.query.description
const key:any = route.query.keyword
const description = ref('ZA5000 AI智能探测安检门,测温门检测系列')
const keyword = ref('ZA5000 AI智能探测安检门,深圳中安高科电子有限公司')
useHead({
    title: 'ZA5000 AI智能探测安检门-深圳中安高科电子有限公司',
    titleTemplate: (titleChunk) => {
        return titleChunk ? `${titleChunk}` : 'Site Title'
    },
    meta: [
        { name: 'description', content: des },
        { name: 'keyword', content: key },

    ],
    bodyAttrs: {
        class: 'test'
    },
    script: [{ innerHTML: 'console.log(\'Hello world\')' }]
})
</script>

<style>
.test {
    /* background-color: red; */
    
}
h1 {
    color: #000;
}
</style>