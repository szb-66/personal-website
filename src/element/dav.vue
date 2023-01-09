<template>
    <el-menu class="dav">
        <el-menu-item v-for="(item, index) in data" @click="toGo(item.page)" :index="String(index)">
            <span>{{ item.title }}</span>
        </el-menu-item>
    </el-menu>
</template>

<script setup>
const data = [
    {
        title: '前期准备',
        page: "0"
    },
    {
        title: '业务发展',
        page: "5"
    },
    {
        title: '体验升级',
        page: "33"
    },
    {
        title: '设计规范与品牌',
        page: "41"
    }
]

function toGo(page) {
    document.getElementById(page).scrollIntoView({ behavior: "smooth", block: "center" });
}

</script>

<style lang="less" scoped>
.dav {
    width: 200px;
    border-radius: 8px;
    border-right: 0;
    box-shadow: 0px 4px 12px rgba(22, 45, 80, 0.12);
}
</style>