<template>
    <div>
        <div class="page">
            <div class="card">
                <h1 class="title">
                    {{name}} - {{latin_name}}
                </h1>
                <section class="celebrity-info">
                    <div class="right">
                       <a href="javascript:;">
                           <img  class="cover" :src='cover_url'>
                       </a>
                    </div>
                    <div class="left">
                        <p class="follower">
                            <span>{{fans_count}}</span>
                            人收藏
                        </p>
                        <p class="meta">
                            {{info}}
                        </p>
                        <a href="javascript:;" class="open-dialog" @click="handleOpen()">更多资料</a>
                    </div>
                    <div :class="doubanDialog ? 'douban-dialog more-info':'douban-dialog more-info hide'">
                            <div class="hd">
                                <span class="title">影人基本资料</span>
                                <a href="javascript:;" class="btn-cancel" @click="handleckb()">取消</a>
                            </div>
                            <div class="bd">
                                <ul class="more-info list">
                                    <li>
                                        <span class="key">英文名</span>
                                        <span>{{latin_name}}</span>
                                    </li>
                                    <li>
                                        <span class="key">简体中文名</span>
                                        <span>{{name}}</span>
                                    </li>
                                    <li>
                                        <span class="key">出生地</span>
                                        <span>  美国,科罗拉多州,喷泉市</span>
                                    </li>
                                    <li>
                                        <span class="key">出生日期</span>
                                        <span>1981-06-28</span>
                                    </li>
                                    <li>
                                        <span class="key">星座</span>
                                        <span>巨蟹座</span>
                                    </li>
                                     <li>
                                        <span class="key">更多中文名</span>
                                        <span>乔恩·沃茨</span>
                                    </li>
                                </ul>
                            </div>  
                    </div>  
                </section>
                <section class="celebrity-mark mark-section">
                    <div class="mark-item">
                        <a href="javascript:;">
                            <span>收藏</span></a>
                    </div>
                </section>
                <section class="celebrity-intro">
                    <h2>影人介绍</h2>
                    <div class="bd">
                        <p> {{abstract}}</p>
                    </div>
                </section>
                <section class="celebrity-photos">
                    <h2> 图片(17)</h2>
                    <div class="bd photo-list">
                        <ul class="wx-preview">
                            <li v-for="(item,index) in pic" :key="index">
                                 <a href="javascript:;">
                                <!-- {{item}} -->
                                 <img :src="item" alt="">
                                 </a>
                                
                            </li>
                        </ul>
                    </div>
                </section>
                <section class="items__celebrity">
                    <header>
                        <h2>个人作品</h2>
                    </header>
                    <ul class="row items">
                        <li class="item item__tv" v-for="(item,index) in date.works" :key="index">
                            <a href="javascript:;">
                                <div class="item-poster">
                                    <!-- {{item}} -->
                                    <img :src="item.work.pic.large" >

                                </div>
                                <span class="item-title"> {{item.work.title}}</span>
                                <div class="item-rating">
                                <div class="rank">
                                    <span class="rating-stars" data-rating="4.5">
                                    <span class="rating-star rating-star-medium-full"></span><span class="rating-star rating-star-medium-full"></span><span class="rating-star rating-star-medium-full"></span><span class="rating-star rating-star-medium-full"></span><span class="rating-star rating-star-medium-half"></span>
                                    </span>
                                    <span>9</span>
                                </div>
                            </div>
                            </a>
                        </li>
                    </ul>
                </section>
                <section class="items__celebrity">
                    <header>
                        <h2>相关小组</h2>
                    </header>
                </section>
               <section class="items__celebrity">
                    <header>
                        <h2>合作过的影人</h2>
                    </header>
                    <div class="section-content">
                        <ul class="row items">
                            <li class="item item__celebrity" v-for="(item,index) in related_celebrities" :key="index">
                                <a href="javascript:;">
                                    <div class="item-poster item-imgs">
                                        <!-- {{item.celebrity.cover_url}} -->
                                         <img :src='item.celebrity.cover_url' alt="">
                                    </div>
                                   
                                    <span class="item-title">
                                         {{item.celebrity.name}}
                                    </span>
                                </a>
                            </li>
                        </ul>
                    </div>
                </section>
            </div>
            <!-- <Footer/> -->
        </div>
    </div>
</template>

