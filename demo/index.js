var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
//布尔值
var isDone = true;
//数字
var num = 10;
//字符串
var _name = "test";
//数组
var list = [1, 2, 3];
var list2 = [1, 2, 3];
//元组Tuple
var x = ['hello', 20];
//any void null undefined never
/*
    any是所有的类型都可以
    void 是 函数无返回
    null和undefined的类型分别是自身
    never 表示用不存在的值，例如函数throw new Error时函数无法执行到最后，即never
*/
//枚举 enum
var color;
(function (color) {
    color[color["red"] = 0] = "red";
    color[color["green"] = 1] = "green";
    color[color["blue"] = 2] = "blue";
})(color || (color = {}));
var c = color.green;
var Color;
(function (Color) {
    Color[Color["Red"] = 1] = "Red";
    Color[Color["Green"] = 2] = "Green";
    Color[Color["Blue"] = 4] = "Blue";
})(Color || (Color = {}));
var y = Color.Green;
//类型断言  即程序员更清晰这个数据的类型，从而在编译阶段使用断言
var someValue = "test";
var strlength = someValue.length;
var strlength2 = someValue.length;
//泛型
/*
* 泛型用来规定两个变量或者数据的类型是相同的，但是这两个数据的具体类型是不知道的，如果使用any会造成两个数据类型的不同，使用具体的又不满足需求
* 泛型在函数中就是一个类型变量
* 泛型函数，泛型类，泛型接口
*
*/
function identity(arg) {
    return arg;
}
// 这就保证了函数identity的输入参数类型和返回类型是同一个类型的，既可以直接指定类型，也可以通过类型推断得出具体类型
var output = identity("myString"); //let output = identity("myString");
//泛型的数组形式
//在打印length的时候要求arg有length属性，而number没有length，所以会报错，这里就是用T[]表示这是一个T类型的数组
// function loggingIdentity<T>(arg: T[]): T[] {//function loggingIdentity<T> (arg:Array<T>):Array<T>{
// 	console.log(arg.length);  // Error: T doesn't have .length
// 	return arg;
// }
//泛型函数
var fun = function (arg) {
    return arg;
};
//泛型函数比普通函数多了泛型规定，即函数名字后面跟上<T>确定泛型参数(arg:T)表明参数的类型是泛型T，=>T  表名返回的是T   通过这种形式表明此函数的三点1，类型参数，2，数据参数的类型，3，函数的返回值类型
//泛型接口
// interface test<T>{
// 	//这个接口规定了继承自此接口的必须要有一个方法是返回值类型和参数类型相同的！
// 	(arg: T): T;
// }
//
// function aaa<U>(arg:U):U{
// 	return arg
// }
// let a4:test<number> = aaa;
//泛型类
var testClass = (function () {
    function testClass() {
    }
    return testClass;
}());
var tt = new testClass();
tt.zeroValue = 22;
tt.add(2, 3);
function created(c) {
    return new c();
}
function loggingIdentity(arg) {
    console.log(arg.length); // Error: T doesn't have .length
    return arg;
}
//泛型约束
//ts 类
//默认为public,
//当成员被标记成private时，它就不能在声明它的类的外部访问
//protected修饰符与private修饰符的行为很相似，但有一点不同，protected成员在派生类中仍然可以访问
var a = (function () {
    function a() {
    }
    a.b = function (str) {
        //静态方法
    };
    a.prototype.c = function () {
        //公共方法
    };
    return a;
}());
//类使用extends进行继承
var xxx = (function (_super) {
    __extends(xxx, _super);
    function xxx() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return xxx;
}(a));
var testClass2 = (function () {
    function testClass2() {
    }
    testClass2.prototype.c = function () {
    };
    return testClass2;
}());
var testObj = new testClass2();
//类继承接口使用implements
//接口继承类使用extends
//接口继承接口使用 extends
var testAnimal = (function () {
    function testAnimal() {
    }
    return testAnimal;
}());
var testClass3 = (function (_super) {
    __extends(testClass3, _super);
    function testClass3() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    testClass3.prototype.ook = function () { console.log(123); };
    return testClass3;
}(testAnimal));
//抽象类和抽象方法和接口类似，都不实现具体的需求，都是在派生类中实现具体的方法体，都是只提供类的的必须属性
//
//内部模块可以使用命名空间  namespace
var validata;
(function (validata) {
    var testObj = "123";
})(validata || (validata = {}));
//这样使用第三方的东西就会提示$没有查找到
$.ajax();
