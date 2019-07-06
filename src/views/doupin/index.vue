<template>
    <div>
        <div>
            <div class="banner">
                  <swiper :options="swiperOption" ref="mySwiper"  class="swiper1">
                        <!-- slides -->
                        <swiper-slide  v-for="(item,index) in banner" :key="index">
                            <img :src="item" alt="">
                        </swiper-slide>

                        <div class="swiper-pagination lr_swiper_right"  slot="pagination"></div>
                        
                     
                    </swiper>
            </div>
            <section class="user-bar">
                <a class="user-bar-cart">
                    <span class="user-bar-cart-item">
                        
                    </span>
                </a>
            </section>
            <h2>中部</h2>
        </div>
    </div>
</template>

<script>
import 'swiper/dist/css/swiper.css'
import { swiper, swiperSlide } from 'vue-awesome-swiper'
export default {
    name:'diupin',
     data() {
      return {
          banner:[
            //   'https://img3.doubanio.com/img/files/file-1531670422-0.jpg',
              'https://img3.doubanio.com/img/files/file-1560318615-0.jpg',
              'https://img3.doubanio.com/img/files/file-1558947753-0.jpg',
              'https://img3.doubanio.com/img/files/file-1554863770-0.jpg',
              'https://img3.doubanio.com/img/files/file-1557302180-0.jpg',
              'https://img3.doubanio.com/img/files/file-1554864976-0.jpg',
              'https://img3.doubanio.com/img/files/file-1552988635-0.jpg',
              'https://img3.doubanio.com/img/files/file-1546941711-1.jpg',
              'https://img3.doubanio.com/img/files/file-1531670422-0.jpg',
            //   'https://img3.doubanio.com/img/files/file-1531670422-0.jpg'


          ],
        swiperOption: {
          // some swiper options/callbacks
          // 所有的参数同 swiper 官方 api 参数
          // ...
          slidesPerView:1,
          autoplay:{
              delay:4000,
          },
          pagination: {
            el: '.swiper-pagination'
          },
          
        }
      }
    },
    computed: {
      swiper() {
        return this.$refs.mySwiper.swiper
      }
    },
    mounted() {
      // current swiper instance
      // 然后你就可以使用当前上下文内的swiper对象去做你想做的事了
    //   console.log('this is current swiper instance object', this.swiper)
    //   this.swiper.slideTo(1, 1000, false)
    
        
    },
    
    
}
</script>

<style scoped>
.banner,.banner .swiper1,.banner .swiper1 swiper-slide{
    height: 160px;
    width: 100%;
}
.banner>.swiper1>swiper-slide>img{
    width: 100%;
    height: 160px;
}
.banner .swiper1 img{
    width: 100%;
    height: 160px;
}
.swiper-pagination{
    text-align: right;
}
.swiper-container-horizontal > .swiper-pag  ination-bullets{
    left: -37px;
}

</style>    
