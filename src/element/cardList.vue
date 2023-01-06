<template>
    <div class="cardList">
        <div v-for="item in 6" class="box">{{ item }}</div>
    </div>
</template>

<script setup>

</script>

<style lang="less" scoped>
.cardList {
    width: 100%;
    text-align: center;
    display: flex;
    align-content: flex-start;
    flex-flow: row wrap;
    gap:20px;

    .box {
        flex:0 0 25%;
        margin-bottom: 20px;
        background-color: red;
    }
}
</style>