// 题目： 二叉树展开为链表



// 给你二叉树的根结点 root ，请你将它展开为一个单链表：

// 展开后的单链表应该同样使用 TreeNode ，其中 right 子指针指向链表中下一个结点，而左子指针始终为 null 。
// 展开后的单链表应该与二叉树 先序遍历 顺序相同。
//  

// 示例 1：


// 输入：root = [1,2,5,3,4,null,6]
// 输出：[1,null,2,null,3,null,4,null,5,null,6]
// 示例 2：

// 输入：root = []
// 输出：[]
// 示例 3：

// 输入：root = [0]
// 输出：[0]

// 思路：
// 1. 如果左子树为null，则找右节点
// 2. 如果左节点有值，则找到左节点最后一个节点
const flatten = (root: TreeNode | null): void => {
  while(root != null) {
    if (!root.left) {
      root = root.right
    } else {
      // 找到左子树的最右子节点
      let pre: TreeNode = root.left
      while (pre.right) {
        pre = pre.right
      }
      // 将原来的右子树拼接到左子树最右边的节点
      pre.right = root.right
      // 将原来的左子树拼接到右子树
      root.right = root.left
      // 完成之后将左子树置为null
      root.left = null
      // 将拼接好的右子树作为根结点
      root = root.right
    }
  }
}