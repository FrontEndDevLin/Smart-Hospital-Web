### 目录介绍
* /dist *构建生成目录*
* /src  *项目主目录*
* /src/components *存放公用组件*
* /src/layout *存放样式文件，文件夹名请与pages目录一致，不放/components目录中的样式*
* /src/pages  *页面文件*
* /src/router *路由处理目录*
* /src/main.js  *项目入口文件*
* /webpack.config.js  *webpack配置文件，后续优化可在里面配置*


### 命名规范
#### 文件命名
* react组件，采用大驼峰命名，原因为react组件属于构造函数(类)
* 样式文件命名采用中横线命名法 xxx-xxx.less/css
* 其他js文件使用小驼峰命名


### 项目操作
#### 初始化
> npm install
#### 运行
> cd ./项目目录

> npm start
#### 构建
> npm run build