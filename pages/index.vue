<template>
    <div class="m m-head clearfix large-mdzz">

        <div class="container">
            <div class="m-h clearfix">
                <div class="m-h-r">
                    
                </div>
            </div>
        </div>
    </div>
    <h1>ZOAN</h1>
    
    <NuxtLink
        :to="{ path: '/img', query: { title: 'ZA5000 AI智能探测安检门-深圳中安高科电子有限公司', name: 'ZA5000 AI智能探测安检门', description: 'ZA5000 AI智能探测安检门,测温门检测系列', keyword: 'ZA5000 AI智能探测安检门,深圳中安高科电子有限公司' } }">
        ZA5000</NuxtLink>
       
</template>

<script setup lang="ts">

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
.m {
    width: 100%;
    display: inline-block;
    overflow: hidden;
    background: #fff;
    position: relative;
    z-index: 2;
    background-color: skyblue !important;
    height: 120px;
}

.m-head {
    transition: all 0.3s ease 0s;
    z-index: 999999;
    display: block;
    overflow: visible;
    position: static;
    background: #fff;
    padding: 0px 0 0px 0;
    border-bottom: 0px solid rgba(0, 0, 0, .15);
    left: 0px;
    top: 0px;
}

.clearfix:before,
.container:before {
    display: table;
    content: " ";
}

@media (max-width: 1200px) {
    .m-head .container {
        max-width: 100%;
        padding: 0 20px;
    }
}

@media (max-width: 1300px) {
    .m-head .container {
        max-width: 100%;
        padding: 0 30px;
    }
}

@media (max-width: 1400px) {
    .m-head .container {
        max-width: 100%;
        padding: 0 40px;
    }
}

@media (max-width: 1500px) {
    .m-head .container {
        max-width: 100%;
        padding: 0 50px;
    }
}

.container {
    width: 100%;
    max-width: 1500px;
    margin: 0 auto;
    position: relative;
    padding: 0 15px;

    .m-h {
        position: relative;
        text-align: center;
        transition: all 0.3s ease 0s;
        padding: 0px 0 0px 0;

        
    }

}
</style>