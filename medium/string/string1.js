// 无重复字符的最长子串

// > 给定一个字符串 s ，请你找出其中不含有重复字符的 最长子串 的长度。

//  

// 示例 1:

// 输入: s = "abcabcbb"
// 输出: 3 
// 解释: 因为无重复字符的最长子串是 "abc"，所以其长度为 3。
// 示例 2:

// 输入: s = "bbbbb"
// 输出: 1
// 解释: 因为无重复字符的最长子串是 "b"，所以其长度为 1。
// 示例 3:

// 输入: s = "pwwkew"
// 输出: 3
// 解释: 因为无重复字符的最长子串是 "wke"，所以其长度为 3。
//      请注意，你的答案必须是 子串 的长度，"pwke" 是一个子序列，不是子串。
// 示例 4:

// 输入: s = ""
// 输出: 0

// 来源：力扣（LeetCode）
// 链接：https://leetcode-cn.com/problems/longest-substring-without-repeating-characters
// 著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。



// 题解
function lengthOfLongestSubstring(s) {
  // 装不同子串的数组
  let arr = [];
  // 最大值
  let max = 0;
  for (let i = 0; i < s.length; i ++) {
    const index = arr.indexOf(s[i])
    if (index > -1) {
      // 如果数组中已经存在该字符，则将数组中该字符以及其前边的所有字符删除
      arr.splice(0, index + 1)
    }
    // 如果数组中没有该字符，则推入数组
    arr.push(s[i])
    max = Math.max(max, arr.length)
  }
  return max
}