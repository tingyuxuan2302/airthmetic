// 题目： Z 字形变换
// 将一个给定字符串 s 根据给定的行数 numRows ，以从上往下、从左到右进行 Z 字形排列。

// 比如输入字符串为 "PAYPALISHIRING" 行数为 3 时，排列如下：

// P   A   H   N
// A P L S I I G
// Y   I   R
// 之后，你的输出需要从左往右逐行读取，产生出一个新的字符串，比如："PAHNAPLSIIGYIR"。

// 请你实现这个将字符串进行指定行数变换的函数：

// string convert(string s, int numRows);
//  

// 示例 1：

// 输入：s = "PAYPALISHIRING", numRows = 3
// 输出："PAHNAPLSIIGYIR"
// 示例 2：
// 输入：s = "PAYPALISHIRING", numRows = 4
// 输出："PINALSIGYAHRPI"
// 解释：
// P     I    N
// A   L S  I G
// Y A   H R
// P     I
// 示例 3：

// 输入：s = "A", numRows = 1
// 输出："A"

// 来源：力扣（LeetCode）
// 链接：https://leetcode-cn.com/problems/zigzag-conversion
// 著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。


// 题解：
/**
 * @param {string} s
 * @param {number} numRows 规定的行数
 * @return {string}
 */
var convert = function(s, numRows) {
  if (s.length === 1 || numRows === 1) {
    return s
  }
  let rowNum = 0; // 第几行
  const resLen = Math.min(s.length, numRows); // 判断字符串长度跟给定的行数，取一个最小值作为数组的长度
  let res = new Array(resLen).fill(""); // 结果数组，先填充为空字符串，方便后边循环的时候字符串迭加
  let isDown = false; // 是否是向下递进
  for (let i = 0; i < s.length; i++) {
    // 数组里的每一个成员都是迭加起来的字符串
    res[rowNum] = res[rowNum] + s[i];
    if (rowNum === numRows - 1 || rowNum === 0) {
      // 当循环到边界，即到了指定的行数numRows或者回到了第一行，则将方向反转
      isDown = !isDown
    }
    rowNum = rowNum + (isDown ? 1 : -1)
  }
  return res.join("")
};