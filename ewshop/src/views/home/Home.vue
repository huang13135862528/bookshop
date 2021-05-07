<template>
    <div>
        <nav-bar>
            <template v-slot:default>图书商城</template>
        </nav-bar>
        <div class="banners">
            <img src="~assets/images/04.jpg"  alt="">
        </div>

        <recommend-view :recommends="recommends"></recommend-view>
        <tab-control @tabClick="tabClick" :titles="['畅销','新书', '精选']"></tab-control>
        {{temid}}
    </div>
</template>

<script>
    import NavBar from '../../components/common/navbar/NavBar';
    import RecommendView from './ChildComps/RecommendView';
    import TabControl from 'components/content/tabControl/TabControl';
    import {getHomeAllData} from 'network/home';
    import {ref, reactive, onMounted} from 'vue';
    export default{
        name: "Home",
        setup (){
            const temid = ref(0);   //申明的临时变量
            const recommends = ref([]);
            onMounted(() =>{
                getHomeAllData().then(res=>{
                    recommends.value = res.goods.data;
                })
            })
            const tabClick = (index) =>{
                temid.value = index;
            }
            return {
                recommends,
                tabClick,
                temid
            }
        },
        components:{
            NavBar,
            RecommendView,
            TabControl,
        }
    }
</script>

<style scoped>
.banners img{
    width: 100%;
    height: 190px;
    margin-top: 45px;
}
</style>