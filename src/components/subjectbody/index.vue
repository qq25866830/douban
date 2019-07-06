<template>
    <div>
        <div class="page">
    <section class="promo_top_banner" style="display:none !improtant"></section>
    <div class="card">
      <h1 class="title">蜘蛛侠：英雄远征</h1>
      <section class="subject-info">
        <div class="right">
          <a href="#">
            <img src="" alt="蜘蛛侠：英雄远征" />
          </a>
        </div>
        <div class="left">
          <p class="rating">
            <span class="rating-stars">
              <span class="rating-star rating-full"></span>
              <span class="rating-star rating-full"></span>
              <span class="rating-star rating-full"></span>
              <span class="rating-star rating-full"></span>
              <span class="rating-star rating-gray"></span>
            </span>
            <strong>8.0</strong>
            <span>170028人评价</span>
          </p>
          <p class="meta">127分钟 / 动作 / 科幻 / 冒险 / 乔·沃茨(导演) / 汤姆·赫兰德 / 赞达亚 / 杰克·吉伦哈尔 / 2019-06-28(中国大陆) 上映</p>
        </div>
      </section>
      <section class="subject-mark">
        <div class="mark-item">
          <a href="javascript:;">想看</a>
          <a href="javascript:;">看过</a>
        </div>
      </section>
      <section class="subject-intro">
        <h2>蜘蛛侠：英雄远征的剧情简介</h2>
        <div class="db" style="position:static">
          <p
            data-conten="最受关注的漫威超级英雄大片《蜘蛛侠：英雄远征》依旧由导演乔·沃茨执导，汤姆·赫兰德继续饰演蜘蛛侠彼得·帕克。此次蜘蛛侠将前往欧洲展开新的征程，并将对抗由杰克·吉伦哈尔加盟饰演的大反派神秘客，赞达亚、雅各布·巴特朗、托尼·雷沃罗利等原班人马也将悉数回归。本片将于2019年7月5日北美上映，经历了第一部的成长经历后，蜘蛛侠又会面临怎样的危机？敬请期待。<br>…"
            data-clamp="3"
            >
            最受关注的漫威超级英雄大片《蜘蛛侠：英雄远征》依旧由导演乔·沃茨执导，汤姆·赫兰德继续饰演蜘蛛侠彼得·帕克。此次蜘蛛侠将前往欧洲展开新的征程，并将...
            <a
              href="javascript:;"
              style="float:right;"
            >(展开)</a>
          </p>
        </div>
      </section>
      <section id="celebrities">
            <header>
                <h2>影人</h2>
            </header>
            <div class="section-content">
                <ul class="items row">
                    <li class="item item__celebrity" style="margin-left: 0;">
                        <a href="#">
                            <div class="item-poster"><img src="" alt=""></div>
                            <span class="item-title name">乔·治白</span>
                            <span class="item-title role">导演</span>
                        </a>
                    </li>
                    <li class="item item__celebrity">
                        <a href="#">
                            <div class="item-poster" style="background-image: url(https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1435142487.62.jpg)"></div>
                            <span class="item-title name">乔·治白</span>
                            <span class="item-title role">导演</span>
                        </a>
                    </li>
                </ul>
            </div>
        </section>
        <section class="subject-pics">
            <h2>
                <span>蜘蛛侠：英雄远征的</span>
                <span>预告片(36)</span>
                <span>和</span>
                <span>图片(375)</span>
            </h2>
            <div class="bd photo-list">
                <ul class="wx-preview">
                    <li class="video video-trailer" style="background-image: url(https://img3.doubanio.com/img/trailer/medium/2560046305.jpg?1560949911);">
                        <a href="#"><span><img src="https://img3.doubanio.com/f/talion/b6df390a5411896e81ad9be86a97121c17d4c805/pics/card/play-button.png" alt="蜘蛛侠：英雄远征的预告片"></span></a>
                        <div class="time">01:00</div>
                    </li>
                    <li class="pic">
                        <a href="#">
                            <img alt="蜘蛛侠：英雄远征的剧照_1" src="https://img3.doubanio.com/view/photo/s/public/p2554375920.webp">
                        </a>
                    </li>
                    <li class="pic">
                        <a href="#">
                            <img alt="蜘蛛侠：英雄远征的剧照_1" src="https://img3.doubanio.com/view/photo/s/public/p2554375920.webp">
                        </a>
                    </li>
                    <li class="pic">
                        <a href="#">
                            <img alt="蜘蛛侠：英雄远征的剧照_1" src="https://img3.doubanio.com/view/photo/s/public/p2554375920.webp">
                        </a>
                    </li>
                </ul>
            </div>
        </section>
        <section class="subject-comments">
            <h2>蜘蛛侠：英雄远征的短评({{total.total}})</h2>
            <div class="bd" id="comment-list">
                <div data-reactroot>
                    <ul class="list comment-list" style="margin-bottom: -15px;">
                        <li class="" v-for="(item,index) in interests" :key="index">
                                <div class="desc">
                                    <a :href="item.user.url">
                                        <img :src="item.user.avatar" :alt="item.user.name">
                                    </a>
                                    <div class="user-info">
                                        <strong>{{item.user.name}}</strong>
                                        <span class="rating-stars" :data-rating="item.rating.value">
                                            <span class="rating-star rating-star-medium-full"></span>
                                            <span class="rating-star rating-star-medium-full"></span>
                                            <span class="rating-star rating-star-medium-full"></span>
                                            <span class="rating-star rating-star-medium-gray"></span>
                                            <span class="rating-star rating-star-medium-gray"></span>
                                        </span>
                                        <div class="date">{{item.create_time}}</div>
                                    </div>
                                </div>
                                <p>{{item.comment}}</p>
                                <div class="btn-info">
                                    <div class="ic-btn ic-btn-like  left ">
                                        <span class="text">{{item.vote_count}}</span>
                                    </div>
                                    <div class="ic-btn ic-btn-more   right"></div>
                                </div>
                        </li>
                    </ul>
                    <div class="oia-wrap" style="padding: 20px 0px;">
                        <a class="oia-btn" href="#" style="height: 38px; line-height: 38px; font-size: 15px; width: 100%; max-width: 345px; margin: 0px auto; text-align: center; background-color: rgb(66, 189, 86); color: rgb(255, 255, 255); display: block; border-radius: 40px;">打开App看更多热门短评</a>
                    </div>
                </div>
            </div>
        </section>
                <div id="discussions-root">
                    <div data-reactroot="" class="subject-forum-topics">
                        <h2><!-- react-text: 3 -->讨论(<!-- /react-text --><!-- react-text: 4 -->102<!-- /react-text --><!-- react-text: 5 -->)<!-- /react-text --></h2>
                        <ul class="list" style="padding-bottom: 0px; margin-bottom: -15px;">
                            <li>
                                <a>
                                    <h3>說實話 並不看好 漫威沒有把蜘蛛俠拍好</h3>
                                    <div class="info"><!-- react-text: 11 -->49<!-- /react-text --><!-- react-text: 12 -->回应<!-- /react-text --></div>
                                </a>
                            </li>
                            <li>
                                <a>
                                    <h3>没有钢铁侠给他造战衣可怎么办？</h3>
                                    <div class="info"><!-- react-text: 17 -->81<!-- /react-text --><!-- react-text: 18 -->回应<!-- /react-text --></div>
                                </a>
                            </li>
                            <li>
                                <a>
                                    <h3>你们说毒液（汤姆·哈迪）会加入吗？</h3>
                                    <div class="info"><!-- react-text: 23 -->50<!-- /react-text --><!-- react-text: 24 -->回应<!-- /react-text --></div>
                                </a>
                            </li>
                            <li>
                                <a>
                                    <h3>这片名，怎么翻译成“英雄远征”的？尬不尬？</h3>
                                    <div class="info"><!-- react-text: 29 -->89<!-- /react-text --><!-- react-text: 30 -->回应<!-- /react-text --></div>
                                </a>
                            </li>
                            <li>
                                <a>
                                    <h3>神秘客到底是好是坏？？？</h3>
                                    <div class="info"><!-- react-text: 35 -->36<!-- /react-text --><!-- react-text: 36 -->回应<!-- /react-text --></div>
                                </a>
                            </li>
                        </ul>
                        <div class="oia-wrap" style="padding: 20px 0px;">
                            <a class="oia-btn" href="#" style="height: 38px; line-height: 38px; font-size: 15px; width: 100%; max-width: 345px; margin: 0px auto; text-align: center; background-color: rgb(66, 189, 86); color: rgb(255, 255, 255); display: block; border-radius: 40px;">打开App看更多讨论</a>
                        </div>
                    </div>
                </div>            
       
            <section class="subject-rec">
        
                <h2>喜欢蜘蛛侠：英雄远征的人也喜欢</h2>
                <div class="bd">
                    <ul>
                        <li>
                            <a href="#" rel="">
                                <div class="wp">
                                    <img alt="黑寡妇" data-type="cover" src="https://img1.doubanio.com/view/photo/s_ratio_poster/public/p2550408907.webp">
                                    <h3>黑寡妇</h3>
                                </div>
                            </a>
                        </li>
                        <li>
                                <a href="#" rel="">
                                    <div class="wp">
                                        <img alt="银河护卫队3" data-type="cover" src="https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2558798615.webp">
                                        <h3>银河护卫队3</h3>
                                    </div>
                                </a>
                        </li>
                        <li>
                                <a href="#" rel="">
                                    <div class="wp">
                                        <img alt="黑豹2" data-type="cover" src="https://img1.doubanio.com/view/photo/s_ratio_poster/public/p2555135218.webp">
                                        <h3>黑豹2</h3>
                                    </div>
                                </a>
                        </li>
                        <li>
                                <a href="#" rel="">
                                    <div class="wp">
                                        <img alt="毒液2" data-type="cover" src="https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2558798821.webp">
                                        <h3>毒液2</h3>
                                    </div>
                                </a>
                        </li>
                        <li>
                                <a href="#" rel="">
                                    <div class="wp">
                                        <img alt="星际探索" data-type="cover" src="https://img1.doubanio.com/view/photo/s_ratio_poster/public/p2558719117.webp">
                                        <h3>星际探索</h3>
                                    </div>
                                </a>
                        </li>
                        <li>
                                <a href="#" rel="nofollow">
                                    <div class="wp">
                                        <img alt="X战警：新变种人" data-type="cover" src="https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2506886776.webp">
                                        <h3>X战警：新变种人</h3>
                                    </div>
                                </a>
                        </li>
                        <li>
                                <a href="#" rel="nofollow">
                                    <div class="wp">
                                        <img alt="海王2" data-type="cover" src="https://img1.doubanio.com/view/photo/s_ratio_poster/public/p2558798748.webp">
                                        <h3>海王2</h3>
                                    </div>
                                </a>
                        </li>
                        <li>
                                <a href="#" rel="nofollow">
                                    <div class="wp">
                                        <img alt="钢铁侠" data-type="cover" src="https://img1.doubanio.com/view/photo/s_ratio_poster/public/p725871968.webp">
                                        <h3>钢铁侠</h3>
                                    </div>
                                </a>
                        </li>
                        <li>
                                <a href="#" rel="nofollow">
                                    <div class="wp">
                                        <img alt="复仇者联盟4：终局之战" data-type="cover" src="https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2552058346.webp">
                                        <h3>复仇者联盟4：终局之战</h3>
                                    </div>
                                </a>
                        </li>
                        <li>
                                <a href="#" rel="nofollow">
                                    <div class="wp">
                                        <img alt="美国队长3" data-type="cover" src="https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2332503406.webp">
                                        <h3>美国队长3</h3>
                                    </div>
                                </a>
                        </li>
                    </ul>
                </div>
            </section>
            <section class="subject-reviews">
                <h2>蜘蛛侠：英雄远征的影评(1178)</h2>
                <div class="bd">
                    <ul class="list">
                        <li>
                            <a href="#">
                                <h3>聊聊《蜘蛛侠：英雄远征》中的彩蛋与细节</h3>
                                <div>
                                    <span class="username">彩蛋君</span>
                                    <span class="rating-stars" data-rating="100">
                                        <span class="rating-star rating-star-medium-full"></span>
                                        <span class="rating-star rating-star-medium-full"></span>
                                        <span class="rating-star rating-star-medium-full"></span>
                                        <span class="rating-star rating-star-medium-full"></span>
                                        <span class="rating-star rating-star-medium-full"></span>
                                    </span>
                                </div>
                                <p class="abstract">本文总结《蜘蛛侠：英雄远征》目前已知的彩蛋与细节，结合漫画出处讲解，方便大家观影时留意线索。 剧透预警！剧透预警！剧透预警！ 致敬与传承 托尼·斯塔克的离去对世...</p>
                                <div class="info">
                                    1334有用
                                </div>
                            </a>
                        </li>
                    </ul>
                    <div class="oia-wrap">
                        <a class="oia-btn" href="#" target="_blank">打开App看更多热门影评</a>
                    </div>
                </div>
            </section>
            <section class="interests">
                <header>
                    <h2>推荐蜘蛛侠：英雄远征的豆列</h2>
                </header>
                <div class="section-content">
                    <ul>
                        <li><a href="#">豆瓣电影【口碑榜】2019-07-02 更新</a></li>
                        <li><a href="#">豆瓣电影【口碑榜】2019-07-02 更新</a></li>
                        <li><a href="#">漫威电影宇宙(MCU)系列影视条目及顺序</a></li>
                        <li class="line"></li>
                        <li><a href="#">豆瓣电影【口碑榜】2019-07-02 更新</a></li>
                    </ul>
                </div>
            </section>
            <section class="types">
                <header>
                    <h2>
                        了解更多电影信息
                    </h2>
                </header>
                <div class="section-content">
                    <ul class="type-list">
                        <li><a href="#">返回电影首页<span></span></a></li>
                        <li><a href="#">新片速递<span></span></a></li>
                        <li><a href="#">冷门佳片<span></span></a></li>
                        <li><a href="#">更多电影分类<span></span></a></li>
                    </ul>
                </div>
            </section>
    </div>
  </div>
