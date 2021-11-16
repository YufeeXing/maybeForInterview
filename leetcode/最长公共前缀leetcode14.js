/* 
编写一个函数来查找字符串数组中的最长公共前缀。
如果不存在公共前缀，返回空字符串 ""。
示例 1：

输入：strs = ["flower","flow","flight"]
输出："fl"

示例 2：
输入：strs = ["dog","racecar","car"]
输出：""
解释：输入不存在公共前缀。
*/

var longestCommonPrefix = function (strs) {
  const res = [];
  let break_flag = false;
  let continue_flag = false;
  for (let i = 0; i < strs[0].length; i++) {
    if (continue_flag) {
      continue;
    }
    if (break_flag) {
      break;
    }
    for (let j = 1; j < strs.length; j++) {
      if (i >= strs[j].length) {
        break_flag = true;
        break;
      } else if (strs[0][i] !== strs[j][i]) {
        continue_flag = true;
        break;
      }
    }
    if (!break_flag && !continue_flag) {
      res.push(strs[0][i]);
    }
  }
  return res.join("");
};

longestCommonPrefix(["flower", "flow", "flight"]);
