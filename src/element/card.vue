<template>
    <div class="card" :style="style">
        <!-- 近期项目标签 -->
        <div class="tab" v-if="props.data.recently_project">
            近期项目
        </div>
        <!-- 底部内容区域 -->
        <div class="bottom">
            <!-- 标题区域 -->
            <div class="title-area">
                <!-- 左边区域 -->
                <div class="left">
                    <!-- 标题 -->
                    <div class="title">{{ data.title }}</div>
                    <!-- 版本 -->
                    <div class="version">{{ data.version }}</div>
                </div>
                <!-- 进入箭头（悬浮显示） -->
                <div class="right" style="width: 28px;"><img src="../assets/img/card-right.png" style="width:100% ;"></div>
            </div>
            <!-- 简介区域 -->
            <div class="intro">{{ data.intro }}</div>
            <!-- 时间 -->
            <div class="time" v-if="false">{{ data.time }}</div>
        </div>
    </div>
</template>

<script setup>
import { reactive } from 'vue';

const props = defineProps(['data'])
// console.log(props.data)
const style = {
    backgroundImage: `url(${props.data.path})`,
    backgroundSize:'cover'
}
</script>

<style lang="less" scoped>
.card {
    height: 370px;
    background-color: blue;
    flex-grow: 1;
    border-radius: 16px;
    position: relative;


    .tab {
        margin: 20px;

        /* 自动布局 */
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: flex-start;


        width: 88px;
        height: 30px;
        font-size: 14px;
        line-height: 30px;

        background: rgba(255, 255, 255, 0.2);
        border: 1px solid #000;
        border-radius: 18px;

    }

    .bottom {
        /* 自动布局 */
        display: flex;
        flex-direction: column;
        // align-items: flex-start;
        padding: 20px;
        gap: 16px;

        position: absolute;
        bottom: 0%;

        background: rgba(0, 0, 0, 0.6);
        border-radius: 0px 0px 24px 24px;

        width: 100%;
        padding: 20px;

        color: #fff;

        .title-area {
            display: flex;
            justify-content: space-between;
            align-items: center;
            width: 100%;

            .left {
                display: flex;
                gap: 12px;
                .title{
                    font-size: 24px;
                    line-height: 28px;
                }

                .version {
                    border: 1px solid #fff;
                    border-radius: 18px;
                    height: 28px;
                    padding: 0 12px;
                    font-size: 14px;
                    line-height: 28px;
                }
            }
        }
        // .intro{}
        // .time{}
    }
}
</style>