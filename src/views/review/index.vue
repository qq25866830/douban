<template>
    <div>
        <HeaderCom/>
        <Reviewbody/>
        <Footer/>
    </div>
</template>

<script>

import HeaderCom from 'common/hander'
import Reviewbody from 'components/reviewbody'
import Footer from 'common/footer'
export default {
    name:'review',
    components:{
      HeaderCom,
      Reviewbody,
      Footer
    }
}
</script>

<style scoped>


</style>