</div>
</template>

<script>
import {getAppraise,getStar,} from 'api/subject.js'
export default {
    name:'subject',
    async created(){
        let data = await getAppraise();
        this.total=data;
        this.interests = data.interests;
    },
    async created(){
        let data = await getStar();
        this.star= data.credits;
        this.celebrities = this.star[0].celebrities;
        console.log(this.celebrities);
        
        this.actor=this.star[1].celebrities;
        
    },
    data(){
        return {
            total:"",
            interests:[],
            celebrities:"",
            actor:[],
        }
    }
}
</script>

<style>
.page {
  padding-top: 47px;
  background: #fff;
  margin: 0 auto;
  overflow-x: hidden;
}
.page .card {
  margin: 0 18px;
}
.card h1 {
  margin: 30px 0 5px;
  font-size: 24px;
  line-height: 32px;
  word-break: break-all;
}
.subject-info {
  position: relative;
  overflow: hidden;
}
section {
  margin-bottom: 30px;
}
.right {
  float: right;
}
.right a {
  color: #42bd56;
  text-decoration: none;
}
.right a img {
  width: 100px;
  height: 142px;
  display: block;
}
.left {
  padding-bottom: 30px;
  margin-right: 100px;
}
section p {
  font-size: 15px;
  color: #494949;
  line-height: 22px;
}
.subject-info .rating {
  line-height: 18px;
}
.rating span {
  color: #aaa;
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
.rating-full {
  background: url();
}
.rating-gray {
  background: url();
}
.rating-full,
.rating-gray {
  width: 13px;
  height: 13px;
  background-size: 13px 13px;
}
.subject-info .meta {
  color: #494949;
  margin-top: 15px;
  font-size: 14px;
  line-height: 1.6;
  padding-right: 24px;
}
.mark-item {
  margin-bottom: 30px;
  display: flex;
  align-items: center;
}
.mark-item a {
  height: 30px;
  line-height: 30px;
  display: block;
  border: 1px solid #ffb712;
  border-radius: 3px;
  font-size: 15px;
  margin-right: 10px;
  color: #ffb712;
  text-align: center;
  flex: 1;
}
h2 {
    color: #aaa;
    margin: 0 0 15px;
    font-size: 15px;}


.items {
    font-size: 0;
    white-space: nowrap;
    overflow-x: auto;}
    .item{
        display: inline-block;
        vertical-align: top;
        width: 100px;
        text-align: center;
    }
     .item__celebrity{
        font-size: 14px;
        width: 75px;
        margin-left:0.12rem; 
    }
    .item-poster{
    width: 100%;
    overflow: hidden;
    background-size: cover;
    background-position: center;}
    section>ul>li>a{color: #111;}
    .item-title{
        display: -webkit-box;
    overflow: hidden;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 3;
    font-size: 14px;
    line-height: .2rem;
    white-space: normal;
    text-align: center;
    color: #494949;
    margin-top: 8px;
    }
    .item-poster:before {
    content: "";
    float: left;
    margin-top: 142.85714%;
}
    .role{color: #aaa;}
    .photo-list {
    position: relative;
    height: 120px;
    margin-left: -18px;
}
.photo-list ul {
    word-break: keep-all;
    white-space: nowrap;
    overflow: scroll;
    -webkit-overflow-scrolling: touch;
    width: auto;
    position: absolute;
    left: 0;
    right: -18px;
}

.photo-list ul {
    padding-bottom: 20px;
}
.photo-list ul li {
    margin: 0;
    height: 120px;
    overflow: hidden;
    display: inline-block;
}
.photo-list ul .video {
    width: 213.33333px;
    overflow: hidden;
    background-size: 100%;
}
.photo-list ul li:first-child {
    margin-left: 18px;
}
.video-trailer, .video-comment {
    position: relative;
}
.photo-list ul .video a {
    display: block;
    height: 100%;
    color: #fff;
    position: relative;
}
.photo-list ul .video span {
    position: absolute;
    width: 0;
    height: 0;
    left: 50%;
    top: 50%;
}
.photo-list ul .video img, .photo-list ul .video .img {
    height: 42px;
    width: 42px;
    display: inline-block;
    margin: -21px 0 0 -21px;
}
.video-trailer .time, .video-comment .time {
    color: #fff;
    position: absolute;
    right: 6px;
    bottom: 4px;
    font-size: 11px;
}
    .video-trailer:after, .video-comment:after {
    content: "预告片";
    position: absolute;
    top: 4px;
    left: 4px;
    color: #fff;
    background-color: #E48F1F;
    font-size: 11px;
    line-height: 1;
    padding: 3px 5px;
    border-radius: 2px;}
    .list li {
    position: relative;
    padding: 15px 18px 15px 0;
    word-wrap: break-word;
    overflow: hidden;
}
.list li::after {
    left: 0;
    bottom: 0;
    width: 100%;
    height: 1px;
    background: #E8E8E8;

    content: '';
    position: absolute;

}
.comment-list li .desc {
    font-size: 0;
    line-height: normal;
    margin: 0 0 11px;
    color: #494949;
    position: relative;
}
.list li .desc>a {
    display: inline;
}
.comment-list li .desc img, .comment-list li .desc .avatar {
    width: 36px;
    border-radius: 50%;
    vertical-align: text-top;
    margin-right: 10px;
    float: left;
}
.comment-list li .desc .user-info {
    margin-left: 40px;
}
.comment-list li .desc strong {
    font-size: 15px;
    display: inline-block;
    vertical-align: text-top;
    margin-right: 6px;
}
.comment-list li p {
    padding: 0 0 0 40px;
    line-height: 22px;
    color: #494949;
    white-space: pre-wrap;
}
.comment-list li .btn-info {
    height: 22px;
    margin: 10px 0 0 40px;
}
.comment-list li .desc .date {
    margin-top: 6px;
    font-size: 12px;
    color: #aaa;
}
.ic-btn {
    display: inline-block;
    margin-right: 20px;
    font-size: 14px;
    cursor: pointer;
}
.ic-btn.left {
    float: left;
}
.ic-btn::before {
    content: '';
    width: 20px;
    height: 20px;
    background-position: center center;
    background-repeat: no-repeat;
    display: inline-block;
    margin-bottom: -2px;
}
.ic-btn-like::before {
    background-image: url();
}
.ic-btn .text {
    color: #ccc;
    margin-left: 3px;
    position: relative;
    left: 0;
    top: -3px;
}
.ic-btn {
    display: inline-block;
    margin-right: 20px;
    font-size: 14px;
    cursor: pointer;
}
.ic-btn.right {
    float: right;
}
.ic-btn::before {
    content: '';
    width: 20px;
    height: 20px;
    background-position: center center;
    background-repeat: no-repeat;
    display: inline-block;
    margin-bottom: -2px;
}
.ic-btn-more::before {
    background-image: url();
}
.comment-list li::after {
    height: 0;
    left: 34px;
    right: 0;
}
.subject-reviews .list li .abstract, .subject-reviews .list li .info, .review-list .list li .abstract, .review-list .list li .info {
    line-height: 1.5;
    font-size: 12px;
    color: #aaaaaa;
}

.subject-forum-topics>ul>li a{
    color: #111;
}
.subject-forum-topics ul li .info {
    font-size: 14px;
    line-height: 1;
    margin-top: 5px;
    color: #ccc;
}
.subject-forum-topics ul li h3 {
    font-size: 17px;
    font-weight: 500;
    margin: 0;
    line-height: 1.41;
    color: #494949;
}
.subject-rec .bd {
    position: relative;
    height: 160px;
    margin-left: -18px;
}
.subject-rec ul {
    word-break: keep-all;
    white-space: nowrap;
    overflow: scroll;
    width: auto;
    position: absolute;
    left: 0;
    right: -18px;
}
.subject-rec ul li {
    width: 80px;
    overflow: hidden;
    background: #fff;
    display: inline-block;
    margin: 0 8px 8px 0;
    vertical-align: top;
}
.subject-rec ul li:first-child {
    margin-left: 18px;
}
.subject-rec ul .wp {
    text-align: center;
}
.subject-rec img {
    width: 100%;
    height: 112px;
}
.subject-rec h3 {
    font-size: 15px;
    line-height: 18pt;
    white-space: normal;
    display: -webkit-box;
    overflow: hidden;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
    text-align: center;
    color: #494949;
    margin-top: 8px;
}
.list {
    margin-right: -18px;
}
.list li {
    position: relative;
    padding: 15px 18px 15px 0;
    word-wrap: break-word;
    overflow: hidden;
}
.list a {
    display: block;
    overflow: hidden;
    text-decoration: none;
    color: #494949;
}
.subject-reviews .list li h3, .review-list .list li h3 {
    margin-bottom: 6px;
}
.subject-reviews .list li h3, .review-list .list li h3 {
    color: #494949;
    font-weight: 500;
    font-size: 17px;
    line-height: 1.41;
}
.list li .info {
    font-size: 15px;
    margin-top: 10px;
    color: #ccc;
}
.subject-reviews .list li .info, .review-list .list li .info {
    line-height: 1;
}
.oia-wrap {
    padding: 20px 0;
}
a.oia-btn {
    height: 38px;
    line-height: 38px;
    font-size: 15px;
    width: 100%;
    max-width: 345px;
    margin: 0 auto;
    text-align: center;
    background-color: #42BD56;
    color: #fff;
    display: block;
    border-radius: 40px;
}
.interests ul {
    white-space: nowrap;
    overflow-x: auto;
    padding: 0px 15px 5px 15px;
    font-size: 0;
    margin-left: -5px;
}
.interests li {
    margin: 0 0 8px 8px;
    font-size: .18rem;
    display: inline-block;
    border-radius: .05rem;
    border: solid 1px #42bd56;
    vertical-align: middle;
}
.interests a {
    height: 50px;
    line-height: 50px;
    padding: 0 .20rem;
    letter-spacing: .1em;
    overflow: auto;
    display: block;
    text-align: center;
}
.interests li.line {
    width: 100%;
    display: block;
    height: 1px;
    border: 0;
    margin: 0;
}
.type-list {
    padding: 0 0 .31rem;
    color: #eee;
    font-size: .14rem;
    overflow: hidden;
}
.type-list li {
    position: relative;
    width: 49.5%;
    border-right: solid 1px #eee;
    float: left;
    padding-right: .2rem;
    height: .41rem;
}
.type-list a {
    position: absolute;
    top: 0px;
    left: 4px;
    display: inline-block;
    padding-left: 6px;
    width: 100%;
    line-height: .41rem;
}
.type-list li a span {
    color: #ccc;
    position: absolute;
    top: 20px;
    right: 15px;
    font-weight: bold;
    display: inline-block;
    border-right: solid 1px #ccc;
    border-bottom: solid 1px #ccc;
    width: .12rem;
    height: .12rem;
    transform: rotate(-45deg);
    margin-top: -.05rem;
}
.type-list li:nth-child(even) {
    border-right: none;
    padding-left: 1.12rem;
}
.type-list li:last-child, .type-list li:nth-last-child(2) {
    border-top: solid 1px #eee;
}
.type-list li:nth-child(even) {
    border-right: none;
    padding-left: 1.12rem;
}

</style>
