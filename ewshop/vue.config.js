// 起别名
module.exports = {
    // 引入webpack
    configureWebpack : {
        // webpack中设置别名时使用的插件
        resolve: {
            alias: {//修改 Vue 被导入时候的包的路径
                'assets': '@/assets',
                'components': '@/components',
                'network': '@/network',
                'utils': '@/utils',
                'views': '@/views',
            }
        }
    },
    publicPath: './'
}
// 设置别名后需要重启才能生效
// 在模板里面使用别名：需要在别名前面加上 ~ ，否则会默认在当前目录下查找