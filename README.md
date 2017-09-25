###一、目录结构
```
    --app
      --component
        --common
        --content
        --widget
      --page
        --页面模块
      --index.html
      --index.jsx
    --mock
```
 
###二、发布目录结构
```
webroot
    ——assets
      —-htcx
        --js
          --.js
        --img
          --.png/jpg
    ——tempalte 
      --htcx
        --index.html
```

###1、第一步
  npm install -g webpack@2
  npm install -g webpack-dev-server@2

###2、第二步
  npm install

###3、本地调试
  npm run dev 启动本地server,同时会启动代理server

###4、生产环境打包
  npm run build

