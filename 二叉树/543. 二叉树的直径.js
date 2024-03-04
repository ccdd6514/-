//https://leetcode.cn/problems/diameter-of-binary-tree/
// 给你一棵二叉树的根节点，返回该树的 直径 。
// 二叉树的 直径 是指树中任意两个节点之间最长路径的 长度 。这条路径可能经过也可能不经过根节点 root 。
// 两节点之间路径的 长度 由它们之间边数表示。

var diameterOfBinaryTree = function(root) {
  let result = 0

  function getDepth(root) {
      if(!root) return 0

      const leftDepth = getDepth(root.left)
      const rightDepth = getDepth(root.right)

      result = Math.max(result,(leftDepth + rightDepth ))

      return Math.max(leftDepth,rightDepth) + 1
  }

  getDepth(root)

  return result
};