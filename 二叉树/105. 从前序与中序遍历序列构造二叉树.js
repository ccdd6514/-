//https://leetcode.cn/problems/construct-binary-tree-from-preorder-and-inorder-traversal/description/
// 给定两个整数数组 preorder 和 inorder ，其中 preorder 是二叉树的先序遍历， inorder 是同一棵树的中序遍历，请构造二叉树并返回其根节点。

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
//重点是找出前序遍历和中序遍历的左右子树，进行递归即可22
//重点是找出前序遍历和中序遍历的左右子树，进行递归即可111
var buildTree = function (preorder, inorder) {
  // 存储 inorder 中值到索引的映射,提高查找中序遍历的根节点效率22
  let valToIndex = new Map();
  for (let i = 0; i < inorder.length; i++) {
      valToIndex.set(inorder[i], i);
  }
  return build(preorder, 0, preorder.length - 1,
      inorder, 0, inorder.length - 1);

  //  build 函数的定义：
  //  若前序遍历数组为 preorder[preStart..preEnd]，
  //  中序遍历数组为 inorder[inStart..inEnd]，
  //  构造⼆叉树，返回该⼆叉树的根节点
  function build(preorder, preStart, preEnd, inorder, inStart, inEnd) {
      if (preStart > preEnd) {
          return null;
      }
      // root 节点对应的值就是前序遍历数组的第⼀个元素
      let rootVal = preorder[preStart]
      // rootVal 在中序遍历数组中的索引
      // for (let i = inStart; i <= inEnd; i++) {
      //     if (inorder[i] == rootVal) {
      //         index = i;
      //         break;
      //     }
      // }
      // 避免 for 循环寻找 rootVal
      let index = valToIndex.get(rootVal);
      let root = new TreeNode(rootVal)

      let leftSize = index - inStart //获取左子树个数（也就是中序遍历根节点左边的长度，那么前序遍历的左子树也是这么长）
      //递归构造左右子树
      root.left = build(preorder, preStart + 1, preStart + leftSize,
          inorder, inStart, index - 1);
      root.right = build(preorder, preStart + leftSize + 1, preEnd,
          inorder, index + 1, inEnd);
      return root;
  }
};

