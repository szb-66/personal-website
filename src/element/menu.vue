<template>
    <div class="header" :style="bgColor">
        <div class="main">
            <!-- 左边 -->
            <div class="left">
                <img src="../assets/img/head.png" style=" width: 32px;">
                <router-link to="/home" class="font">首页</router-link>
                <router-link to="/about" class="font">关于我</router-link>
            </div>
            <!-- 右边 -->
            <div class="right">
                <img src="../assets/img/yejianmoshi.png" style=" height: 24px;" @click="open" class="kaiGuan">
                <a href="https://github.com/szb-66/personal-website" target="_blank" class="Github"></a>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref, reactive } from "vue"
import { ElMessage } from 'element-plus'
import { useRoute } from 'vue-router';
const route = useRoute();
// console.log(route.name)


// 控制滚动变换透明度的功能
let bgColor = reactive({ backgroundColor: `rgba(255, 255, 255, 0)`, borderBottom: `1px solid rgba(234, 234, 234, 1)` })
if (route.name == 'home') {
    // 启动时先运行一次
    getTM()
    // 根据事件监听再进行运行
    window.addEventListener('scroll', getTM)
} else {
    bgColor.backgroundColor = `rgba(255, 255, 255, 1)`
}

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

// 黑夜模式提示弹窗
const open = () => {
    // ElMessage('功能还没有做')
    ElMessage({
        message: '功能还没有做',
        type: 'info',
        duration: 2000,
        // Message 距离窗口顶部的偏移量
        offset: 80,
    })
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

        .left {
            display: flex;
            align-items: center;
            gap: 28px;

            .font:hover {
                // color: rgba(22, 87, 255, 1);
                font-weight: 600;
            }
        }

        .right {
            display: flex;
            align-items: center;
            gap: 20px;

            .kaiGuan:hover {
                cursor: pointer;
            }

            .Github {
                // display: block;
                width: 28px;
                height: 28px;
                background-image: url('../assets/img/GitHub.png');
                background-size: 28px 28px;
            }
        }
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