//https://leetcode.cn/problems/binary-tree-preorder-traversal/
// 给你二叉树的根节点 root ，返回它节点值的 前序 遍历。

var preorderTraversal = function (root) {
  /* 动态规划思路 */
  let res = [];
  if (root == null) {
      return res;
  }

  res.push(root.val)
  res = res.concat(preorderTraversal(root.left))
  res = res.concat(preorderTraversal(root.right))
  return res;
};

var preorderTraversal = function (root) {
  /* 回溯算法思路 */
  let res = [];
  traverse(root);
  return res;

  // 二叉树遍历函数
  function traverse(root) {
      if (root == null) {
          return;
      }
      // 前序遍历位置
      res.push(root.val);
      traverse(root.left);
      traverse(root.right);
  }
}