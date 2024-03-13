// https://leetcode.cn/problems/construct-binary-tree-from-inorder-and-postorder-traversal/description/

//给定两个整数数组 inorder 和 postorder ，其中 inorder 是二叉树的中序遍历， postorder 是同一棵树的后序遍历，请你构造并返回这颗 二叉树 。

// 输入：inorder = [9,3,15,20,7], postorder = [9,15,7,20,3]
// 输出：[3,9,20,null,null,15,7]

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} inorder
 * @param {number[]} postorder
 * @return {TreeNode}
 */
var buildTree = function (inorder, postorder) {
  // 存储 inorder 中值到索引的映射,提高查找中序遍历的根节点效率22
  let valToIndex = new Map();
  for (let i = 0; i < inorder.length; i++) {
      valToIndex.set(inorder[i], i);
  }
  return build(postorder, 0, postorder.length - 1,
      inorder, 0, inorder.length - 1);

  //  build 函数的定义：
  //  后序遍历数组为 postorder[postStart..postEnd]，
  //  中序遍历数组为 inorder[inStart..inEnd]，
  //  构造⼆叉树，返回该⼆叉树的根节点
  function build(postorder, postStart, postEnd, inorder, inStart, inEnd) {
      if (inStart > inEnd) {
          return null;
      }
      // root 节点对应的值就是后序遍历数组的最后⼀个元素
      let rootVal = postorder[postEnd]
      // rootVal 在中序遍历数组中的索引
      let index = valToIndex.get(rootVal)
      let leftSize = index - inStart//重点：获取左子树个数（也就是中序遍历根节点左边的长度，那么后序遍历的左子树也是这么长）
      const root = new TreeNode(rootVal)

      // 递归构造左右⼦树
      root.left = build(postorder, postStart, postStart + leftSize - 1,
          inorder, inStart, index - 1);

      root.right = build(postorder, postStart + leftSize, postEnd - 1,
          inorder, index + 1, inEnd);

      return root;
  }
};