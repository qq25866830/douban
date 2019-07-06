const path = require('path');

module.exports = {
    //服务器的搭建
    devServer:{
        open:true,
        proxy:{
            "/rexxar":{
                target:'https://m.douban.com',
                changOrigin:true,
            },
            "/api":{
                target:'https://market.douban.com',
                changOrigin:true,
            }
        }
    },
    configureWebpack:{
       
        resolve:{
            alias:{
            "@":path.resolve(__dirname,"./src"),
            'api':path.resolve(__dirname,'./src/api'),
            'router':path.resolve(__dirname,'./src/router'),
            'store':path.resolve(__dirname,'./src/store'),
            'common':path.resolve(__dirname,'./src/common'),
            'components':path.resolve(__dirname,'./src/components'),
            'utils':path.resolve(__dirname,'./src/utils'),
            'views':path.resolve(__dirname,'./src/views'),
            'public':path.resolve(__dirname,'./public'),
            }
        }
    }


}