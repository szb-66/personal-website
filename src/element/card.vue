<template>
    <!-- 卡片 -->
    <div class="card">
        <!-- 封面 -->
        <div class="cover"><img :src=data.path></div>
        <!-- 文本区域 -->
        <div class="text-area">
            <!-- 标题区域 -->
            <div class="title-area">
                <!-- 标题 -->
                <span class="title">{{ data.title }}</span>
                <!-- 版本 -->
                <span class="version">{{ data.version }}</span>
            </div>
            <!-- 标签区域 -->
            <div class="tab-area">
                <!-- 类型 -->
                <span class="type">{{ data.type }}</span>
                <!-- 时间 -->
                <span class="time">{{ data.time }}</span>
            </div>
            <!-- 简介 -->
            <div class="intro">{{ data.intro }}</div>
        </div>
    </div>
</template>

<script setup>
import { reactive } from 'vue';
const props = defineProps(['data'])
let data = props.data

</script>

<style lang="less" scoped>
.card {
    background-color: white;
    border-radius: 20px;
    padding: 20px;

    .cover {
        width: 100%;
        height: 240px;
        border-radius: 20px;
        overflow: hidden;

        img {
            width: 100%;
        }
    }

    .text-area {
        margin-top: 20px;
        .title-area {
            display: flex;
            gap:12px;
            .title {
                font-size: 24px;
                line-height: 24px;
                font-weight: 600;
                margin-bottom: 12px;
            }
            
            .version {
                display: inline-block;
                height: 24px;
                border: 1px solid #999999;
                border-radius: 18px;
                padding: 0 12px;

                font-size: 14px;
                line-height: 24px;
            }
        }
        .tab-area{
            font-size: 14px;
            color: rgba(102, 102, 102, 1);
            margin-bottom: 20px;
            .type{
                margin-right: 12px;
            }
        }
        .intro{
            padding: 12px;
            color: #666;
            font-size: 14px;
            background-color: rgba(248, 248, 248, 1);
            border-radius: 12px;
        }
    }
}
</style>