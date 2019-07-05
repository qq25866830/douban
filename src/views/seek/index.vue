<template>
    <div>
        <HeaderCom/>
        <!-- <h1>电影热映</h1> -->
        <Seekbody/>
    
    </div>
</template>

<script>

import HeaderCom from 'common/hander'
import Seekbody from 'components/seekbody'
export default {
    name:'movie',
    components:{
      HeaderCom,
      Seekbody
    }
}
</script>

<style scoped>


</style>
