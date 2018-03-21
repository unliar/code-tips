# 前端相关

## 前端错误监控
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

