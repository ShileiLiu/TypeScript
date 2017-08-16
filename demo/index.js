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
// 这就保证了函数identity的输入参数类型和返回类型是同一个类型的 
