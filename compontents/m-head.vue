<template>
    <div class="m m-head clearfix large-mdzz">

        <div class="container">
            <div class="m-h clearfix">
                <div class="m-h-r">

                </div>
                <div class="logo">
                    <h1><nuxt-link class="logo-01" to="/">
                            <img src="https://www.secuzoan.com/uploadfile/userimg/6a9b7cf33e6e350c966f3b0cfdd9d4ae.png"
                                alt="Shenzhen Zoan Gaoke Electronics Co.,Ltd">
                        </nuxt-link></h1>
                </div>
            </div>
        </div>
    </div>
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

.small-mdzz {
    position: fixed;
    top: 0px;
    left: 0;
    z-index: 99999999;
    width: 100%;
    border: none;
    transition: all 0.3s ease 0s;
    padding: 0 0px 0 0px;
    -webkit-box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.3);
    -moz-box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.3);
    -o-box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.3);
    box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.3);
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

@media (max-width: 992px) {
    .m-h {
        text-align: center;
        padding: 0px 0px 0px 0px;
    }

    .m-head .container {
        max-width: 100%;
        padding: 0 15px;
    }

    .m-head {
        padding: 0px 0 0px 0;
        position: static;
        background: #fff;
    }

    .logo {
        display: inline-block;
        margin: 10px 0 10px 0;
        z-index: 999;
        margin: 0;
        text-align: center;
        width: 100% !important;
    }

    .logo a {
        float: none;
        display: inline-block;
    }

    .logo a img {
        width: 200px;
    }
}


.container {
    width: 100%;
    max-width: 1500px;
    margin: 0 auto;
    position: relative;
    padding: 0 15px;
    height: 120px;

    .m-h {
        position: relative;
        text-align: center;
        transition: all 0.3s ease 0s;
        padding: 0px 0 0px 0;




        .logo {
            z-index: 99;
            // display: inline-block;
            // margin: 20px 0 20px 0px;
            width: auto;
            position: static;
            left: 0px;
            top: 0px;
            transition: all 0.3s ease 0s;
            text-align: center;
            float: left;

            h1 {
                width: 100%;
                display: inline-block;
                text-align: center;
            }

            a {
                display: inline-block;
                vertical-align: middle;
                transition: all 0.3s ease 0s;
                transition: all 0.3s ease 0s;
                float: none;

                img {
                    width: 100%;
                    height: auto;
                    display: inline-block;
                    max-width: 237px;
                    transition: all 0.3s ease 0s;
                }
            }

            a.logo-01 {
                display: inline-block;
            }
        }
    }

}
</style>