<template>
    <div class="tab-control">
        <div class="tab-control-item" v-for="(item, index) in titles" :key="index" 
        @click="itemClick(index)" :class="{active:index == currentIndex}">
            <span>{{item}}</span>
        </div>
    </div>
    
</template>

<script>
    import {ref} from 'vue';
    export default{
        name: "TabControl",
        props:{
            titles:{
                type:Array,
                default(){
                    return [];
                }
            }
        },
        setup(props, {emit}){
            let currentIndex = ref(0);
            const itemClick = (index) =>{
                currentIndex.value = index;
                emit('tabClick', index)
            }
            return{
                currentIndex,
                itemClick
            }
        }
    }
</script>

<style scoped lang="scss">
    .tab-control{
        height: 40px;
        line-height: 40px;
        display: flex;
        text-align: center;
        font-size: 14px;
        background-color: #FFF;
        width: 100%;
        position: sticky;   //css3新增固定属性，类似于position:fixed;特定浏览器适用。移动端都适用
        top: 44px;

        .tab-control-item{
            flex: 1;
            span{
                padding: 6px;
            }
        }
        .active{
            color: var(--color-tint);
            span{
                border-bottom: 3px solid var(--color-tint);
            }
        }
    }

</style>
