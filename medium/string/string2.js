//题目： 最长回文子串
// 给你一个字符串 s，找到 s 中最长的回文子串。

//  

// 示例 1：

// 输入：s = "babad"
// 输出："bab"
// 解释："aba" 同样是符合题意的答案。
// 示例 2：

// 输入：s = "cbbd"
// 输出："bb"
// 示例 3：

// 输入：s = "a"
// 输出："a"
// 示例 4：

// 输入：s = "ac"
// 输出："a"

// 来源：力扣（LeetCode）
// 链接：https://leetcode-cn.com/problems/longest-palindromic-substring
// 著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。


// 题解
// 中心扩散法

// 回文子串有两种
// 奇数个：aba
// 偶数个：abba
// 假设每次遇到的字符都是中间的字符
const longestPalindrome = (s) => {
  if (s.length < 2) {
    return s
  }
  let res = ""
  for (let i = 0; i < s.length; i++) {
    // 奇数个
    helper(i, i)
    // 偶数个
    helper(i, i + 1)
  }
  const helper = (m, n) => {
    while(m >= 0 && n <= s.length && s[m] === s[n]) {
      // 符合条件，则分别向两边扩散
      m--
      n++
    }
    // 当循环结束的时候，也就是m和n此时不满足回文子串,此时符合回文子串的下标应该是m到n之间的字符，但是m和n两个边界不能取，所以应该取m + 1 到n - 1的区间， 所以回文的长度是 n - 1 - (m + 1) + 1
    if (n - 1 - ( m + 1) + 1 > res.length) {
      res = s.slice(m + 1, n)
    }
  }
  return res
};