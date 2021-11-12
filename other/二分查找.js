// 二分查找法
const arr = [1, 3, 5, 8, 13, 15, 19, 21, 26, 33, 37, 45, 66, 78];

function bSearch(params, target, left, right) {
  if (left >= right) {
    return -1;
  }
  const mid = Math.floor((right + left) / 2);
  if (mid === left && params[mid] !== target) {
    return -1;
  }
  console.log(mid, left, right);
  if (params[mid] === target) {
    return mid;
  } else if (params[mid] > target) {
    return bSearch(params, target, left, mid);
  } else {
    return bSearch(params, target, mid, right);
  }
}

const index = bSearch(arr, 33, 0, arr.length);
console.log("result", index);
