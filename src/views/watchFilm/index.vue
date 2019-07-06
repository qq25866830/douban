<template>
    <div>
        <HeaderCom/>
        <WatchFilm/>
        <Footer/>
    </div>
</template>

<script>

import HeaderCom from 'common/hander'
import WatchFilm from 'components/watchFilm'
import Footer from 'common/footer'
export default {
    name:'watchFilm',
    components:{
      HeaderCom,
      WatchFilm,
      Footer
    }
}
</script>

<style scoped>


</style>
