<template>
    <div>
        <HeaderCom/>
        <!-- <h1>电影热映</h1> -->
        <People/>
        <Footer/>
    </div>
</template>

<script>

import HeaderCom from 'common/hander'
import People from 'components/people'
import Footer from 'common/footer'
export default {
    name:'pepole',
    components:{
      HeaderCom,
     People,
     Footer
    }
}
</script>

<style scoped>


</style>
