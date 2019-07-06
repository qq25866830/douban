<template>
<div>
    <div class="page">
        <div class="card">
            <section class="header-subject-title">
                <a href="#">
                    <img src="https://img1.doubanio.com/view/photo/s_ratio_poster/public/p2550468688.webp" alt="">
                    <span class="title">我们在行动 第三季</span>
                    <span class="rating">暂无评分</span>
                </a>
            </section>
            <section>
                <h2 class="sec-title">完整版在线观看</h2>
                <ul class="list vendor-list">
                    <li>
                        <a href="#">
                            <span class="name youku">优酷视频</span>
                            <span class="price">免费</span>
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <span class="name youku">优酷视频</span>
                            <span class="price">免费</span>
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <span class="name youku">优酷视频</span>
                            <span class="price">免费</span>
                        </a>
                    </li>
                </ul>
            </section>
        </div>
    </div>
</div>
</template>

<script>
export default {

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
section {
    margin-bottom: 30px;
}
.header-subject-title {
    font-size: 15px;
    margin: 0 -18px;
    border-bottom: 1px solid #f3f3f3;
    padding: 10px 18px;
    line-height: 24px;
    display: block;
}
.header-subject-title img, .header-subject-title .subject-cover {
    height: 24px;
    margin-right: 6px;
    float: left;
    vertical-align: middle;
}
.header-subject-title .title {
    color: #42bd56;
    margin-right: 4px;
}
.header-subject-title .rating {
    color: #aaa;
    font-size: 14px;
}
section h2.sec-title {
    font-size: 15px;
    line-height: 25px;
    color: #aaa;
    padding: 10px 0;
    margin: 0;
    margin-right: -18px;
    position: relative;
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
.vendor-list li a {
    display: block;
    font-size: 17px;
}
.vendor-list li {
    position: relative;
    cursor: pointer;
}
.vendor-list li:first-child {
    padding-top: 15px;
}
.vendor-list li a .name {
    color: #42bd56;
}
.vendor-list li a .price {
    color: #494949;
    position: absolute;
    left: 50%;
    top: 16px;
    font-size: 15px;
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
</style>
