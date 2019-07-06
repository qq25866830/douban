<template>
    <div>
        <HeaderCom/>
        <Subject/>
        <Footer/>
    </div>
</template>

<script>

import HeaderCom from 'common/hander'
import Subject from 'components/subjectbody'
import Footer from 'common/footer'
export default {
    name:'subject',
    components:{
      HeaderCom,
      Subject,
      Footer
    }
}
</script>

<style scoped>


</style>
