# umi project



## 如何运行项目？

Install dependencies,

```bash
$ yarn
```

Start the dev server,


```bash
$ yarn start
```


打包部署

```bash
$ yarn build 
```





## 项目目录结构

```
├─.umirc.js （umi的配置入口文件）
├─src
|  ├─global.css （全局css）
|  ├─store  （redux相关）
|  ├─pages  （页面文件）
|  ├─layouts  （umi的页面配置文件）
|  ├─context （useContext的共用对象）
|  ├─config
|  |   ├─eventKey.js （全局订阅事件的key名配置文件）
|  |   ├─localKey.js（本地储存key的配置文件）
|  |   └router.js (路由配置文件)  
|  ├─components （公用组件存放地）
|  ├─assets（公共的css、js、img存放地）
|  ├─api （网络请求相关的函数）
```