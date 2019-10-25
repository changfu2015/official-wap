# official-wap
# author chenchangfu

#简介：搭建这个脚手架是为了整合之前公司官网，解决旧的开发方式中诸多不便；1、传统静态页面各文件无法按模块分开发（可以用common.js 等，不过个人感觉还是没有自动化构建方便），2、发布时候会存在缓存问题，3、通用模板不能抽离（需要依赖后端模板引擎）4、如果用vue-cli脚手架会把页面的节点内容打包入js不利于搜索引擎的爬取（本项目官网需要考虑收录）（不过加入了国际化还是无法被爬取，因为内容也打包入了js，如果要实现国际化也要爬取的需要在服务端实现国际化输出，在不考虑国际化情况下是可以实现seo的），ps:搭建脚手架开发时并不需要国际化，后来需求修改


config 目录为多页面的模板配置：（需要添加或者删除页面可在template.config.js 配置，ico 可以在htmlPlugins.config.js 修改）

src ：中源码
common：通用js、template、等通用组件可以放入

lang: 国际化配置文件

public: 静态资源不需要打包编译

scss：css文件 ps：本打算重新修改下原来css，改为scss 感觉太麻烦就没有集成，有需要可以自行在
webpack.base.config.js集成

templates：模板文件打包后可以在html源码中看到内容，不会被打包入js中
images：网站图片


