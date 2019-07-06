<template>
    <div>
        <div>
            <div class="banner">
                  <swiper :options="swiperOption" ref="mySwiper"  class="swiper1">
                        <!-- slides -->
                        <swiper-slide  v-for="(item,index) in banner[0]" :key="index">
                            <img :src="item.image" alt="">
                        </swiper-slide>

                        <div class="swiper-pagination lr_swiper_right"  slot="pagination"></div>
                        
                     
                    </swiper>
            </div>
            <section class="user-bar">
                <a class="user-bar-cart">
                    <span class="user-bar-cart-item">
                        <i class="mui-icon cart"></i>
                        购物车
                    </span>

                </a>
                    <i class="user-bar-line"></i>
                <a class="user-bar-people">
                    <span class="user-bar-cart-item">
                        <i class="mui-icon people"></i>
                        我的豆品
                    </span>
                </a>
            </section>
            <section class="product-list">
                <div class="product-list-header">新品首发</div>
                <ul class="product-list-content"> 
                    <li class="product-list-item" v-for="(item,index) in product_items[0]" :key="index">
                        <div class="product-card">
                            <a>
                                <div class="product-cover-wrapper">
                                    <div class="_3kP-rt0_ _37xwNlCe product-card-cover">
                                        <img :src="item.image" class="_1uN_mkij" alt="">
                                    </div>
                                </div>
                                <div class="product-card-info">
                                    <p class="product-card-title">{{item.title}}</p>
                                    <div class="product-card-desc">{{item.desc}}</div>
                                    <div class="product-card-bottom">
                                        <span class="product-card-promote">${{item.price_range}}</span>
                                        <span class="product-card-tag"> 新品上市</span>
                                    </div>
                                </div>
                            </a>
                        </div>
                    </li>
                </ul>
            </section>
            <section class="group">
                <div class="group-header" >官方小组</div>
                <div class="group-topic-list">
                    <div class="group-topic-item" v-for="(item,index) in topics[0]" :key="index">
                        <a >
                            <div class="group-topic-content">
                                <div class="group-topic-hot">
                                    <em>{{item.hot_amount}}</em>
                                </div>
                                <h3 class="group-topic-title">{{item.title}}</h3>
                            </div>
                            <div class="group-topic-detail">
                                <div class="group-topic-time">{{item.update_time}}</div>
                            </div>
                        </a>
                    </div>
                </div>
                <div class="group-topic-more">
                    <a href="javascript:;">查看更多讨论</a>
                </div>
            </section>
            <section class="topics">
                <div class="topics-header">
                    热门活动
                </div>
                <div>
                    <ul class="topics-list">
                        <a href="javascript:;">
                            <li class="topic-item" v-for="(item,index) in topic_list[0]" :key="index">
                                 <a href="javascript:;" style="display:block;width:100%;height:100%">
                                <div class="topic-photo">
                                    
                                    <div class="_3kP-rt0_ _37xwNlCe">
                                         <img :src="item.img" alt="">
                                    </div>
                                </div>
                                <div class="topic-content">
                                    <div class="topic-title">{{item.title}}</div>
                                    <div class="topic-desc">{{item.desc}}</div>
                                </div>
                                </a>
                            </li>
                        </a>
                    </ul>
                </div>
            </section>
            <!-- 底部 -->
            <div class="footer-bar">
                <span class="footer-bar-item">
                    <em>购物说明</em>
                </span>
                <i class="footer-bar-line"></i>
                <a href="javascript:;" class="footer-bar-item">
                    <em>意见反馈</em>
                </a>
                <i class="footer-bar-line"></i>
                <a href="javascript:;" class="footer-bar-item">
                    <em>商务合作</em>
                </a>
            </div>
        </div>
    </div>
</template>

