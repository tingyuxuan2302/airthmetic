// 题目： 最长公共前缀

// 编写一个函数来查找字符串数组中的最长公共前缀。

// 如果不存在公共前缀，返回空字符串 ""。

//  

// 示例 1：

// 输入：strs = ["flower","flow","flight"]
// 输出："fl"
// 示例 2：

// 输入：strs = ["dog","racecar","car"]
// 输出：""
// 解释：输入不存在公共前缀。

// 来源：力扣（LeetCode）
// 链接：https://leetcode-cn.com/problems/longest-common-prefix
// 著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。

// 题解
/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
  if (!strs.length) {
    return ""
  }
  // 取出第一个字符串做比较的参照
  let ans = strs[0]
  for (let i = 1; i < strs.length; i++) {
    // 遍历每个字符串
    let j = 0;
    for (; j < ans.length && j < strs[i].length; j++) {
      if (ans[j] !== strs[i][j]) {
        break;
      }
    }
    // 将此次循环出来的最长公共前缀附值给ans，然后进入下一次循环
    ans = ans.substring(0, j)
    if (ans === ""){
      return ""
    }
  }
  return ans;
};