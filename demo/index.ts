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
	return arg;
}
//泛型约束


//ts 类
//默认为public,
//当成员被标记成private时，它就不能在声明它的类的外部访问
//protected修饰符与private修饰符的行为很相似，但有一点不同，protected成员在派生类中仍然可以访问
class a{
	name:string
	
	static b(str:string){ 
		//静态方法
	}
	public c(){
		//公共方法
	}
}
//类使用extends进行继承
class xxx extends a{

}
interface testInter {
	
}
interface testInter2 extends testInter{
	
}
interface testInter3 extends a{
	
}
class testClass2 implements testInter3{
	name:"test";
	public c(){
		
	}
}
let testObj = new testClass2();

//类继承接口使用implements
//接口继承类使用extends
//接口继承接口使用 extends

abstract class testAnimal{//抽象类，抽象类一般不会直接实例化，而是
	abstract ook():void//抽象方法只能在派生类中实现，//不能有{}作为函数体。只能说这个是一个方法
}
class testClass3 extends testAnimal{
	ook(){}
}
//抽象类和抽象方法和接口类似，都不实现具体的需求，都是在派生类中实现具体的方法体，都是只提供类的的必须属性

//
//内部模块可以使用命名空间  namespace
namespace validata{
	let testObj:string = "123"
}

declare let $:any//加了declare就知道$来自第三方，类型是any所以就忽略了$，这样使用jquery就不会报错了
//这样使用第三方的东西就会提示$没有查找到
$.ajax()


//2017.8.19
//声明合并

//接口合并
namespace box{
	interface box{
		width:number
		height:number
	}
	interface box{
		scale:number
	}
	//接口的非函数的成员必须是唯一的。 如果两个接口中同时声明了同名的非函数成员编译器则会报错。
	//对于同名函数成员相当于是后面的重载前面的，后面的有较高的优先级
}
//Symbols
//declare let Symbol:any;
//Symbol是TS和ECMAscript2015支持的原生类型。
//唯一存在的值，可以作为对象的键使用，避免重复键的出现

let sym2 = Symbol();
//let sym:symbol = Symbol("key");

//补充ES6
//Symbol('KEY')和Symbol.for('KEY')两种模式不同
//前一种新建一个symbol，但是不注册在Symbol队列里。无法使用Symbol.keyFor查找到
//即  let s1 = Symbol('key') Symbol.keyFor(s1) undefined;
//后一种新建Symbol，且注册在Symbol队列里，可以使用Symbol.keyFor查找到
//即let s2 = Symbol.for('key');  Symbol.keyFor(s2)  'key';

/*
 *模块
 * export导出  模块导出可以导出对象，类，接口，函数，变量
 * 导出使用as重命名
 * export { Zip as main };即导出Zip使用main重命名，导出的内容的名字就是main
 * 
 * default导出，即默认导出
 * 
 * 同理，import也可用重命名  import a as b from '../c';即从c中导入a但是存放的变量是b
 * 
 * import * as vali from "./ZipCodeValidator";将整个模块以vali的名字导入，
 * 直接导入模块存在副作用的 例如 import 'index.js';
 * 
 * 
 * 
 * export = 和 import = require()
 *	CommonJS和AMD都有一个exports对象的概念，它包含了一个模块的所有导出内容。
 * 若要导入一个使用了export =的模块时，必须使用TypeScript提供的特定语法import module = require("module")。
 * 
 * 
 * */
export default sym2;

