"use strict";
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
exports.__esModule = true;
var isDone = true;
var num = 10;
var _name = "test";
var list = [1, 2, 3];
var list2 = [1, 2, 3];
var x = ['hello', 20];
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
var someValue = "test";
var strlength = someValue.length;
var strlength2 = someValue.length;
function identity(arg) {
    return arg;
}
var output = identity("myString");
var fun = function (arg) {
    return arg;
};
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
    return arg;
}
var a = (function () {
    function a() {
    }
    a.b = function (str) {
    };
    a.prototype.c = function () {
    };
    return a;
}());
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
    testClass3.prototype.ook = function () { };
    return testClass3;
}(testAnimal));
var validata;
(function (validata) {
    var testObj = "123";
})(validata || (validata = {}));
$.ajax();
var sym2 = Symbol();
exports["default"] = sym2;
//# sourceMappingURL=index.js.map