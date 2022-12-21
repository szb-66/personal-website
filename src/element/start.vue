<template>
    <!-- 开屏页 -->
    <div class="start">
        <div class="main">
            <img src="../assets/img/start-szb.png" class="szb">
        </div>
        <a class="down" @click="goTo">
            <img src="../assets/img/start-down.png" class="img" style="width: 24px;">
        </a>
    </div>
</template>

<script setup>
// 点击到达页面特定位置
function goTo() {
    document.getElementById("show").scrollIntoView({ behavior: 'smooth' });
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

        .img {
            position: absolute;
            // 给标签设置 move 动画，持续时间为两秒，线性变化并且无限循环
            animation: move 0.8s linear infinite;

            @keyframes move {
                0% {
                    top: 0px
                }

                50% {
                    top: 10px
                }

                100% {
                    top: 0
                }
            }
        }
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