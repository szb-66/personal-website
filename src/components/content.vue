<template>
    <Menu></Menu>
    <div class="main">
        <div class="title-area">
            <div class="title">{{ data[id].title }}</div>
            <div class="time">{{ data[id].time }}</div>
        </div>
        <hr style="margin: 40px 0;border-color: rgba(234, 234, 234, 1);opacity:0.2">
        <div class="demo-image__lazy">
            <el-image v-for="url in urls" :key="url" :src="url" lazy />
        </div>
    </div>
    <el-backtop :right="100" :bottom="100" />
</template>

<script setup>
// import Menu from "../element/menu.vue"
import { useRoute } from 'vue-router';
import { defineAsyncComponent, inject } from 'vue'
const Menu = defineAsyncComponent(() =>
    import('../element/menu.vue')
)
// 获取路由实例
const route = useRoute();

// 必须跟home里面的数据保持一致
const data = [
    {
        type: '#APP',
        id: 0,
        title: '融e多',
        version: '0 - 3.8.0',
        intro: '这里是一段关于项目的简要介绍这里是一段关于项目的简要介绍这里是一段关于项目的简要介绍',
        time: '2022-03 至 今日',
        recently_project: true,
        coverPath: '../src/assets/img/cover/rongEDuo.png',
        // 对应图片文件夹名称
        fileName: '1_guoMeiJinRong',
        imgNumber: 50,
    },
    {
        type: '#APP',
        id: 1,
        title: '易薪',
        version: '0 - 1.3.7',
        intro: '这里是一段关于项目的简要介绍这里是一段关于项目的简要介绍这里是一段关于项目的简要介绍',
        time: '2022-06 至 今日',
        recently_project: true,
        coverPath: '../src/assets/img/cover/yiXin.png',
        fileName: '1_guoMeiJinRong',
        imgNumber: 50,
    },
    {
        type: '#B端后台',
        id: 2,
        title: 'CRM客户管理系统',
        version: '1.0',
        intro: '这里是一段关于项目的简要介绍这里是一段关于项目的简要介绍这里是一段关于项目的简要介绍',
        time: '2022-04',
        recently_project: true,
        coverPath: '../src/assets/img/cover/CRM.png',
        fileName: '1_guoMeiJinRong',
        imgNumber: 50,
    },
    {
        type: '#APP',
        id: 3,
        title: '国美金融',
        version: '7.0.0',
        intro: '这里是一段关于项目的简要介绍这里是一段关于项目的简要介绍这里是一段关于项目的简要介绍',
        time: '2021.05 至 2021-08',
        recently_project: false,
        coverPath: '../src/assets/img/cover/guoMeiJinRong.png',
        fileName: '1_guoMeiJinRong',
        imgNumber: 50,
    },
    {
        type: '#B端店务管理',
        id: 4,
        title: '美务通店务管理系统',
        version: '2.0.0',
        intro: '这里是一段关于项目的简要介绍这里是一段关于项目的简要介绍这里是一段关于项目的简要介绍',
        time: '2019.08 至 2019.12',
        recently_project: false,
        coverPath: '../src/assets/img/cover/meiWuTong.png',
        fileName: '2_meiWuTong',
        imgNumber: 19,
    },
    {
        type: 'UI',
        id: 5,
        title: '其他项目',
        version: false,
        intro: false,
        time: false,
        recently_project: false,
        coverPath: '../src/assets/img/cover/CRM.png',
        fileName: 1,
        imgNumber: 50,
    },
    {
        type: '3D',
        id: 6,
        title: '流年千秋',
        version: false,
        intro: '这里是一段关于项目的简要介绍这里是一段关于项目的简要介绍这里是一段关于项目的简要介绍',
        time: '2021-06',
        recently_project: false,
        coverPath: '../src/assets/img/cover/CRM.png',
        fileName: 1,
        imgNumber: 50,
    },
    {
        type: '3D',
        id: 7,
        title: '财鲸',
        version: false,
        intro: '这里是一段关于项目的简要介绍这里是一段关于项目的简要介绍这里是一段关于项目的简要介绍',
        time: '2022-01',
        recently_project: false,
        coverPath: '../src/assets/img/cover/CRM.png',
        fileName: '1_guoMeiJinRong',
        imgNumber: 50,
    },
]

// 路由传过来的id
const id = route.params.id

const urls = []
let i = 1

while (i <= data[id].imgNumber) {
    urls.push(`../src/assets/img/content/${data[id].fileName}/${i}.png`)
    i++
}
document.title = data[id].title

</script>

<style lang="less" scoped>
.main {
    margin: 0 auto;
    padding: 100px 30px;

    .title {
        font-size: 32px;
        font-weight: 600;
    }

    .time {
        margin-top: 12px;
        color: #666;
    }

    .demo-image__lazy .el-image {
        display: block;
        min-height: 10px;
        margin-bottom: 10px;
    }

    .demo-image__lazy .el-image:last-child {
        margin-bottom: 0px;
    }
}


@media(min-width:0px) {
    .main {
        flex-grow: 1;
    }
}

@media(min-width:1000px) {
    .main {
        width: 1000px;
    }
}
</style>