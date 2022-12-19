<template>
    <div class="header">
        <div class="main">
            <!-- 左边 -->
            <div class="left">
                <img src="../assets/img/head.png" alt="" style=" width: 32px;">
                <router-link to="/home">首页</router-link>
                <router-link to="/about">关于我</router-link>
            </div>
            <!-- 右边 -->
            <div class="right">
                <img src="../assets/img/yejianmoshi.png" alt="" style=" height: 24px;">
                <img src="../assets/img/GitHub.png" alt="" style=" width: 28px;">
            </div>
        </div>
    </div>
</template>

<script setup>

</script>


<style lang="less" scoped>
.header {
    background-color: rgba(255, 255, 255, 1);
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
    }
    .left {
        display: flex;
        align-items: center;
        gap: 20px;
    }
    
    .right {
        display: flex;
        align-items: center;
        gap: 20px;
    }
}

</style>