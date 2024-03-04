//https://leetcode.cn/problems/invert-binary-tree/description/

// 给你一棵二叉树的根节点 root ，翻转这棵二叉树，并返回其根节点。
// 输入：root = [4,2,7,1,3,6,9]
// 输出：[4,7,2,9,6,3,1]

//遍历
var invertTree = function (root) {
    // 遍历⼆叉树，交换每个节点的⼦节点
    traverse(root);
    return root;
};

function traverse(root) {
    if (!root) {
        return
    }
    let temp = root.left
    root.left = root.right
    root.right = temp
    // 遍历框架，去遍历左右⼦树的节点
    traverse(root.left);
    traverse(root.right);
}

//分解问题
// 定义：将以 root 为根的这棵⼆叉树翻转，返回翻转后的⼆叉树的根节点
var invertTree = function (root) {
  // 遍历⼆叉树，交换每个节点的⼦节点
  if (root == null) {
      return null;
  }
  // 利⽤函数定义，先翻转左右⼦树
  let left = invertTree(root.left);
  let right = invertTree(root.right);

  // 然后交换左右⼦节点
  root.left = right;
  root.right = left;

  // 和定义逻辑⾃恰：以 root 为根的这棵⼆叉树已经被翻转，返回 root
  return root;
};