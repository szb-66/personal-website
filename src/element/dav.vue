<template>
    <div class="dav">
        <div v-for="(item, index) in data" @click="toGo(item.page,index)" :class="titleStyle" :key="index">
            <span>{{ item.title }}</span>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';
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

// 点击移动到对应的元素
let titleStyle = ref("title")

function toGo(page,index) {
    document.getElementById(page).scrollIntoView({ behavior: "smooth", block: "center" });
}

// 检测到滚动返回当前位置对应的目录
let i = 0
function getIndex(index){
    return i = String(index)
}

document.addEventListener('scroll', function () {
    // getTitleState()
})

// 获取当前标题的状态
function getTitleState (){
    // 获取当前位置
    const nowPosition = document.documentElement.scrollTop
    // 循环获得每个目录的位置
    for (let i = 0; i < data.length; i++) {
        let minPosition = document.getElementById(data[i].page).offsetTop
        // 判断当前位置是否在目录范围
        if ((nowPosition-minPosition)>264) {
            // 是则返回目录的i
            console.log('id:' + i + '对比成功');
            return i
        } else {
            console.log('id:' + i + '对比失败');
        }
    }
}

</script>

<style lang="less" scoped>
.dav {
    width: 200px;
    border-radius: 8px;
    border-right: 0;
    box-shadow: 0px 4px 12px rgba(22, 45, 80, 0.12);
    background-color: #fff;
}
.title{
    height: 56px;
    line-height: 56px;
    font-size: 14px;
    padding: 0 20px;
    &:hover{
        background-color: #ecf5ff;
        cursor:pointer;
    }
}
.active{
    color: #409eff;
}
</style>