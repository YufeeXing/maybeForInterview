/*
 *给你一个整数 x ，如果 x 是一个回文整数，返回 true ；否则，返回 false 。
 *回文数是指正序（从左向右）和倒序（从右向左）读都是一样的整数。例如，121 是回文，而 123 不是。
 */

var isPalindrome = function (x) {
  //判断x是不是回文数
  if (x < 0) {
    return false;
  } else {
    const xStr = x.toString();
    for (let i = 0; i < xStr.length; i++) {
      if (xStr[i] !== xStr[xStr.length - 1 - i]) {
        return false;
      }
    }
  }
  return true;
};
