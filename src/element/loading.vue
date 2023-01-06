<template>
    <div class="body">
        <div class="container">
            <div class="sun">
                <div class="sun-body">
                    <div class="line" style="--i: 1"></div>
                    <div class="line" style="--i: 2"></div>
                    <div class="line" style="--i: 3"></div>
                    <div class="line" style="--i: 4"></div>
                    <div class="line" style="--i: 5"></div>
                    <div class="line" style="--i: 6"></div>
                    <div class="line" style="--i: 7"></div>
                    <div class="line" style="--i: 8"></div>
                </div>
                <div class="eye"></div>
            </div>
            <div class="horizon"></div>
        </div>
    </div>
</template>

<script setup>

</script>

<style lang="less" scoped>
/* 定义变量 */
// @light-color: #f4c042;
// @dark-color: #7a5600;
@light-color: #E5F1FA;
@dark-color: #326F9D;

.body {
    /* 弹性布局 让页面元素垂直+水平居中 */
    display: flex;
    justify-content: center;
    align-items: center;
    /* 让页面占浏览器可视区域的高度 */
    height: 100vh;
    font-family: HarmonyOS;
    background-color: @light-color;
}

.container {
    /* 相对定位 */
    position: relative;
    width: 300px;
    height: 300px;
}

/* 太阳 start */
.container .sun {
    /* 绝对定位 */
    position: absolute;
    top: 135px;
    /* 这里是自动计算 也可以自己手动计算出82px */
    left: calc(50% - 136px / 2);
    width: 136px;
    height: 136px;
    animation: sun 2.7s linear infinite;
}

/* 圆圈 start */
.container .sun .sun-body {
    position: absolute;
    top: 18px;
    left: 18px;
    width: 100px;
    height: 100px;
    border-radius: 50%;
    border: 6px solid @dark-color;
    animation: sun-body 2.7s linear infinite;
}

/* 圆圈 end */
/* 外层光线 start */
.container .sun .sun-body .line {
    position: absolute;
    top: -24px;
    left: calc(50% - 3px);
    width: 6px;
    height: 12px;
    border-radius: 6px;
    background-color: @dark-color;
    /* 我们写了8个类名为line的元素 并设置变量--i 可以通过自定计算旋转角度 */
    transform: rotate(calc(var(--i) * 45deg));
    /* 在设置旋转角度为圆圈中心 */
    transform-origin: center 68px;
}

/* 外层光线 end */
/* 眼睛 start */
.container .sun .eye {
    position: absolute;
    top: 60px;
    left: 40px;
    width: 6px;
    height: 6px;
    border-radius: 50%;
    background-color: @dark-color;
    /* 用阴影复制一对眼睛 */
    box-shadow: 16px 0 @dark-color;
    animation: eye 2.7s linear infinite;
}

/* 眼睛 end */
/* 太阳 end */

/* 地平线 start */
.container .horizon {
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 115px;
    background-color: @light-color;
}

.container .horizon::before {
    content: "";
    position: absolute;
    left: 5%;
    width: 90%;
    height: 6px;
    border-radius: 6px;
    background-color: @dark-color;
}

/* 地平线 end */
/* loading 字样 start */
.container .horizon::after {
    content: "Loading...";
    position: absolute;
    top: 30px;
    width: 100%;
    text-align: center;
    font-size: 25px;
    color: @dark-color;
    animation: loading 2.7s linear infinite;
}

/* loading 字样 end*/

@keyframes sun {
    10% {
        transform: translate(0);
    }

    40%,
    70% {
        transform: translateY(-40px);
    }
}

@keyframes sun-body {
    40% {
        transform: rotate(0);
    }

    50%,
    100% {
        transform: rotate(45deg);
    }
}

@keyframes eye {

    50%,
    60% {
        transform: scale(1);
    }

    55% {
        transform: scaleY(0.1);
    }

    70%,
    100% {
        transform: translateX(34px);
    }
}

@keyframes loading {
    40% {
        opacity: 1;
    }

    60% {
        opacity: 0;
    }
}
</style>