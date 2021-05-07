<template>
    <div>
        <nav-bar>
            <template v-slot:default>图书分类</template>
        </nav-bar>
    </div>
</template>

<script>
import NavBar from '../../components/common/navbar/NavBar'
    export default{
        name: "Categroy",
        components:{
            NavBar
        }
    }
</script>

<style scoped>

</style>
