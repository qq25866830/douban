<template>
    <div>
        <HeaderCom/>
        <!-- <h1>电影热映</h1> -->
        <Moviebody/>
    
    </div>
</template>

<script>

import HeaderCom from 'common/hander'
import Moviebody from 'components/moviebody'
export default {
    name:'movie',
    components:{
      HeaderCom,
      Moviebody
    }
}
</script>

<style scoped>


</style>
