<template>
    <div>

            <!-- <h1>中间部分1111</h1> -->
              <div class="page">
            <div class="card">
                 <a href="javascript:;" class="header-subject-title">
                <img :src='pic' alt="">
                <span class="title">{{title}}</span>
                <span class="rating">8.0</span>
                 </a>
            </div>
            <div id="discussion-list-root">
                <section class="discussion-list-page">
                    <h2>
                        <span>讨论（{{total}}）</span>
                        <div class="add-topic">
                            添加话题
                        </div>
                    </h2>
                    <ul class="discussion-list base-list">
                        <li v-for="(item,index) in forum_topics" :key="index">
                            <h3>{{item.title}}</h3>
                            <div class="info">
                                {{item.comments_count}}回应
                            </div>
                        </li>
                        <a class="load-more" @click="handleindex()">显示更多</a>
                    </ul>

                </section>
            </div>
        </div>

    </div>
</template>

<script>
import {getDiscussNow,getDiscussepisode} from 'api/discuss.js'

export default {
    name:'discussbody',
   async created(){
       let data = await getDiscussNow();
        this.title = data.latest_works[0].title;
        this.pic = data.latest_works[0].pic.large;

        let datatwo = await getDiscussepisode();
        this.total = datatwo.total;
        this.forum_topics = datatwo.forum_topics;
   },
   data() {
       return {
           title:'',
            pic:'',
            total:'',
            forum_topics:[],
            index:1,
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
.discussion-list-page{
    padding: 30px 16px 40px;
}
.discussion-list-page>h2{
    font-size: 15px;
    line-height: 1;
}
.discussion-list-page>h2 .add-topic{
    float: right;
    color: #42bd56;
    cursor: pointer;
}
.discussion-list-page>h2 .add-topic::before{
    content: '+';
    margin-right: 4px;
}
section{
        margin-bottom: 30px;
}
.base-list{
        margin-right: -18px;
    position: relative;
}
.base-list>li{
        padding: 15px 18px 15px 0;
    position: relative;
}
.discussion-list-page ul.discussion-list li h3{
        font-size: 17px;
    font-weight: 500;
    line-height: 1.41;
    text-align: left;
    color: #494949;
    margin-bottom: 5px;
}
.discussion-list-page ul.discussion-list li .info{
        font-size: 14px;
    color: #42bd56;
    line-height: 1;
}
.base-list .load-more{
        color: #42bd56;
    display: block;
    font-size: 15px;
    text-align: center;
    cursor: pointer;
    line-height: 1;
    margin: 30px 18px 30px 0;
}
</style>
