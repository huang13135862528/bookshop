<template>
  <div class="home">

    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
import { ref, onMounted } from 'vue'
import { getHomeAllData } from 'network/home'

export default {

  name: 'Home',
  setup () {
    const banner = ref([]);
    onMounted(() => {
      getHomeAllData().then(res => {
        banner.value = res.slides;
      }).catch(err => {})
    })
    return{
      banner
    }
  },
  components: {

  }
}
</script>
