<template>
    <div>
         <div class="page">
      <div class="card">
        <section id="movie_showing">
          <header>
            <h2>影院热映</h2>
            <a href="javascript:;">更多</a>
          </header>
          <div class="section-content">
            <ul class="row items">
              <li class="item item__movie" v-for="(item,index) in date[0]" :key="index">
                <a href="javascript:;">
                  <div class="item-poster">
                    <img :src="item.cover.url" alt />
                    <!-- {{item.title}} -->
                  </div>
                  <span class="item-title">{{item.title}}</span>
                  <!-- 星星部分 -->
                  <div class="item-rating">
                    <div class="rank">
                      <span class="rating-stars">
                        <span class="rating-star rating-star-small-full"></span>
                        <span class="rating-star rating-star-small-full"></span>
                        <span class="rating-star rating-star-small-full"></span>
                        <span class="rating-star rating-star-small-full"></span>
                        <span class="rating-star rating-star-small-full"></span>
                      </span>
                      <span>8.0</span>
                      <!-- <span>{{item.rating.value? item.rating.null_rating_reason:'' }}</span> -->
                    </div>
                  </div>
                </a>
              </li>
            </ul>
          </div>
        </section>
        <!-- 在线电影 -->
        <section id="movie_free_stream">
          <header>
            <h2>免费在线观影</h2>
            <a href="javascript:;">更多</a>
          </header>
          <div class="section-content">
            <ul class="row items">
              <li class="item item__movie" v-for="(item,index) in oneLine[0]" :key="index">
                <a href="javascript:;">
                  <div class="item-poster">
                    <img :src="item.cover.url" alt />
                    <!-- {{item.title}} -->
                  </div>
                  <span class="item-title">{{item.title}}</span>
                  <!-- 星星部分 -->
                  <div class="item-rating">
                    <div class="rank">
                      <span class="rating-stars">
                        <span class="rating-star rating-star-small-full"></span>
                        <span class="rating-star rating-star-small-full"></span>
                        <span class="rating-star rating-star-small-full"></span>
                        <span class="rating-star rating-star-small-full"></span>
                        <span class="rating-star rating-star-small-full"></span>
                      </span>
                      <span>8.0</span>
                      <!-- <span>{{item.rating.value? item.rating.null_rating_reason:'' }}</span> -->
                    </div>
                  </div>
                </a>
              </li>
            </ul>
          </div>
        </section>
        <!-- 在线电影结束 -->
        <!-- 新片速递 -->
        <section id="movie_latest">
          <header>
            <h2>新片速递</h2>
            <a href="javascript:;">更多</a>
          </header>
          <div class="section-content">
            <ul class="row items">
              <li class="item item__movie" v-for="(item,index) in newmovie[0]" :key="index">
                <a href="javascript:;">
                  <div class="item-poster">
                    <img :src="item.cover.url" alt />
                    <!-- {{item.title}} -->
                  </div>
                  <span class="item-title">{{item.title}}</span>
                  <!-- 星星部分 -->
                  <div class="item-rating">
                    <div class="rank">
                      <span class="rating-stars">
                        <span class="rating-star rating-star-small-full"></span>
                        <span class="rating-star rating-star-small-full"></span>
                        <span class="rating-star rating-star-small-full"></span>
                        <span class="rating-star rating-star-small-full"></span>
                        <span class="rating-star rating-star-small-full"></span>
                      </span>
                      <span>8.0</span>
                      <!-- <span>{{item.rating.value? item.rating.null_rating_reason:'' }}</span> -->
                    </div>
                  </div>
                </a>
              </li>
            </ul>
          </div>
        </section>
        <!-- 新片速递结束 -->

        <!-- 发现电影 -->
        <section class="interests">
          <header>
            <h2>发现好电影</h2>
          </header>
          <div class="section-content">
            <ul class="lrUl">
              <li style="border-color: #FFAC2D;">
                <a href="javascript:;" class="title">同时入选IMDB250和豆瓣电影250的电影</a>
              </li>
              <li style="border-color: #FFAC2D;">
                <a href="javascript:;" class="title">同时入选IMDB250和豆瓣电影250的电影</a>
              </li>
              <li style="border-color: #FFAC2D;">
                <a href="javascript:;" class="title">同时入选IMDB250和豆瓣电影250的电影</a>
              </li>
              <li style="border-color: #FFAC2D;">
                <a href="javascript:;" class="title">同时入选IMDB250和豆瓣电影250的电影</a>
              </li>
              <li style="border-color: #FFAC2D;">
                <a href="javascript:;" class="title">同时入选IMDB250和豆瓣电影250的电影</a>
              </li>
              <li style="border-color: #FFAC2D;">
                <a href="javascript:;" class="title">同时入选IMDB250和豆瓣电影250的电影</a>
              </li>
              <li class="line"></li>
              <li style="border-color: #42BD56;">
                <a href="javascript:;">使用 App 【找电影】功能</a>
              </li>
              <li style="border-color: #42BD56;">
                <a href="javascript:;">使用 App 【找电影】功能</a>
              </li>
              <li style="border-color: #42BD56;">
                <a href="javascript:;">使用 App 【找电影】功能</a>
              </li>
              <li style="border-color: #42BD56;">
                <a href="javascript:;">使用 App 【找电影】功能</a>
              </li>
              <li style="border-color: #42BD56;">
                <a href="javascript:;">使用 App 【找电影】功能</a>
              </li>
            </ul>
          </div>
        </section>
        <section class="types">
          <header>
            <h2>分类浏览</h2>
          </header>
          <div class="section-content">
            <ul class="type-list">
              <li>
                <a href="javascript:;">经典</a>
                <span></span>
              </li>
              <li>
                <a href="javascript:;">冷门佳片</a>
                <span></span>
              </li>
              <li>
                <a href="javascript:;">豆瓣高分</a>
                <span></span>
              </li>
              <li>
                <a href="javascript:;">动作</a>
                <span></span>
              </li>
              <li>
                <a href="javascript:;">喜剧</a>
                <span></span>
              </li>
              <li>
                <a href="javascript:;">爱情</a>
                <span></span>
              </li>
              <li>
                <a href="javascript:;">悬疑</a>
                <span></span>
              </li>
              <li>
                <a href="javascript:;">恐怖</a>
                <span></span>
              </li>
              <li>
                <a href="javascript:;">科幻</a>
                <span></span>
              </li>
              <li>
                <a href="javascript:;">治愈</a>
                <span></span>
              </li>
              <li>
                <a href="javascript:;">文艺</a>
                <span></span>
              </li>
              <li>
                <a href="javascript:;">成长</a>
                <span></span>
              </li>
              <li>
                <a href="javascript:;">动画</a>
                <span></span>
              </li>
              <li>
                <a href="javascript:;">华语</a>
                <span></span>
              </li>
              <li>
                <a href="javascript:;">欧美</a>
                <span></span>
              </li>
              <li>
                <a href="javascript:;">韩国</a>
                <span></span>
              </li>
              <li>
                <a href="javascript:;">日本</a>
                <span></span>
              </li>
            </ul>
          </div>
        </section>
      </div>

      <!-- 底部 -->
     <Footer/>
     

    </div>
    </div>
