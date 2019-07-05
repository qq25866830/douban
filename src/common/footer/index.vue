<template>
    
        <div class="download-app">
            <div class="info">
                <img :src='footerlogo' alt="" width="48">
                 <div class="info-content">
                    <strong>豆瓣</strong>
                 </div>
            </div>
            <a href="javascript:;">去 App Store 免费下载 iOS 客户端</a>
           

        </div>
  
</template>

<script>
export default {
    
    data() {
        return {
            footerlogo:"https://img3.doubanio.com/f/talion/7837f29dd7deab9416274ae374a59bc17b5f33c6/pics/card/douban-app-logo.png"
        }
    },
}
</script>

<style >

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
