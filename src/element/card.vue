<template>
    <!-- 卡片 -->
    <router-link :to="'/content/' + data.fileName +'/'+data.imgNumber" :class="cardClass" @mouseenter="Enter" @mouseleave="Leave">
        <!-- 封面 -->
        <div class="cover"><img :src=data.coverPath :style="imgStyle"></div>
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
    </router-link>
</template>

<script setup>
import { reactive, ref } from 'vue';
import { useRoute } from 'vue-router';
const route = useRoute();
// 接收数据
const props = defineProps(['data'])
let data = props.data

// 声明悬浮鼠标样式改变的类名
let cardClass = ref("card")
let imgStyle = ref({})
function Enter() {
    cardClass.value = "card hover"
    imgStyle.value.maxWidth = '110%'
}
function Leave() {
    imgStyle.value.maxWidth = '100%'
}


</script>

<style lang="less" scoped>
.hover {
    cursor: pointer;
}

.card {
    background-color: white;
    border-radius: 20px;
    padding: 20px;
    flex: 1;

    .cover {
        width: 100%;
        height: 240px;
        border-radius: 20px;
        overflow: hidden;
        text-align: center;

        img {
            width: auto;
            height: auto;
            max-width: 100%;
            /*不定宽高的图片居中显示*/
            position: relative;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);

            transition: all 0.8s
        }
    }

    .text-area {
        margin-top: 20px;

        .title-area {
            display: flex;
            gap: 12px;

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

        .tab-area {
            font-size: 14px;
            color: rgba(102, 102, 102, 1);
            margin-bottom: 20px;

            .type {
                margin-right: 12px;
            }
        }

        .intro {
            padding: 12px;
            color: #666;
            font-size: 14px;
            background-color: rgba(248, 248, 248, 1);
            border-radius: 12px;
        }
    }
}
</style>