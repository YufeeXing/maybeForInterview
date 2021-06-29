// reduce实现
Array.prototype.myReduce = function (callback, intialValue) {
    if (!Array.isArray(this) || !this.length || typeof callback !== 'function') {
      return []
    }
    const hasIntial = typeof intialValue !== 'undefined';
    let value = hasIntial ? intialValue : this[0];
    for (let i = hasIntial ? 0 : 1; i < this.length; i++) {
      console.log("~", this[i]);
      value = callback(value, this[i], i, this)
    }
    return value;
  }
  // test
  let arr = [1, 2, 3, 4, 5]
  let res = arr.myReduce((pre, cur, i, arr) => {
    console.log(pre, cur, i, arr)
    return pre + cur
  }, 10)
  console.log(res)//25