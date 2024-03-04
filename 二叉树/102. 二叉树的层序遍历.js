//https://leetcode.cn/problems/binary-tree-level-order-traversal/description/
//给你二叉树的根节点 root ，返回其节点值的 层序遍历 。 （即逐层地，从左到右访问所有节点）。

//通过一个 while 循环控制从上向下一层层遍历，for 循环控制每一层从左向右遍历
var levelOrder = function (root) {
  let res = [];
  if (root == null) return res;

  let q = [];
  q.push(root);
  // while 循环控制从上向下一层层遍历
  while (q.length > 0) {
      let sz = q.length
      // 记录这一层的节点值
      let level = []
      // for 循环控制每一层从左向右遍历
      for (let i = 0; i < sz; i++) {
          let cur = q.shift()
          level.push(cur.val);
          if (cur.left) {
              q.push(cur.left)
          }
          if (cur.right) {
              q.push(cur.right)
          }
      }
      res.push(level)
  }
  return res
};