</template>

<script>

import {getMovieNow,getMovieepisode,getMovieNew} from 'api/movie.js'
import Footer from 'common/footer'
export default {
    name:'moviebody',
   async created(){
      let data = await getMovieNow();
      console.log(data);
      
        this.date.push(data.subject_collection_items);
      let oneLine = await getMovieepisode();
        this.oneLine.push(oneLine.subject_collection_items)
      let newmovie = await getMovieNew();
        this.newmovie.push(newmovie.subject_collection_items);
    },

    data() {
        return {
        // img:[],
        // title:[],
        date: [],
        oneLine: [],
        newmovie: [],
        footerlogo:"https://img3.doubanio.com/f/talion/7837f29dd7deab9416274ae374a59bc17b5f33c6/pics/card/douban-app-logo.png",
        img:'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJAAAABCCAMAAACPbq+uAAAAnFBMV…mRlirG5moZpYBepmgxpObXZB7fKE2U0dk2iKUZWLzZ',
        
        };
    },
    components:{
        Footer
    }
}
</script>

<style scoped>





.page {
  padding-top: 47px;
  max-width: 650px;
}
.card {
  margin: 0;
}
section:first-child {
  padding-top: 10px;
}
section {
  margin: 0;
  overflow: hidden;
  background-color: #fff;
}
section header {
  padding: 0 12px;
}
section h2 {
  font-weight: 500;
  display: inline-block;
  min-width: 20px;
  margin-bottom: 0;
  font-size: 20px;
  color: #111;
  padding-left: 0;
  padding-bottom: 0;
  /* font-size: 16px; */
}
section header a {
  float: right;
  font-size: 16px;
  line-height: 30px;
  color: #42bd56;
}
/* section .section-content{
        margin-bottom: -1.12rem;
} */
.row {
  width: 100%;
  /* border-bottom: 1px solid #F2F2F2; */
  padding: 15px 0 25px 0;
}
.items {
  font-size: 0;
  white-space: nowrap;
  overflow-x: auto;
}
.item {
  display: inline-block;
  vertical-align: top;
  width: 100px;
  text-align: center;
  padding-right: 10px;
}
.items > * {
  font-size: 20px;
  white-space: normal;
}
.items a div img {
  width: 100px;
  height: 142px;
}
.item:first-child {
  margin-left: 12px;
}
.item-poster {
  width: 100%;
  overflow: hidden;
  /* background-size: cover;
    background-position: center; */
}
.item:not(.item__celebrity) .item-title {
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}
.item__movie .item-title {
  max-width: 100%;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  word-wrap: normal;
}
.item-title {
  display: block;
  margin-top: 6px;
  line-height: 16px;
  font-size: 15px;
  color: #111;
}

