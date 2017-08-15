//布尔值
let isDone: boolean = true;
//数字
let num:number = 10;
//字符串
let _name:string = "test";
//数组
let list:number[] = [1,2,3];
let list2:Array<number> = [1,2,3];
//元组Tuple
let x:[string,number] = ['hello',20];
//any void null undefined never
/*
	any是所有的类型都可以
	void 是 函数无返回
	null和undefined的类型分别是自身
	never 表示用不存在的值，例如函数throw new Error时函数无法执行到最后，即never
*/
//枚举 enum
enum color {red,green,blue}
let c:color = color.green;

enum Color {Red = 1, Green = 2, Blue = 4}
let y: Color = Color.Green;

//类型断言  即程序员更清晰这个数据的类型，从而在编译阶段使用断言
let someValue:any = "test";
let strlength: number = (someValue as string).length;
let strlength2:number = (<string>someValue).length;