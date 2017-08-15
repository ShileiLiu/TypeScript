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
