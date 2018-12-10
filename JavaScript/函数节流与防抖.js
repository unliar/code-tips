// throttle 函数节流

// 指定时间只会执行一次的
const throttle = (fn, time = 2000) => {
  let lastTime = 0;
  return (...args) => {
    let startTime = +new Date();
    if (startTime - lastTime < time) {
      return;
    }
    lastTime = startTime;
    return fn(...args);
  };
};

// debounce
// 超过指定时间才会执行

const debounce = (fn, time) => {
  let timeId;
  return (...args) => {
    if (timeId) {
      clearTimeout(timeId);
    }
    timeId = setTimeout(() => {
      fn(...args);
      timeId = null;
    }, time);
  };
};
