//https://leetcode.cn/problems/populating-next-right-pointers-in-each-node/description/

// 给定一个 完美二叉树 ，其所有叶子节点都在同一层，每个父节点都有两个子节点。二叉树定义如下：
// 填充它的每个 next 指针，让这个指针指向其下一个右侧节点。如果找不到下一个右侧节点，则将 next 指针设置为 NULL。
// 初始状态下，所有 next 指针都被设置为 NULL。

//特殊点:不同父节点的子节点怎么进行链接
// https://leetcode.cn/problems/populating-next-right-pointers-in-each-node/solutions/1033492/tu-jie-liang-chong-bu-tong-de-di-gui-si-eyctg
var connect = function (root) {  //解法1(可以画个图看，或者当作三叉树来做)
  if (root == null) return root;
  if (root.left) root.left.next = root.right;
  if (root.right && root.next) root.right.next = root.next.left;
  // 这里必须得前序遍历  不能是后序遍历
  connect(root.left);
  connect(root.right);
  return root;
};

var connect = function (root) {  //解法二
  if (root === null) { return null }
  traverse(root.left, root.right)
  return root
};

function traverse(node1, node2) {
  if (!node1 || !node2) {
      return null
  }

  node1.next = node2
  // 连接相同⽗节点的两个⼦节点
  traverse(node1.left, node1.right);
  traverse(node2.left, node2.right);
  // 连接跨越⽗节点的两个⼦节点
  traverse(node1.right, node2.left);

}