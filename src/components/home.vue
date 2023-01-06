<template>
    <Menu></Menu>
    <div class="body">
        <Suspense>
            <template #default>
                <Start></Start>
            </template>
            
            <template #fallback>
                <Loading></Loading>
            </template>
        </Suspense>
        <div class="main" id="show">
            <h2 class="title title1">界面设计</h2>
            <div class="card-content">
                <div class="card-row">
                    <Card :id="0"></Card>
                    <Card :id="1"></Card>
                    <Card :id="2"></Card>
                </div>
                <div class="card-row">
                    <Card :id="3"></Card>
                    <Card :id="4"></Card>
                    <Card :id="5"></Card>
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
                    <Card :id="6"></Card>
                    <Card :id="7"></Card>
                    <Card :id="7"></Card>
                </div>
            </div>
        </div>
    </div>
    <Footer></Footer>
</template>





<script setup>
import { defineAsyncComponent } from 'vue'
import { data } from './data.json'
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
const Loading = defineAsyncComponent(() =>
    import('../element/loading.vue')
)

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
        margin-bottom: 80px;
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