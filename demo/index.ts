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

//泛型
/*
* 泛型用来规定两个变量或者数据的类型是相同的，但是这两个数据的具体类型是不知道的，如果使用any会造成两个数据类型的不同，使用具体的又不满足需求
* 泛型在函数中就是一个类型变量
* 泛型函数，泛型类，泛型接口
*
*/
function identity<T>(arg: T): T {
	return arg;
}
// 这就保证了函数identity的输入参数类型和返回类型是同一个类型的