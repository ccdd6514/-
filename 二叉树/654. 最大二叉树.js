//https://leetcode.cn/problems/maximum-binary-tree/description/
// 给定一个不重复的整数数组 nums 。 最大二叉树 可以用下面的算法从 nums 递归地构建:
// 创建一个根节点，其值为 nums 中的最大值。
// 递归地在最大值 左边 的 子数组前缀上 构建左子树。
// 递归地在最大值 右边 的 子数组后缀上 构建右子树。

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
var constructMaximumBinaryTree = function (nums) {
  return build(nums, 0, nums.length - 1);
};

var build = function (nums, low, high) {
  // base case
  if (low > high) {
      return null
  }
  // 找到数组中的最大值和对应的索引
  let index = -1, maxVal = -Infinity
  for (let i = low; i <= high; i++) {
      if (maxVal < nums[i]) {
          index = i
          maxVal = nums[i]
      }
  }
  let root = new TreeNode(maxVal)
  // 递归调用构造左右子树
  root.left = build(nums, low, index - 1)
  root.right = build(nums, index + 1, high)

  return root
}