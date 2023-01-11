<template>
    <div class="dav">
        <div v-for="(item, index) in data" @click="scrollTo(item.page, index)" :class="className">
            <span>{{ item.title }}</span>
        </div>
    </div>
</template>

<script setup>
// 获取父组件传过来的目录数据
const props = defineProps(['nav'])
const data = props.nav

// 样式类名
let className = "davTitle"

// 点击滚动到对应位置
const scrollTo = (page, index) => {
    document.getElementById(page).scrollIntoView({ behavior: "smooth", block: "center" });
}

// 检测滚动高亮对应目录
// 当前的目录id
let x = 0
// 当前位置
let nowPosition = 0
// 标题位置数组
let titleLine = []
// 获取标题的元素距离顶部的位置
for (let i = 0; i < data.length; i++) {
    // 当前标题图片到父组件顶部的距离，减去80的顶部导航高度和一般的可视区域高度
    let position = document.getElementById(data[i].page).parentNode.offsetTop-80-document.documentElement.clientHeight/2
    titleLine.push(position)
}
// 检测滚动
document.addEventListener('scroll', addClass)
function addClass() {
    // 获取当前位置
    nowPosition = document.documentElement.scrollTop
    // 获取所在标题id，并添加样式
    for (let index = (titleLine.length-1); index >= 0; index--) {
        if (nowPosition > titleLine[index]) {
            x = index
            // 获取目录类名的列表
            let elements = document.getElementsByClassName(className)
            // 清除所有样式
            for (let index = 0; index < titleLine.length; index++) {
                elements.item(index).classList = className
            }
            // 添加样式
            elements.item(x).classList.add("active")
            break
        } else {
        }
    }
}
// 默认选中第一个标题,此时dom树还没有加载，读不到item，需要用计时器延后一下
setTimeout(() => {
    let elements = document.getElementsByClassName(className)
    elements.item(0).classList.add("active")
}, 0);

</script>

<style lang="less" scoped>
.dav {
    width: 200px;
    border-radius: 8px;
    border-right: 0;
    box-shadow: 0px 4px 12px rgba(22, 45, 80, 0.12);
    background-color: #fff;
}

.davTitle {
    height: 56px;
    line-height: 56px;
    font-size: 14px;
    padding: 0 20px;

    &:hover {
        background-color: #ecf5ff;
        cursor: pointer;
    }
}

.active {
    color: #409eff;
    font-weight: 700;
}
</style>