<script>
import 'swiper/dist/css/swiper.css'
import { swiper, swiperSlide } from 'vue-awesome-swiper'
import {getDouPinNow} from 'api/doupin.js'
export default {
      name:'diupinbody',
     async created(){
         let data = await getDouPinNow();
        //  console.log(data.data.modules[0].data.banner);
         //官方小组
         this.topics.push(data.data.modules[3].data.topics);
         //活动
         this.topic_list.push(data.data.modules[4].data.topic_list);
         //新品首发
        this.product_items.push(data.data.modules[2].data.product_items);
        //banner
        this.banner.push(data.data.modules[0].data.banner);
     },
     data() {
      return {
          //官方小组
          topics:[],
          topic_list:[],
            //新品首发
          product_items:[],
          banner:[

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
.user-bar{
        display: -webkit-box;
    display: -webkit-flex;
    display: flex;
    background-color: #fff;
    margin-bottom: 20px;
}
.user-bar .user-bar-cart, .user-bar .user-bar-people{
        -webkit-box-flex: 1;
    -webkit-flex: 1;
    flex: 1;
    height: 45px;
    line-height: 45px;
    text-align: center;
    font-size: 15px;
    color: #ababac;
}
.user-bar .user-bar-cart-item, .user-bar .user-bar-people-item{
        margin-right: 10px;
}
.user-bar .mui-icon{
        color: #44883e;
    font-size: 18px;
}
.user-bar .user-bar-line{
    display: block;
    width: 0;
    border: .5px solid #f3f2f2;
    margin-top: 10px;
    margin-bottom: 10px;
}

/*新品首发*/
.product-list{
        padding: 5px 0;
    background-color: #fff;
    margin-bottom: 15px;
}
.product-list-header{
        color: #3e3a39;
}
.product-list-header{
        font-size: 18px;
    line-height: 1.4;
    padding: 15px;
}
.product-list-content{
        clear: both;
    overflow: hidden;
    margin: 0 7.5px;
}
.product-list-content .product-list-item{
        list-style: none;
    width: 50%;
    float: left;
}
.product-card{
        list-style: none;
    margin-left: 7.5px;
    margin-right: 7.5px;
    margin-bottom: 15px;
    background-color: #fff;
    border-radius: 5px;
}
.product-card a{
        display: block;
    clear: both;
    overflow: hidden;
}
.product-card .product-cover-wrapper{
        position: relative;
}
.product-card .product-card-cover{
    width: 100%;
    position: relative;
    margin-left: 100%;
    height: 100%;
    left: -100%;
}
._3kP-rt0_{
    height: 137.5px;
    display: block;
    text-align: center;
    position: relative;
    width: 100%;
    height: 100%;
    z-index: 1;
    background-color: #f3f2f2;
}
 ._3kP-rt0_>img{
    height: 137.5px;
    /* height: 100%; */
    /* width: 137.5px; */
    width: 100%;
}
._3kP-rt0_ img[data-v-07963a44]{
 height: 137.5px;

}


.product-card .product-card-info{
        position: relative;
    z-index: 1;
    padding: 13px 0 7px;
    border-top: 0;
    border-radius: 0 0 3px 3px;
    font-weight: 300;
}
.product-card .product-card-title{
        font-size: 15px;
    font-weight: 600;
    height: 1em;
    line-height: 1em;
    color: #3e3a39;
    margin-bottom: 8px;
    font-weight: 300;
}
.product-card .product-card-desc, .product-card .product-card-title{
        white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
}
.product-card .product-card-desc{
    font-size: 13px;
    height: 30px;
    line-height: 30px;
    margin-bottom: 8px;
    color: #ababac;
}
.product-card .product-card-desc, .product-card .product-card-title{
        white-space: nowrap;
    overflow: hidden;
    overflow-x: hidden;
    overflow-y: hidden;
    text-overflow: ellipsis;
}
.product-card .product-card-bottom{
        height: 20px;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
}
.product-card .product-card-bottom .product-card-del, .product-card .product-card-bottom .product-card-promote{
        height: 16px;
    line-height: 16px;
}
.product-card .product-card-bottom .product-card-activity, .product-card .product-card-bottom .product-card-del, .product-card .product-card-bottom .product-card-promote, .product-card .product-card-bottom .product-card-tag{
        display: inline-block;
    vertical-align: middle;
}
.product-card .product-card-promote{
        font-size: 15px;
    line-height: 1.4;
    color: #dd1944;
    margin-right: 9px;
}

.product-card .product-card-tag{
        height: 18px;
    line-height: 18px;
    font-size: 12px;
    color: #44883e;
    border: 1px solid #44883e;
    padding: 0 6px;
    margin-right: 5px;
    border-width: 1px;
}

.group{
        background-color: #fff;
    padding: 5px 0;
    margin-bottom: 15px;
}
.group-header{
        font-size: 18px;
    line-height: 1.4;
    padding: 15px;
    color: #3e3a39;
}
.group-topic-list .group-topic-item{
        padding: 15px;
    border-bottom: 1px solid #f3f2f2;
}
.group-topic-list .group-topic-content{
        display: -webkit-box;
    display: -webkit-flex;
    display: flex;
    flex-flow: row nowrap;
    justify-content: flex-start;
    font-size: 12px;
    color: #ababac;
}
.group-topic-list .group-topic-hot{
        position: relative;
    z-index: 1;
    height: 14px;
    line-height: 14px;
    width: 32px;
    top: 3px;
}
.group-topic-list .group-topic-hot em{
        font-size: 12px;
    display: block;
    border: 1px solid #44883e;
    color: #44883e;
    text-align: center;
    height: 14px;
}
.group-topic-list .group-topic-title{
        margin-left: 5px;
    font-size: 15px;
    line-height: 1.4;
    color: #3e3a39;
    -webkit-box-flex: 1;
    flex: 1;
}
.group-topic-detail{
        font-size: 12px;
    color: #ababac;
    margin-top: 10px;
    line-height: 20px;
}
.group-topic-detail .group-topic-time{
        float: right;
    color: #ababac;
}
.group-topic-more{
        text-align: center;
    font-size: 13px;
    color: #3e3a39;
    padding: 10px 0;
}
.group-topic-more a{
        color: #3e3a39;
}
.group-topic-more:after{
        content: ">";
    display: inline-block;
    margin-left: 4px;
}
.topics{
        background-color: #fff;
    overflow: hidden;
}
.topics .topics-header{
        font-size: 18px;
    line-height: 1.4;
    padding: 15px;
    color: #3e3a39;
}
.topics .topics-list{
        padding-left: 15px;
    padding-right: 15px;
}
.topics .topic-item{
        margin-bottom: 15px;
    background-color: #f3f2f2;
    display: table;
    width: 100%;
}
.topics .topic-photo{
        width: 85px;
    height: 85px;
    display: table-cell;
}
._3kP-rt0_{
        display: block;
    text-align: center;
    position: relative;
    width: 100%;
    height: 100%;
    z-index: 1;
    background-color: #f3f2f2;
}
._3kP-rt0_ img{height: 85px;}
.topics .topic-content{
        display: table-cell;
    vertical-align: middle;
    text-align: left;
    padding-left: 15px;
}
.topics .topic-content .topic-title{
        font-size: 15px;
    line-height: 1.4;
    color: #44883e;
    margin-bottom: 4px;
    font-weight: 400;
}
.topics .topic-content .topic-desc{
        font-size: 13px;
    line-height: 1.4;
    color: #ababac;
}

/* footer */
.footer-bar{
        display: -webkit-box;
    display: -webkit-flex;
    display: flex;
    background-color: #fff;
}
.footer-bar .footer-bar-item{
        -webkit-box-flex: 1;
    -webkit-flex: 1;
    flex: 1;
    height: 45px;
    line-height: 45px;
    text-align: center;
    font-size: 14px;
    color: #ababac;
}
.footer-bar .footer-bar-line{
        display: block;
    width: 0;
    border: .5px solid #f3f2f2;
    margin-top: 10px;
    margin-bottom: 10px;
}
.footer-bar em{
    display: inline-block;
    vertical-align: middle;
    font-style:normal;
}
</style>
