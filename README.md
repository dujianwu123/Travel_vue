#基于VUE的去哪儿首页及地址功能项目

## 此项目开发时的用的仓库是码云，

地址为https://gitee.com/dujianwu123/Travel_vue

##手机扫描二维码

![image](https://github.com/dujianwu123/Travel_vue/blob/master/dist/static/image/Travel_vue_SHOW.png)

##启动打包
npm install
npm run dev
npm run build

##一、初始化项目
> npm install fastclick --save 解决移动端click事件300ms的延迟

> 使用 --  fastClick.attach(document.body) 绑定在body上

> reast.css 清除默认样式

> border.css 解决1pxborder 如在下边框用1px边框，class="border-bottom"即可

##二、配置 stylus

npm install stylus --save

npm install stylus-loader --save

创建个styles_alias 路径的别名

在 css中用import 前要加@ 不是别名@

用styles_alias 路径别名时前面要加 ~

@import '~styles_alias/varibles.styl'


##index-banner-swiper

npm install 

vue-awesome-swiper@2.6.7 --save

##axios

因为如果在home的子组件中请求需要请求好多个，所以在home中请求

只有把文件放到static目录中才可以直接去访问

忽略git上传 mock

上线时用的是/api/index.json 这样的路径

所以要把 /static/mock/index.json poxcy转发下

在config/index下设置就行

##城市选择滚动  

npm install better-scroll --save

需要满足better-scroll 规定的结构

##滑动时候警告：Unable to preventDefault inside passive event listener  解决

 * { touch-action: pan-y; } 

 ##拖动字母是，页面也会跟着拖动，此时设置
 @touchstart.prevent="handleTouchStart"

 ##一部分手机展示会出现白屏是因为不支持es6
 npm i babel-polyfill
 在 main.js 中引入下即可


