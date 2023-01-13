<template>
    <Menu></Menu>
    <div class="main">
        <!-- 标题区域 -->
        <div class="title-area">
            <div class="title">{{ item.title }}</div>
            <div class="time">{{ item.time }}</div>
        </div>
        <!-- 分割线 -->
        <hr style="margin: 40px 0;border-color: rgba(234, 234, 234, 1);opacity:0.2">
        <!-- 内容区域 -->
        <div class="demo-image__lazy">
            <!-- 导航 -->
            <Nav class="davHidden" :nav="item.nav"></Nav>
            <!-- 循环图片 -->
            <el-image v-for="(url, index) in urls" :key="url" :src="url" :id="String(index)" class="el-image">
                <!-- 占位 -->
                <template #placeholder>
                    <div class="image-slot">Loading<span class="dot">...</span></div>
                </template>
            </el-image>
            <!-- 结束图片 -->
            <img src="../assets/img/content_end.png" alt="内容图片加载失败" style="width: 100%;">
        </div>
    </div>
    <!-- 返回顶部 -->
    <el-backtop :right="100" :bottom="100" />
    <Footer></Footer>
</template>

<script setup>
// import Menu from "../element/menu.vue"
import { useRoute } from 'vue-router';
import { defineAsyncComponent, inject, ref } from 'vue'
import { uiDesign } from '../data/uiDesign.json'
import { threeD } from '../data/threeD.json'
import 'element-plus/theme-chalk/display.css'

const Menu = defineAsyncComponent(() =>
    import('../element/menu.vue')
)
const Nav = defineAsyncComponent(() =>
    import('../element/nav.vue')
)
const Footer = defineAsyncComponent(() =>
    import('../element/footer.vue')
)

// 获取路由实例
const route = useRoute();

// 通过路由传递的id，匹配数据中的对应对象
let item = []
const threeDRule = /^3d/
const uiRule = /^[0-9]*$/
if (threeDRule.test(route.params.id)) {
    item = threeD.find(v => v.id == route.params.id)
}
else if (uiRule.test(route.params.id)) {
    item = uiDesign.find(v => v.id == route.params.id)
}
// 图片地址
const urls = []
let i = 1
while (i <= item.imgNumber) {
    urls.push(`../src/assets/img/content/${item.fileName}/${i}.png`)
    i++
}

// 修改页面名称
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

    .demo-image__lazy {
        .davHidden {
            position: fixed;
            top: 200px;
            left: 40px;
        }

        .image-slot {
            display: flex;
            justify-content: center;
            align-items: center;
            width: 100%;
            height: 100%;
            background: var(--el-fill-color-light);
            color: var(--el-text-color-secondary);
            font-size: 14px;
        }

        .dot {
            animation: dot 2s infinite steps(3, start);
            overflow: hidden;
        }
    }



}




@media(min-width:0px) {
    .main {
        flex-grow: 1;
    }

    .davHidden {
        display: none;
    }
}

@media(min-width:1000px) {
    .main {
        width: 1000px;
    }
}

@media(min-width:1500px) {
    .davHidden {
        display: block;
    }
}
</style>