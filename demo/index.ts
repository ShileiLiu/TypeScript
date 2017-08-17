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
// 这就保证了函数identity的输入参数类型和返回类型是同一个类型的，既可以直接指定类型，也可以通过类型推断得出具体类型
let output = identity<string>("myString");//let output = identity("myString");
//泛型的数组形式
//在打印length的时候要求arg有length属性，而number没有length，所以会报错，这里就是用T[]表示这是一个T类型的数组
// function loggingIdentity<T>(arg: T[]): T[] {//function loggingIdentity<T> (arg:Array<T>):Array<T>{
// 	console.log(arg.length);  // Error: T doesn't have .length
// 	return arg;
// }
//泛型函数
let fun : <T>(arg:T) => T = function<T>(arg:T):T{
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
class testClass<T> {
	zeroValue: T;
	add: (x: T, y: T) => T;
}
let tt = new testClass<number>();
tt.zeroValue = 22;
tt.add(2,3);
function created<T>(c:{new():T}): T{
	return new c();
}
interface lengthMust{
	length:number;
}

function loggingIdentity<T extends lengthMust>(arg: T): T {
	console.log(arg.length);  // Error: T doesn't have .length
	return arg;
}
//泛型约束


//ts 类
class a{
	constructor(){

	}
	static b(){
		//静态方法
	}
	public c(){
		//公共方法
	}
	private d(){
		//私密方法
	}
	protected e(){
		//派生类可以使用
	}
}
