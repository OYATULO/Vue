// const { VueLoaderPlugin } = require("vue-loader");

module.exports={
    entry:{
        index:"./src/js/index.js",
        about:"./src/js/about.js"
    },
    output:{
        filename:"js/[name]/[name].js"
    }
    // optimizations:{
    //     splitChunks:{
    //         chunks:'all',
            
    //     }
    // }

}