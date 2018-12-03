# 算法简介

## 二分查找

> 二分查找是一种算法,输入必须是有序的元素序列.

* 二分查找对于n个元素的列表,最多需要log2 N 步, 简单查找最多需要n步


## 大O表示法
> 用于指出算法时间的增速,表示了最糟糕的情况下的运行时间
```
例如:

检查长度为n的列表,才用户二分查找法需要log n次操作,运行时间表示为O(log n).
```
* 5种常见算法的运行时间
  
  1. O(log n) 对数时间 ---> 常见的二分查找
  2. O(n) 线性时间 ----> 简单查找
  3. O(n * log n)------>快排
  4. O(n*n)------> 选择排序
  5. O(n!)-------> 旅行商问题