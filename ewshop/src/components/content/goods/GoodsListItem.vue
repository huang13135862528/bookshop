<template>
    <div class="goods-item">
        <img src="~assets/images/05.jpg" alt="">
        <div class="goods-info">
            <p>标题</p>
            <span class="price"><small>￥</small>100</span> 
            <span class="collect">3</span>
        </div>

    </div>
</template>

<script>
    export default {
        name: "GoodsListItem",
    }

</script>

<style scoped lang="scss">
    .goods-item{
        width: 46%;
        padding-bottom: 40px;
        position: relative;
        
        img{
            width: 100%;
            border-radius: 5px;
        }
        .goods-info{
            font-size: 12px;
            position: absolute;
            bottom: 5px;
            left: 0;
            right: 0;
            overflow: hidden;
            text-align: center;
            p{
                overflow: hidden;
                text-overflow: ellipsis;
                margin-bottom: 3px;
            }
            .price{
                color: red;
                margin-right: 20px;
            }
            .collect{
                position: relative;
            }
            .collect::before{
                content: '';
                position: absolute;
                left: -13px;
                width: 12px;
                height: 12px;
                top: -1px;
                background: url('~assets/images/collect.png') 0 0/12px 12px;
            }
        }
        
    }
</style>
