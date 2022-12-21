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
</template>

<script setup>
import Menu from "../element/menu.vue"
import { useRoute } from 'vue-router';
// 获取路由实例
const route = useRoute();
const fileName = route.params.fileName
const imgNumber = route.params.imgNumber

const urls = []
let i = 1
while (i <= imgNumber) {
    urls.push(`../src/assets/img/content/${fileName}/${i}.png`)
    i++
}

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