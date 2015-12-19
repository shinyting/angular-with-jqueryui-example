angular-with-jqueryui-example
=============================

### 安装的模块写入依赖文件

npm install 模块名 不能写入package.json
npm install 模块名 --save 才能写入package.json
npm uninstall 模块名 卸载已经安装的模块


### consolidate 模块

consolidate.js 是一款js模板引擎整合库，支持流行的多种模板引擎


### swig 模块

js模板引擎



###swig 和 angular 双括号冲突

通过修改angular的字符匹配来解决
var ajudemo = angular.module('ajudemo', ['ngRoute'], function ($interpolateProvider) {
	$interpolateProvider.startSymbol('[[');
	$interpolateProvider.endSymbol(']]');
});
