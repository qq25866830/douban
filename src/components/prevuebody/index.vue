<template>
    <div>
        <div class="page">
             <div class="card">
                 <a href="javascript:;" class="header-subject-title">
                <img :src='pic' alt="">
                <span class="title">{{title}}</span>
                <span class="rating">8.0</span>
                 </a>
            </div>
            <p class="trailer-title">终极版</p>
            <video :src="video" poster="https://img3.doubanio.com/img/trailer/medium/2560046305.jpg?1560949911" controls="" playsinline="" webkit-playsinline="" controlslist="nodownload" class="video" autoplay="autoplay"></video>
            <section class="trailers">
                <h2>预告片({{num}})</h2>
                <div class="bd photo-list">
                    <ul>
                        <li v-for="(item,index) in yugao" :key="index"> 
                            <a class="video"><img :src="item.pic" alt=""> </a>
                            <a class="title">{{item.title}}</a>
                            <a class="runtime">{{item.time}}</a>
                        </li>
                    </ul>
                </div>
            </section>
            <section class="trailers">
                    <h2>片段 (2)</h2>
                    <div class="bd photo-list">
                    <ul>
                        <li v-for="(item,index) in yugao" :key="index"> 
                            <a class="video"><img :src="item.pic" alt=""> </a>
                            <a class="title">{{item.title}}</a>
                            <a class="runtime">{{item.time}}</a>
                        </li>
                    </ul>
                </div>
            </section>
             <section class="trailers">
                    <h2> 花絮 (16)</h2>
                    <div class="bd photo-list">
                    <ul>
                        <li v-for="(item,index) in yugao" :key="index"> 
                            <a class="video"><img :src="item.pic" alt=""> </a>
                            <a class="title">{{item.title}}</a>
                            <a class="runtime">{{item.time}}</a>
                        </li>
                    </ul>
                </div>
            </section>
         </div>
    </div>
</template>

<script>
import {getPrevueNow} from 'api/prevue.js'
export default {
    name:'prevuebody',
   async created(){
         let data = await getPrevueNow();
           this.title = data.latest_works[0].title;
           this.pic = data.latest_works[0].pic.large;
           this.num = 20;
           this.video='http://vt1.doubanio.com/201907051157/f7ca00afdfc886ec659e00fbff6237bc/view/movie/M/302480749.mp4';
            //到时候做数据
            this.yugao = [
                {
                    time:'01:00',
                    pic: 'https://img3.doubanio.com/img/trailer/medium/2560046305.jpg?1560949911',
                    title:'终极版',
                },
                {
                  title:'蜘蛛侠：英雄远征 预告片',
                  time:'01:00',
                  pic:'https://img3.doubanio.com/img/trailer/medium/2560830531.jpg?1561722388',  
                },
                {
                  title:'蜘蛛侠：英雄远征 预告片',
                  time:'01:00',
                  pic:'https://img3.doubanio.com/img/trailer/medium/2560830531.jpg?1561722388',  
                },
                {
                  title:'蜘蛛侠：英雄远征 预告片',
                  time:'01:00',
                  pic:'https://img3.doubanio.com/img/trailer/medium/2560830531.jpg?1561722388',  
                },
                {
                  title:'蜘蛛侠：英雄远征 预告片',
                  time:'01:00',
                  pic:'https://img3.doubanio.com/img/trailer/medium/2560830531.jpg?1561722388',  
                },
                {
                  title:'蜘蛛侠：英雄远征 预告片',
                  time:'01:00',
                  pic:'https://img3.doubanio.com/img/trailer/medium/2560830531.jpg?1561722388',  
                },
            ]
            console.log(this.yugao);
            

    },
    data() {
        return {
             title:'',
             pic:'',
             video:'',
             num:'',
             yugao:[],



        }
    },
}
</script>

<style scoped>

h2{
    color: #aaa;
    margin: 0 0 15px;
    font-size: 15px;
}
.page{
    padding-top: 47px;
    background: #fff;
    margin: 0 auto;
    min-height: auto;

}
.card{
    margin: 0 18px;
}
.header-subject-title{
    font-size: 15px;
    margin: 0 -18px;
    border-bottom: 1px solid #f3f3f3;
    padding: 10px 18px;
    line-height: 24px;
    display: block;
}
.header-subject-title img, .header-subject-title .subject-cover{
        height: 24px;
    margin-right: 6px;
    float: left;
    vertical-align: middle;
}

.header-subject-title .title{
    color: #42bd56;
    margin-right: 4px;
}
.header-subject-title .rating{
    color: #aaa;
    font-size: 14px;
}
.trailer-title{
        margin: 30px 10px 0;
    color: #494949;
    font-size: 24px;
    line-height: 30px;
}
.video{
        margin: 20px 0;
    width: 100%;
}
.trailers{
    margin: 0;
}
.trailers h2{
    padding-left: 18px;
    margin: 20px 0 10px;
    font-size: 15px;
    color: #aaa;
}
.trailers .photo-list{
        height: 192px;
    margin: 0;
    overflow: hidden;
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
.trailers .photo-list ul li{
        height: 192px;
    width: 213.33333px;
    background: #fff;
    vertical-align: top;
}
.photo-list ul li:first-child{
        margin-left: 18px;
}
.photo-list ul li{
        margin: 0;
    height: 120px;
    overflow: hidden;
    display: inline-block;
}
.trailers .photo-list ul li .video{
        height: 120px;
    width: 100%;
    display: block;
    margin: 0 0 10px 0;
}
.photo-list ul .video{
        width: 213.33333px;
    overflow: hidden;
    background-size: 100%;
}
.trailers a{
        display: block;
    font-size: 14px;
    line-height: 20px;
    white-space: normal;
    word-break: break-all;
    word-wrap: break-word;
}
.trailers a.title{
        padding-right: 20px;
    color: #494949;
    font-size: 15px;
    line-height: 22px;
}
.trailers a.runtime{
        color: #ccc;
    font-size: 14px;
}
.trailers .photo-list ul li .video img{
    width: 100%;
    height: 100%;
}
</style>
