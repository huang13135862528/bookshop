<template>
    <div class="goods">
        <goods-list-item></goods-list-item>
        <goods-list-item></goods-list-item>
        <goods-list-item></goods-list-item>
        <goods-list-item></goods-list-item>
        <goods-list-item></goods-list-item>
        <goods-list-item></goods-list-item>
        <goods-list-item></goods-list-item>
        <goods-list-item></goods-list-item>

    </div>
</template>

<script>
import GoodsListItem from "./GoodsListItem";
export default {
   name: "GoodsList",
   components:{
       GoodsListItem,
   }
}
</script>

<style scoped lang="scss">
    .goods{
        width: 100%;
        display: flex;
        flex-wrap: wrap;
        justify-content: space-around;
        padding: 2px;
       
    }
</style>