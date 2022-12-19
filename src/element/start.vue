<template>
    <!-- 开屏页 -->
    <div class="start">
        <div class="main">
            <img src="../assets/img/start-szb.png" alt="" class="szb">
        </div>
        <a class="down" @click="goTo"  scroll-behavior>
            <img src="../assets/img/start-down.png" alt="" style="width: 24px;">
        </a>
    </div>
</template>

<script setup>
// 点击到达页面特定位置
function goTo() {
    console.log(1);
    document.body.scrollTop = document.documentElement.clientHeight;
    document.documentElement.scrollTop = document.documentElement.clientHeight + 1
}
</script>

<style lang="less" scoped>
.start {
    background-image: url(../assets/img/start-bg.png);
    width: 100vw;
    height: 100vh;
    background-size: 100% 100%;

    display: flex;
    justify-content: center;
    align-items: center;

    .main {
        text-align: center;
        position: relative;
        // height: 100%;
        display: flex;
    }

    .down {
        width: 50px;
        height: 50px;
        position: absolute;
        right: 50%;
        margin-right: -12px;
        bottom: 10%;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .down:hover {
        cursor: pointer
    }
}

@media(min-width:0px) {
    .szb {
        width: 100%;
    }
}

@media(min-width:1280px) {
    .szb {
        width: 1200px;
    }
}
</style>