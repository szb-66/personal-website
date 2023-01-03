<template>
    <Menu></Menu>
    <div class="body">
        <Start></Start>
        <div class="main" id="show">
            <h2 class="title title1">界面设计</h2>
            <div class="card-content">
                <div class="card-row">
                    <Card :data="data[0]"></Card>
                    <Card :data="data[1]"></Card>
                    <Card :data="data[2]"></Card>
                </div>
                <div class="card-row">
                    <Card :data="data[3]"></Card>
                    <Card :data="data[4]"></Card>
                    <Card :data="data[5]"></Card>
                </div>
            </div>

            <h2 class="title title2">视觉插画</h2>
            <div class="visual-card">
                <img src="../assets/img/cover/cover-visual-left.png" class="left">
                <img src="../assets/img/cover/cover-visual-right.png">
            </div>

            <h2 class="title title3">3D设计</h2>
            <div class="card-content" style="margin-bottom: 0;">
                <div class="card-row">
                    <Card :data="data[6]"></Card>
                    <Card :data="data[7]"></Card>
                    <Card :data="data[7]"></Card>
                </div>
            </div>
        </div>
    </div>
    <Footer></Footer>
</template>





<script setup>
import { defineAsyncComponent } from 'vue'
const Footer = defineAsyncComponent(() =>
    import('../element/footer.vue')
)
const Start = defineAsyncComponent(() =>
    import('../element/start.vue')
)
const Card = defineAsyncComponent(() =>
    import('../element/card.vue')
)
const Menu = defineAsyncComponent(() =>
    import('../element/menu.vue')
)

// 首页卡片内容的数据
// 记得跟内容页里面的数据保持一致
const data = [
    {
        type: '#APP',
        id:0,
        title: '融e多',
        version: '0 - 3.8.0',
        intro: '这里是一段关于项目的简要介绍这里是一段关于项目的简要介绍这里是一段关于项目的简要介绍',
        time: '2022-03 至 今日',
        recently_project: true,
        coverPath: '../src/assets/img/cover/rongEDuo.png',
        // 对应图片文件夹名称
        fileName: '1_guoMeiJinRong',
        imgNumber: 50,
    },
    {
        type: '#APP',
        id:1,
        title: '易薪',
        version: '0 - 1.3.7',
        intro: '这里是一段关于项目的简要介绍这里是一段关于项目的简要介绍这里是一段关于项目的简要介绍',
        time: '2022-06 至 今日',
        recently_project: true,
        coverPath: '../src/assets/img/cover/yiXin.png',
        fileName: '1_guoMeiJinRong',
        imgNumber: 50,
    },
    {
        type: '#B端后台',
        id:2,
        title: 'CRM客户管理系统',
        version: '1.0',
        intro: '这里是一段关于项目的简要介绍这里是一段关于项目的简要介绍这里是一段关于项目的简要介绍',
        time: '2022-04',
        recently_project: true,
        coverPath: '../src/assets/img/cover/CRM.png',
        fileName: '1_guoMeiJinRong',
        imgNumber: 50,
    },
    {
        type: '#APP',
        id:3,
        title: '国美金融',
        version: '7.0.0',
        intro: '这里是一段关于项目的简要介绍这里是一段关于项目的简要介绍这里是一段关于项目的简要介绍',
        time: '2021.05 至 2021-08',
        recently_project: false,
        coverPath: '../src/assets/img/cover/guoMeiJinRong.png',
        fileName: '1_guoMeiJinRong',
        imgNumber: 50,
    },
    {
        type: '#B端店务管理',
        id:4,
        title: '美务通店务管理系统',
        version: '2.0.0',
        intro: '这里是一段关于项目的简要介绍这里是一段关于项目的简要介绍这里是一段关于项目的简要介绍',
        time: '2019.08 至 2019.12',
        recently_project: false,
        coverPath: '../src/assets/img/cover/meiWuTong.png',
        fileName: '2_meiWuTong',
        imgNumber: 19,
    },
    {
        type: 'UI',
        id:5,
        title: '其他项目',
        version: false,
        intro: false,
        time: false,
        recently_project: false,
        coverPath: '../src/assets/img/cover/CRM.png',
        fileName: 1,
        imgNumber: 50,
    },
    {
        type: '3D',
        id:6,
        title: '流年千秋',
        version: false,
        intro: '这里是一段关于项目的简要介绍这里是一段关于项目的简要介绍这里是一段关于项目的简要介绍',
        time: '2021-06',
        recently_project: false,
        coverPath: '../src/assets/img/cover/CRM.png',
        fileName: 1,
        imgNumber: 50,
    },
    {
        type: '3D',
        id:7,
        title: '财鲸',
        version: false,
        intro: '这里是一段关于项目的简要介绍这里是一段关于项目的简要介绍这里是一段关于项目的简要介绍',
        time: '2022-01',
        recently_project: false,
        coverPath: '../src/assets/img/cover/CRM.png',
        fileName: '1_guoMeiJinRong',
        imgNumber: 50,
    },
]

const emit = defineEmits(['on-click'])
const clickTap = () => {
  //派发事件。引号里面是上面定义的名字。list是要传递的数据，可以多个，用逗号隔开。
    emit('on-click', data)
}
clickTap()

</script>


<style lang="less" scoped>
.main {
    margin: 0 auto;
    padding: 100px 30px;

    .card-content {
        display: flex;
        flex-direction: column;
        gap: 28px;
        margin-bottom: 80px;

        .card-row {
            display: flex;
            gap: 28px;
        }
    }

    .visual-card {
        background-color: rgba(49, 102, 111, 1);
        background-image: url('../assets/img/cover/cover-visual-bg.png');
        display: flex;
        padding: 0 100px;
        border-radius: 20px;
        height: 332px;
        align-items: center;
        overflow: hidden;
        justify-content: space-between;

        .left {
            display: block;
            height: 232px;
            width: 517px;
        }
    }

    .title {
        margin-bottom: 40px;
        line-height: 1em;
        display: block;
        height: 54px;
        padding-left: 20px;
        padding-top: 30px;
        background-repeat: no-repeat
    }

    .title1 {
        background-image: url('../assets/img/title-1.png');
    }

    .title2 {
        background-image: url('../assets/img/title-2.png');
    }

    .title3 {
        background-image: url('../assets/img/title-3.png');
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