/* 星星样式开始 */
.item-rating {
  color: #aaa;
  line-height: 12px;
  margin-top: 6px;
  font-size: 12px;
}
.rating-stars {
  display: inline-block;
  vertical-align: middle;
}
.rating-stars .rating-star {
  display: inline-block;
  margin-right: 1px;
  background-color: transparent;
  background-repeat: no-repeat;
}
.rating-star-small-full {
  background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAAXNSR0IArs4c6QAAAfhJREFUOBGlVD1LHFEUPXfWrzGJO2uhaIQ0iljESgKSpAjBwpXVKikEl6TzD6TwJ4gWaQMBS8WQgCRZ61QpglUgRbQUbMR1XfwodvbmvE1mdt/ssDPBC493733nnrkf7w2QQrSU29D9wY8poJAkkG6hD8O5E+IGgJsHkr8+7hTjdDpsnA0PLkHE4yK2r5iETyYUfdUkkRa96W3VOhLqXv8oFHNhgGCC/Xwc2jFKR0J0966w1IwVp/LasiNGOBTdxV24bhbqenCQRUY9qLzl2CasGEUVdbyA1M5R1wrq/gUqVxUp4tLghCX85D7VlonFksJQ9Un3w5S8c2sy8z3TGtGDRsla8op0vKe3O0UuMRBVDm9N8uX1Zg/3s8+hmU/sGS/wf8kN0UWZP/tgokJCY+jX3ENmWqJ3zNiJonoKXxalcPY9wFqExqmf3fvIuL+SM2WZNX9SCheHAZnZ2++h9FyxufdaQfG6CBznTvQshtDhSyA4jQieRmExhO2gaFBoi5OK8EkYECiqX9jdd1wauP7tbVgrw8a/TzETBpkp1nWZ96sg8+VV8j0j6VF4Dozo3sB4ix0ZypD3iO3r+QvQbfi1KVkobwcBkj//hmp5msSbXHxqlC67bCtDDr2fN/43wYvMaFkK1dOALNjlJa6Z8RuIP0vfAZfVhj/iqoy46fpKwgAAAABJRU5ErkJggg==);
}
.rating-star-small-full,
.rating-star-small-half,
.rating-star-small-gray {
  width: 10px;
  height: 10px;
  background-size: 10px 10px;
}

/*星星结束*/

.interests li {
  margin: 0 0 8px 8px;
  font-size: 16px;
  display: inline-block;
  border-radius: 5px;
  border: solid 1px;
  vertical-align: middle;
}
.interests a {
  height: 50px;
  line-height: 50px;
  padding: 0 20px;
  letter-spacing: 1px;
  overflow: auto;
  display: block;
  text-align: center;
}
section {
  margin: 0;
  overflow: hidden;
  background-color: #fff;
}
.interests ul {
  white-space: nowrap;
  overflow-x: auto;
  padding: 15px 15px 43px 15px;
  font-size: 0;
  margin-left: -5px;
  -webkit-overflow-scrolling: touch;
}
.interests li.line {
  width: 100%;
  display: block;
  height: 1px;
  border: 0;
  margin: 0;
}

.type-list {
  padding: 14px 0 20px 16px;
  color: #eee;
  font-size: 16px;
  overflow: hidden;
}
@media (max-width: 399px) and (min-width: 360px) {
  .type-list li {
    width: 40.5%;
  }
}
.type-list li {
  width: 49.8%;
  border-top: solid 1px #eee;
  border-right: solid 1px #eee;
  float: left;
  padding-right: 20px;
  height: 50px;
  line-height: 50px;
  /* padding-left: 20px; */
}
.type-list a {
  float: left;
  display: block;
  width: 100%;
  line-height: 12px;
  height: 100%;
  line-height: 50px;
  padding-left: 20px;
  color: #42bd56;
}
.type-list span {
  display: block;
  color: #ccc;
  float: right;
  font-weight: bold;
  border-right: solid 1px #ccc;
  border-bottom: solid 1px #ccc;
  width: 10px;
  height: 10px;
  transform: rotate(-45deg);
  margin-top: -25px;
}


/* 底部 */
.download-app{
    padding: 0 0 20px 0;
    margin-top: 50px;
    margin-bottom: 30px;
    text-align: center;
    font-size: 15px;
}
.download-app .info{
    margin: 0 auto 15px;
    overflow: hidden;
    text-align: left;
    font-size: 14px;
    display: inline-block;
    color: #111;
}
.download-app .info img{
        float: left;
    margin-right: 12px;
}
.download-app .info-content{
        overflow: hidden;
}
.download-app .info strong{
        font-size: 24px;
    font-weight: normal;
    line-height: 48px;
}
.download-app .info+a{
        display: block;
        color: #42bd56;
}
</style>
