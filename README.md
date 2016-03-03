angular-with-jqueryui-example
=============================
### 主要结构

node, bower, bootstrap, jqueryui, angularjs

node搭建服务  

bower将静态资源托管至public文件夹，该方法使用时需安装bower，将需要的文件使用bower install xxx --save 写入bower.json  

bootstrap设置公共样式  

核心功能是jQueryui各个常用组件demo的集合  

angularjs完成菜单配置及数据展示


### 安装的模块写入依赖文件

npm install 模块名 不能写入package.json
npm install 模块名 --save 才能写入package.json
npm uninstall 模块名 卸载已经安装的模块


### consolidate 模块

consolidate.js 是一款js模板引擎整合库，支持流行的多种模板引擎


### swig 模块

js模板引擎  
因为模板文件直接使用html格式，所以在网上搜到了swig和consolidate来实现



###swig 和 angular 双括号冲突

通过修改angular的字符匹配来解决
var ajudemo = angular.module('ajudemo', ['ngRoute'], function ($interpolateProvider) {
	$interpolateProvider.startSymbol('[[');
	$interpolateProvider.endSymbol(']]');
});


//2016-03-03 v1.0 完成基本功能
//包括：1，菜单配置，点击菜单正确高亮相应条目
//2, 点击菜单正确跳转页面
//3, 完成jQueryui常用组件的基本使用demo

//v2.0 预计增加的功能
//1, 页面美化
//2, 使用angularjs进行jQueryui组件交互后的正确模型内容展示
//3，组件的简单扩展
