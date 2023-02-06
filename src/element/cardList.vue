<template>
    <el-row :gutter="28">
        <el-col  :xs="24" :sm="12" :md="8" v-for="item in props.data.length">
            <Card :data="data[item-1]" class="box"></Card>
        </el-col>
    </el-row>
</template>

<script setup>
import { defineAsyncComponent } from 'vue'
const Card = defineAsyncComponent(() =>
    import('./card.vue')
)
const props = defineProps(['data'])

</script>

<style lang="less" scoped>
.box {
    margin-bottom: 24px;
    // background-color: red;
}
</style>