<script>
import {getSeekNow,getSeekepisode} from 'api/seek.js'
export default {
    name:'seek',
     async created(){
         let data = await getSeekNow();
             this.name= data.name;
             this.latin_name = data.latin_name;
             this.cover_url = data.cover_url;
             this.fans_count = data.fans_count;
             this.info = data.info;
             this.title = data.title;
             this.abstract = data.abstract;
             this.related_celebrities = data.related_celebrities;
             
             this.cover_url = data.cover_url;
        let date = await getSeekepisode();
        this.date = date;
     },
     data() {
         return {
              cover_url:'',
            name:'',
            latin_name:"",
            cover_url:'',
            fans_count:'',
            info:'',
            title:'',
            abstract:'',
            pic:[
            'https://img1.doubanio.com/view/photo/thumb/public/p2486413699.webp',
            'https://img1.doubanio.com/view/photo/thumb/public/p2480675538.webp',
            'https://img3.doubanio.com/view/photo/thumb/public/p2486415783.webp',
            'https://img3.doubanio.com/view/photo/thumb/public/p2486405624.webp',
            'https://img1.doubanio.com/view/photo/thumb/public/p2480662368.webp',
            'https://img1.doubanio.com/view/photo/thumb/public/p2480660887.webp',
            'https://img3.doubanio.com/view/photo/thumb/public/p2486406211.webp',
            'https://img3.doubanio.com/view/photo/thumb/public/p2480674865.webp',
            'https://img3.doubanio.com/view/photo/thumb/public/p2480674281.webp',
            'https://img3.doubanio.com/view/photo/thumb/public/p2480660074.webp',],
            doubanDialog:false,
            // img:['../images/pic01.jpg','../images/pic01.jpg','../images/pic01.jpg','../images/pic01.jpg','../images/pic01.jpg','../images/pic01.jpg','../images/pic01.jpg'],
            related_celebrities:'',
            date:[],
         }
     },
     methods:{
         handleOpen(){
            this.doubanDialog = !this.doubanDialog;
        },
        handleckb(){
            this.doubanDialog = !this.doubanDialog;
            // this.$router.back() ;

        }

     }
}
</script>



<style scoped>

.top{
    margin-bottom: 20px;
}
.page{
    padding-top: 47px;
    background: #fff;
    margin: 0 auto;
    min-height: 1000px;
}
.card{
    margin: 0 18px;
}
.card h1.title{
    margin: 30px 0 5px;
    font-size: 24px;
    line-height: 32px;
    word-break: break-all;
}
.celebrity-info{
    position: relative;
    margin-bottom: 30px;
}
.celebrity-info .right{
    float: right;
}
.celebrity-info .right a{
    display:block;
    width:100px;
     /* background: yellow ; */
     height: 141px;
}
.celebrity-info .cover{
        width: 100px;
       
}
.celebrity-info .left{
    /* float: left; */
    padding-bottom: 30px;
}

.celebrity-info .left .follower{
        color: #aaa;
}
.celebrity-info .left .meta{
    color: #494949;
    margin-top: 15px;
    padding-right: 24px;
    font-size: 14px;
    line-height: 1.6;
        width: 70%;
    /* font-weight:  */
}
.celebrity-info .left .open-dialog{ 
    font-size: 14px;
    color: #42bd56;
}
.celebrity-info .douban-dialog{
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    padding-top: 44px;
    overflow: auto;
    background: #fff;
    z-index: 10000;
}
.celebrity-info .douban-dialog.hide{
        display: none;
}
.douban-dialog .hd{
    height: 44px;
    width: 100%;
    color: #333;
    border-bottom: 1px solid #efefef;
    font-size: 20px;
    line-height: 44px;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
    text-align: center;
    position: fixed;
    top: 0;
    z-index: 10;
    background: #fff;
}
.douban-dialog .hd .title{
    display: inline-block;
    width: 70%;
    margin: 0 15%;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
}
.douban-dialog .hd a.btn-cancel{
        left: 18px;
}
.douban-dialog .hd a{
    color: #42bd56;
    font-size: 15px;
    position: absolute;
    top: 0;
    z-index: 10001;
    
}
.douban-dialog .bd{
    max-width: 650px;
    margin: 0 auto;
}
.douban-dialog .more-info.list{
        padding-top: 40px;
    margin: 0;
    font-size: 15px;
    color: #494949;
}

.douban-dialog .more-info.list li{
    margin-left: 18px;
    display: flex;
    align-items: center;
        -webkit-box-align: center;
}
.douban-dialog .more-info.list li span.key{
    -webkit-box-flex: 3;
    flex: 3;
    color: #aaa;
}
.douban-dialog .more-info.list li span{
    /* -webkit-box-flex: 7; */
    font-size: .14rem;
    /* font-weight: 600; */
    flex: 7;
}
.list li::after{
    left: 0;
    bottom: 0;
    width: 100%;
    height: 1px;
    background: #E8E8E8;
  
    content: '';
    position: absolute;

}
.list li{
    position: relative;
    padding: 15px 18px 15px 0;
    word-wrap: break-word;
    overflow: hidden;
}

