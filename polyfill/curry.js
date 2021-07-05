// 实现柯里化函数

function add(x, y) {
  return x + y;
} 
function curry(fn) {
  const length = fn.length;

  return function inner(...args) {
    // 在到达真实需要传参的个数前，通过bind带上参数返回函数
    if (args.length >= length) {
      return fn.apply(null, args);
    } else {
      return inner.bind(null, ...args);
    }
  };
}

const addCurry = curry(add);
console.log(addCurry(1)(2));
