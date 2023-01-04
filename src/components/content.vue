<template>
    <Menu></Menu>
    <div class="main">
        <div class="title-area">
            <div class="title">{{ item.title }}</div>
            <div class="time">{{ item.time }}</div>
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
import { data } from './data.json'
const Menu = defineAsyncComponent(() =>
    import('../element/menu.vue')
)
// 获取路由实例
const route = useRoute();

// 通过路由传递的id，匹配数据中的对应对象
const item = data.find(v => v.id == route.params.id)

const urls = []
let i = 1

while (i <= item.imgNumber) {
    urls.push(`../src/assets/img/content/${item.fileName}/${i}.png`)
    i++
}
document.title = item.title

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