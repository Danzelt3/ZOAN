<template>
    
    <m-head></m-head>
    <NuxtLink
        :to="{ path: '/img', query: { title: 'ZA5000 AI智能探测安检门-深圳中安高科电子有限公司', name: 'ZA5000 AI智能探测安检门', description: 'ZA5000 AI智能探测安检门,测温门检测系列', keyword: 'ZA5000 AI智能探测安检门,深圳中安高科电子有限公司' } }">
        ZA5000</NuxtLink>
       
</template>

<script setup lang="ts">
import mHead from  '../compontents/m-head.vue'
// import { useI18n } from 'vue-i18n';
// const switchLocalePath = useSwitchLocalePath()
// const { localePath} = useI18n()
const cur = ref(true)
const cao = ref(true)

const selectLanguage = () => {
    cur.value = !cur.value
    cao.value = !cao.value


}
const currentLanguage = ref({
    imgSrc: 'https://www.secuzoan.com/template/images/en.png',
    abbr: 'en',
    name: 'English'
})
const setCurrentLanguage: any = (imgSrc: any, abbr: any, name: any) => {
    currentLanguage.value.imgSrc = imgSrc
    currentLanguage.value.abbr = abbr
    currentLanguage.value.name = name
}
</script >

<style lang="scss">
a {
    
}
</style>