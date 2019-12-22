# koa2+typescript
Node.js 的简单后台服务

暂时使用koa2+typescript+koa-router

## 启动
### 终端1
#### 启动&&自动重启
使用 `nodemon` 启动项目，`build` 文件夹下有文件变化就会重启
```
yarn start
```

### 终端2 
使用 `tsc -w` 监听 `app` 下文件的变化，自动编译成 js ，输出到 `build`
```
yarn build:w
```

