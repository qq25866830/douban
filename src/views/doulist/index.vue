<template>
    <div>
        <HeaderCom/>
        <!-- <h1>电影热映</h1> -->
        
        <Doulistbody/>
        <Footer/>
    </div>
</template>

<script>
import Doulistbody from 'components/doulistbody'
import HeaderCom from 'common/hander'
import Footer from 'common/footer'
export default {
    name:'doulist',
    components:{
        HeaderCom,
        Doulistbody,
        Footer
    }
}
</script>

<style scoped>

</style>