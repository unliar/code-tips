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