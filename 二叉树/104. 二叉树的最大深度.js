//https://leetcode.cn/problems/maximum-depth-of-binary-tree/description/
//二叉树的 最大深度 是指从根节点到最远叶子节点的最长路径上的节点数。

var maxDepth = function (root) {
    // dfs 动态规划写法
    if (root === null) {
        return 0
    }

    //利用定义，计算左右子树最大高度
    let leftMax = maxDepth(root.left)
    let rightMax = maxDepth(root.right)

    return Math.max(leftMax, rightMax) + 1
};

var maxDepth = function (root) {
  //回溯算法思路
  let depth = 0
  let res = 0

  traverse(root)
  return res

  function traverse(root) {
      if (root === null) {
          return 0
      }
      // 前序遍历位置
      depth++;
      // 遍历的过程中记录最大深度
      res = Math.max(res, depth);
      traverse(root.left);
      traverse(root.right);
      // 后序遍历位置
      depth--;
  }

}