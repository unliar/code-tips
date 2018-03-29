# 前端相关

## 前端错误监控上报
> [MDN onerror](https://developer.mozilla.org/zh-CN/docs/Web/API/GlobalEventHandlers/onerror)
```
/**
 * 错误处理
 * 
 * @param {string} message - 错误信息（字符串）
 * @param {string} source - 发生错误的脚本URL
 * @param {number} lineno - 发生错误的行号
 * @param {number} colno - 发生错误的列号 
 * @param {object} error- 发生错误的对象
 */
window.onerror = function(message, source, lineno, colno, error) { ... }
```
## ES6模块与CommonJS模块差异
>Tips：Nodejs中使用的是CommonJS,因此模块在导出的时候所有的导出值就已经确定了,但是你可以通过导出一个函数返回模块内部未导出的值来实现动态值。
1. CommonJS模块输出的是一个值的拷贝,ES6模块使用的是值的引用。
2. CommonJS模块在运行是加载,ES6 模块编译时输出。

## exports与module.exports
>Tips: Nodejs使用的实际上是module.exports,exports是对module.exports的引用,exports=module.exports,模块在导出时使用的是module.exports。

```
// 如果直接修改exports,相当于直接断开了与module.exports的引用

exports={hah:111}

module.exports={hah:222}

// 外部模块获取到的是{hah:222}

```

```
// module.exports 已存在

module.exports = { a: 2222 }

exports.a = 2232323  //此时还会变吗？

外部模块仍然获取到的是{ a: 2222 }
```

```
// 直接修改module.exports

module.exports = { a: 2222 }

module.exports.a=100000

//外部模块获取到的a的值已改变
```

## JavaScript的数据类型
>[JavaScript中基本数据类型和引用数据类型的区别](https://www.cnblogs.com/cxying93/p/6106469.html)

1. 基础数据类型/简单的数据段：Number、String、Boolean、Null、Undefined
    * 按值访问,因此赋值操作实际上是对值进行了一份拷贝。


2. 引用数据类型/多个数据段的组合: Array,Object,Fuction
    * 访问对象时,拿到的是对象在堆内存中的地址,按照地址去寻找对象中的值。这就是传说中的按引用访问。
    * 赋值操作时,实际上是复制了一个对象在内存的地址,寻找到的是同一个对象，因此改变一个的对象的值会导致另外一个对象被改变。[Object.assign](https://zhuanlan.zhihu.com/p/29235193)可以用来拷贝引用对象的可枚举属性。
