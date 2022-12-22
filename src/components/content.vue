<template>
    <Menu></Menu>
    <div class="main">
        <div class="title-area">
            <div class="title">国美金融 7.0.0</div>
            <div class="time">2021.05 至 2021-08</div>
        </div>
        <hr style="margin: 40px 0;border-color: rgba(234, 234, 234, 1);opacity:0.2">
        <div class="demo-image__lazy">
            <el-image v-for="url in urls" :key="url" :src="url" lazy />
        </div>
    </div>
    <el-backtop :right="100" :bottom="100" />
</template>

<script setup>
import Menu from "../element/menu.vue"
import { useRoute } from 'vue-router';
// 获取路由实例
const route = useRoute();
// 路由传过来的文件夹名字和图片数量
const fileName = route.params.fileName
const imgNumber = route.params.imgNumber

const urls = []
let i = 1
while (i <= imgNumber) {
    urls.push(`../src/assets/img/content/${fileName}/${i}.png`)
    i++
}

const data = [
    {
        title: '融e多',
        version: '0 - 3.8.0',
        intro: '这里是一段关于项目的简要介绍这里是一段关于项目的简要介绍这里是一段关于项目的简要介绍',
        time: '2022-03 至 今日',
    },
    {
        title: '易薪',
        version: '0 - 1.3.7',
        intro: '这里是一段关于项目的简要介绍这里是一段关于项目的简要介绍这里是一段关于项目的简要介绍',
        time: '2022-06 至 今日',
    },
    {
        title: 'CRM客户管理系统',
        version: '1.0',
        intro: '这里是一段关于项目的简要介绍这里是一段关于项目的简要介绍这里是一段关于项目的简要介绍',
        time: '2022-04',
    },
    {
        title: '国美金融',
        version: '7.0.0',
        intro: '这里是一段关于项目的简要介绍这里是一段关于项目的简要介绍这里是一段关于项目的简要介绍',
        time: '2021.05 至 2021-08',
    },
    {
        title: '美务通店务管理系统',
        version: '2.0.0',
        intro: '这里是一段关于项目的简要介绍这里是一段关于项目的简要介绍这里是一段关于项目的简要介绍',
        time: '2019.08 至 2019.12',
    },
    {
        title: '其他项目',
        version: false,
        intro: false,
        time: false,
    },
    {
        title: '流年千秋',
        version: false,
        intro: '这里是一段关于项目的简要介绍这里是一段关于项目的简要介绍这里是一段关于项目的简要介绍',
        time: '2021-06',
    },
    {
        title: '财鲸',
        version: false,
        intro: '这里是一段关于项目的简要介绍这里是一段关于项目的简要介绍这里是一段关于项目的简要介绍',
        time: '2022-01',
    },
]
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
      min-height: 200px;
      margin-bottom: 10px;
    }
    .demo-image__lazy .el-image:last-child {
      margin-bottom: 0;
    }
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