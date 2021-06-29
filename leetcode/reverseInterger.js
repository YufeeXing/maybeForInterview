/**
 * 给你一个 32 位的有符号整数 x ，返回将 x 中的数字部分反转后的结果。

如果反转后整数超过 32 位的有符号整数的范围 [−231,  231 − 1] ，就返回 0。

假设环境不允许存储 64 位整数（有符号或无符号）。
 

示例 1：

输入：x = 123
输出：321
示例 2：

输入：x = -123
输出：-321
示例 3：

输入：x = 120
输出：21
示例 4：

输入：x = 0
输出：0

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/reverse-integer
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 */

// 我自己写的答案
var reverse = function (x) {
  if (x >= 0) {
    return Number([...x.toString()].reverse().join(""));
  } else {
    const strX = x.toString();
    const nums = strX.slice(1);
    return Number(strX[0] + [...nums].reverse().join(""));
  }
};

// 题解中大佬的答案
// https://leetcode-cn.com/problems/reverse-integer/solution/wei-yun-suan-ji-jian-jie-fa-by-ijzqardmbd/
/**
 * 
 * result * 10 + x % 10 取出末位 x % 10（负数结果还是负数，无需关心正负），拼接到 result 中。
x / 10 去除末位，| 0 强制转换为32位有符号整数。
通过 | 0 取整，无论正负，只移除小数点部分（正数向下取整，负数向上取整）。
result | 0 超过32位的整数转换结果不等于自身，可用作溢出判断。

作者：zoffer
链接：https://leetcode-cn.com/problems/reverse-integer/solution/wei-yun-suan-ji-jian-jie-fa-by-ijzqardmbd/
来源：力扣（LeetCode）
著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。} 
 * 
 */
var reverse = function(x) {
    let result = 0;
    while(x !== 0) {
        result = result * 10 + x % 10;
        x = (x / 10) | 0;
    }
    return (result | 0) === result ? result : 0;
};