/* 收藏 */
.celebrity-mark{
        width: 35%;
}
.celebrity-mark .mark-item{
        margin-bottom: 30px;
        align-items: center;
}
.celebrity-mark .mark-item a{
        height: 30px;
    line-height: 30px;
    display: block;
    border: 1px solid #ffb712;
    border-radius: 3px;
    margin-right: 10px;
    color: #ffb712;
    font-size: 15px;
    text-align: center;
    -webkit-box-flex: 1;
    -moz-box-flex: 1;
    box-flex: 1;
    -webkit-flex: 1;
    -moz-flex: 1;
    -ms-flex: 1;
    flex: 1;
}

section{
    margin-bottom: 30px;
}
h2{
    color: #aaa;
    margin: 0 0 15px;
    font-size: 15px;
}
section p{
        font-size: 15px;
    color: #494949;
}
section p, section h3{
    line-height: 22px;
    word-wrap: break-word;
    margin: 0;
    padding: 0;
}
.photo-list{
    position: relative;
    height: 120px;
    margin-left: -18px;
}
.photo-list ul{
        padding-bottom: 20px;
}
.photo-list ul{
    word-break: keep-all;
    white-space: nowrap;
    overflow: scroll;
    width: auto;
    position: absolute;
    left: 0;
    right: -18px;
}
.photo-list ul li:first-child{
        margin-left: 18px;  
}
.photo-list ul li{
    margin: 0;
    height: 120px;
    overflow: hidden;
    display: inline-block;
    margin-right:5px;
}
.photo-list ul li a{
    display: block;
width: 159.38px;
    height: 120px;
    line-height: 120px;
    text-align: center;
    background: #42bd56
}
.items{
    font-size: .12rem;
    white-space: nowrap;
    overflow-x: auto;
    /* height: 189px; */
}
.items__celebrity .item:first-child, .items__author .item:first-child{
        margin-left: 0;
}
.item{
    display: inline-block;
    vertical-align: top;
    width: 100px;
    text-align: center;
    /* height: 189.22px; */
}
.item-poster{
    
    width: 100%;
    overflow: hidden;
    background-size: cover;
    background-position: center;
}
.item-poster img{
    height: 150px;
    width: 100%
}
.item-title{
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    display: block;
    width: 100%;
}
.item-rating{
    color: #aaa;
    line-height: 17px;
    margin-top: 3px;
    font-size: 12px;
}
.rating-stars{
        display: inline-block;
    vertical-align: middle;
}
.rating-stars .rating-star{
    display: inline-block;
    margin-right: 1px;
    background-color: transparent;
    background-repeat: no-repeat;
}
.rating-star-medium-full{
    background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAAXNSR0IArs4c6QAAAfhJREFUOBGlVD1LHFEUPXfWrzGJO2uhaIQ0iljESgKSpAjBwpXVKikEl6TzD6TwJ4gWaQMBS8WQgCRZ61QpglUgRbQUbMR1XfwodvbmvE1mdt/ssDPBC493733nnrkf7w2QQrSU29D9wY8poJAkkG6hD8O5E+IGgJsHkr8+7hTjdDpsnA0PLkHE4yK2r5iETyYUfdUkkRa96W3VOhLqXv8oFHNhgGCC/Xwc2jFKR0J0966w1IwVp/LasiNGOBTdxV24bhbqenCQRUY9qLzl2CasGEUVdbyA1M5R1wrq/gUqVxUp4tLghCX85D7VlonFksJQ9Un3w5S8c2sy8z3TGtGDRsla8op0vKe3O0UuMRBVDm9N8uX1Zg/3s8+hmU/sGS/wf8kN0UWZP/tgokJCY+jX3ENmWqJ3zNiJonoKXxalcPY9wFqExqmf3fvIuL+SM2WZNX9SCheHAZnZ2++h9FyxufdaQfG6CBznTvQshtDhSyA4jQieRmExhO2gaFBoi5OK8EkYECiqX9jdd1wauP7tbVgrw8a/TzETBpkp1nWZ96sg8+VV8j0j6VF4Dozo3sB4ix0ZypD3iO3r+QvQbfi1KVkobwcBkj//hmp5msSbXHxqlC67bCtDDr2fN/43wYvMaFkK1dOALNjlJa6Z8RuIP0vfAZfVhj/iqoy46fpKwgAAAABJRU5ErkJggg==)
}
.rating-star-medium-full, .rating-star-medium-half, .rating-star-medium-gray{
    width: 13px;
    height: 13px;
    background-size: 13px 13px;
}
.item-imgs,.item-imgs img{
    width: 97px;
    height: 107px;
    /* background: yellow; */
}

.wx-preview ul li a img{
width: 159.38px;
height: 120px;
}
</style>
