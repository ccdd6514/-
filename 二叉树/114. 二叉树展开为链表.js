//https://leetcode.cn/problems/flatten-binary-tree-to-linked-list/description/

// 给你二叉树的根结点 root ，请你将它展开为一个单链表：

// 展开后的单链表应该同样使用 TreeNode ，其中 right 子指针指向链表中下一个结点，而左子指针始终为 null 。
// 展开后的单链表应该与二叉树 先序遍历 顺序相同。

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {void} Do not return anything, modify root in-place instead.
 */
// 解题思路
// 先用两个变量把原先的左右子树保存起来
// 将左子树作为右子树(对照下图中第1个树变成第2个树，原来2的左子树3变成了2的右子树3)
// 将原先的右子树接到当前右子树的末端（看下图第3棵树，5要接到4的下面）
// https://leetcode.cn/problems/flatten-binary-tree-to-linked-list/solutions/1034308/tong-su-yi-dong-de-si-lu-fen-xi-zong-gon-bi7h

//定义：输⼊节点 root，然后 root 为根的⼆叉树就会被拉平为⼀条链表
var flatten = function (root) {
  // base case
  if (root == null) return;
  // 利⽤定义，把左右⼦树拉平
  flatten(root.left);
  flatten(root.right);

  // 1、左右⼦树已经被拉平成⼀条链表
  let left = root.left
  let right = root.right
  // 2、将左⼦树作为右⼦树
  root.left = null
  root.right = left
  // 3、将原先的右⼦树接到当前右⼦树的末端
  let p = root
  while (p.right !== null) {
      p = p.right
  }
  p.right = right
};

