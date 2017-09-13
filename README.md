# TypeScript学习笔记与源码




2017.8.28
ts是静态类型而不是强类型
在编译期执行并拿到具体的类型保证工程的稳定性。

2017.9.13
我是微软雅黑
ts配置ts.config.js
{
    "compilerOptions": {//默认配置
        "module": "commonjs",
        "target": "ES5",//目标
        "experimentalDecorators": true,
        "noImplicitAny": true,
        "removeComments": true,
        "preserveConstEnums": true,
        "sourceMap": true
    },
    "include":[//要编译的ts文件
    	"demo/*"
    ],
    "extends":""//从其他文件继承配置
}
