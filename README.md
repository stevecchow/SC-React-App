# SC前端项目框架（需严格遵守一下规范及说明）
## 技术栈 React+Dva+Less
### 注意事项：
1. 采用eslint作为静态代码检测工具，禁止修改/.eslintc；
2. 网络请求统一使用Axios，并在/src/service文件夹定义网络请求action，不能在业务代码中直接使用。统一Axios请求方法已定义在/src/utils/request.js；
3. 使用Dva作为统一状态管理机，禁止再集成使用Redux或Mobx等状态管理机；
4. 组件及页面容器，均由文件夹统一管理。每个文件夹包含jsx、less文件。参考 /src/components/UserContent和src/pages/App/Dva；
5. 配置文件位于/src/config/*；
6. 以下文件夹或文件禁止修改
   * /config 目录
   * /script 目录
   * .editorconfig 文件
   * .eslintignore 文件

### 各环境区分命令：
+ 根据环境变量区分process.env.REACT_APP_SECRET_BUILD_TYPE各环境配置，配置文件位于/src/config/*，配置引用产考/src/utils/request.js对API的引用。
+ 编译命令配置位于package.json文件的script对象：
  * 开发：npm start【默认使用dev配置】
  * 测试环境：npm run build:test【使用test配置】
  * sit环境：npm run build:sit 【使用sit配置】
  * uat环境：npm run build:uat 【使用uat配置】
  * 生产环境 npm run build:prod 【使用prod配置】

### src文件目录结构
+ /src/components 组件
+ /src/config 环境配置
+ /src/constants 静态页面配置
+ /src/i18n 国际化
+ /src/images 图片
+ /src/models Dva的models
+ /src/page 页面容器
+ /src/routes 路由
+ /src/service 页面网络请求Action
+ /src/utils 公共方法及axios
+ /src/index.js 入口文件
+ /src/index.less 公共样式



