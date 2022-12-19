<template>
    <div class="header" :style="bgColor">
        <div class="main">
            <!-- 左边 -->
            <div class="left">
                <img src="../assets/img/head.png" alt="" style=" width: 32px;">
                <router-link to="/home">首页</router-link>
                <router-link to="/about">关于我</router-link>
            </div>
            <!-- 右边 -->
            <div class="right">
                <img src="../assets/img/yejianmoshi.png" alt="" style=" height: 24px;">
                <img src="../assets/img/GitHub.png" alt="" style=" width: 28px;">
            </div>
        </div>
    </div>
    <div class="body">
        <Start></Start>
        <div class="main">
            <h2 class="title">界面设计</h2>
            <div class="card-content">
                <div class="card-row">
                    <Card :data="data[0]"></Card>
                    <Card :data="data[1]"></Card>
                    <Card :data="data[2]"></Card>
                </div>
                <div class="card-row">
                    <Card :data="data[3]"></Card>
                    <Card :data="data[4]"></Card>
                    <Card :data="data[5]"></Card>
                </div>
            </div>

            <h2 class="title">视觉插画</h2>
            <div class="card-content">
                <Card :data="data[0]"></Card>

            </div>

            <h2 class="title">3D设计</h2>
            <div class="card-content" style="margin-bottom: 0;">
                <div class="card-row">
                    <Card :data="data[6]"></Card>
                    <Card :data="data[7]"></Card>
                </div>
            </div>
        </div>
    </div>
    <Footer></Footer>
</template>





<script setup>
import { ref, reactive } from "vue"
import Footer from "../element/footer.vue"
import Start from "../element/start.vue"
import Card from "../element/card.vue"

let data1='1'

// 首页卡片内容的数据
const data = [
    {
        type:'UI',
        title:'融e多',
        version:'0 - 3.8.0',
        intro:'这里是一段关于项目的简要介绍这里是一段关于项目的简要介绍这里是一段关于项目的简要介绍',
        time:'2022-03 至 今日',
        recently_project:true,
        path:'../src/assets/img/cover/rongEDuo.png'
    },
    {
        type:'UI',
        title:'易薪',
        version:'0 - 1.3.7',
        intro:'这里是一段关于项目的简要介绍这里是一段关于项目的简要介绍这里是一段关于项目的简要介绍',
        time:'2022-06 至 今日',
        recently_project:true,
        path:'../src/assets/img/cover/yiXin.png'
    },
    {
        type:'UI',
        title:'CRM客户管理系统',
        version:'1.0',
        intro:'这里是一段关于项目的简要介绍这里是一段关于项目的简要介绍这里是一段关于项目的简要介绍',
        time:'2022-04',
        recently_project:true,
        path:'../src/assets/img/cover/CRM.png'
    },
    {
        type:'UI',
        title:'国美金融',
        version:'7.0.0',
        intro:'这里是一段关于项目的简要介绍这里是一段关于项目的简要介绍这里是一段关于项目的简要介绍',
        time:'2021.05 至 2021-08',
        recently_project:false,
        path:'../src/assets/img/cover/guoMeiJinRong.png'
    },
    {
        type:'UI',
        title:'美务通店务管理系统',
        version:'2.0.0',
        intro:'这里是一段关于项目的简要介绍这里是一段关于项目的简要介绍这里是一段关于项目的简要介绍',
        time:'2019.08 至 2019.12',
        recently_project:false,
        path:'../src/assets/img/cover/meiWuTong.png'
    },
    {
        type:'UI',
        title:'其他项目',
        version:false,
        intro:false,
        time:false,
        recently_project:false,
        path:'../src/assets/img/cover/meiWuTong.png'
    },
    {
        type:'3D',
        title:'流年千秋',
        version:false,
        intro:'这里是一段关于项目的简要介绍这里是一段关于项目的简要介绍这里是一段关于项目的简要介绍',
        time:'2021-06',
        recently_project:false,
        path:'../src/assets/img/cover/meiWuTong.png'
    },
    {
        type:'3D',
        title:'财鲸',
        version:false,
        intro:'这里是一段关于项目的简要介绍这里是一段关于项目的简要介绍这里是一段关于项目的简要介绍',
        time:'2022-01',
        recently_project:false,
        path:'../src/assets/img/cover/meiWuTong.png'
    },
]


// 控制滚动变换透明度的功能
let bgColor = reactive({ backgroundColor: `rgba(255, 255, 255, 0)`, borderBottom: `1px solid rgba(234, 234, 234, 1)` })
// 启动时先运行一次
getTM()
// 根据事件监听再进行运行
window.addEventListener('scroll', getTM)
// 声明要要运行的函数
function getTM() {
    // 视口高度
    let h = ref(document.documentElement.clientHeight)
    // 滚动距离
    let gun = ref(document.documentElement.scrollTop)
    // 滚动距离大于屏幕高度，背景变白色
    if (gun.value > h.value) {
        bgColor.backgroundColor = `rgba(255, 255, 255, 1)`
        bgColor.borderBottom = `1px solid rgba(234, 234, 234, 1)`

    }
    // 滚动距离小于屏幕高度，背景变透明
    else if (gun.value < h.value) {
        let transparence = gun.value / h.value
        bgColor.backgroundColor = `rgba(255, 255, 255, ${transparence})`
        bgColor.borderBottom = `rgba(234, 234, 234, ${transparence})`

    }
}




</script>


<style lang="less" scoped>
.header {
    // background-color: rgba(255, 255, 255, 1);
    // border-bottom: 1px solid rgba(234, 234, 234, 1);
    width: 100%;
    position: fixed;
    z-index: 2;

    .main {
        display: flex;
        justify-content: space-between;
        padding: 0 30px;
        line-height: 60px;
        margin: 0 auto;
    }

    .left {
        display: flex;
        align-items: center;
        gap: 20px;
    }

    .right {
        display: flex;
        align-items: center;
        gap: 20px;
    }
}

.main {
    margin: 0 auto;
    padding: 100px 30px;
}

.card-content {
    display: flex;
    flex-direction: column;
    gap: 28px;
    margin-bottom: 80px;

    .card-row {
        display: flex;
        gap: 28px;

    }

    /*     .card {
        height: 370px;
        background-color: aquamarine;
        flex-grow: 1;
        border-radius: 16px;
    } */
}




.title {
    margin-bottom: 40px;
}

@media(min-width:0px) {
    .main {
        flex-grow: 1;
    }
}

@media(min-width:1440px) {
    .main {
        width: 1440px;
    }
}
</style>