// 给你两个 非空 的链表，表示两个非负的整数。它们每位数字都是按照 逆序 的方式存储的，并且每个节点只能存储 一位 数字。

// 请你将两个数相加，并以相同形式返回一个表示和的链表。

// 你可以假设除了数字 0 之外，这两个数都不会以 0 开头。

// 示例 1：
// 输入：l1 = [2,4,3], l2 = [5,6,4]
// 输出：[7,0,8]
// 解释：342 + 465 = 807.
// 示例 2：

// 输入：l1 = [0], l2 = [0]
// 输出：[0]
// 示例 3：

// 输入：l1 = [9,9,9,9,9,9,9], l2 = [9,9,9,9]
// 输出：[8,9,9,9,0,0,0,1]

// 来源：力扣（LeetCode）
// 链接：https://leetcode-cn.com/problems/add-two-numbers
// 著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。

function addTwoNumbers(l1: ListNode | null, l2: ListNode | null): ListNode | null {
  // 先声明一个表头进行链表拼接
  let head = new ListNode(0)
  // 将链表进行缓存，最后输出的时候将头部去掉，取list.next
  const list = head
  // 两数相加可能会有进位
  let addOne = 0
  while (addOne || l1 || l2) {
    const val1 = l1 == null ? 0 : l1.val
    const val2 = l2 == null ? 0 : l2.val
    const sum = addOne + val1 + val2
    // 进位计算
    addOne = sum >= 10 ? 1 : 0
    // 将剩下的余数作为next
    head.next = new ListNode(sum % 10)
    head = head.next
    if (l1) {
      l1 = l1.next
    }
    if (l2) {
      l2 = l2.next
    }
  }

  return list.next
};