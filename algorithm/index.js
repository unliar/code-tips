// 快速排序
const quickSort = arr => {
  // 基线条件
  if (arr.length < 2) {
    return arr;
  }
  // 选取中间的一个数据
  const mid = Math.floor(arr.length / 2);
  // 定义临时变量
  const temp = arr.splice(mid, 1)[0];
  const left = [];
  const right = [];
  // 遍历判断
  for (let index = 0; index < arr.length; index++) {
    const element = arr[index];
    if (element < temp) {
      left.push(element);
    } else {
      right.push(element);
    }
  }
  return [...quickSort(left), temp, ...quickSort(right)];
};

// 冒泡
const bubbleSort = arr => {
  let flag = false;
  for (let index = 0; index < arr.length - 1; index++) {
    for (let j = 0; j < arr.length - index - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        const temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
        flag = true;
      }
    }
    if (flag) {
      return arr;
    }
  }
};
