Function.prototype.bind = function() {
  let [obj] = Array.from(arguments);
  let args = Array.from(arguments).slice(1);
  let that = this;
  return function() {
    that.apply(obj, [...args, ...arguments]);
  };
};

// Function.prototype.bind = function(obj) {
//   return (...args) => this.apply(obj, args);
// };

// Function.prototype.bind = function(obj) {
//   return (...args) => this.call(obj, ...args);
// };
