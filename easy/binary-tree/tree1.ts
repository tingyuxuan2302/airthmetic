// 二叉树中序遍历
// 左子树——根节点——右子树

const inorderTraversal = (root: TreeNode | null | number[]): number[] => {
  let res = []
  const order = (root) => {
    if (!root) {
      return ;
    }
    order(root.left)
    res.push(root.val)
    order(root.right)
  }
  order(root)
  return res
}



// test
const tree = [1,null,2,3]

console.log(inorderTraversal(tree))

