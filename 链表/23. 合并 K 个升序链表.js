/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
// 双指针法 + 两两合并
//  时间复杂度：O(kn)(k为链表个数，n为当前两个合并中链表的长度)
//  空间复杂度：O(1)
// 思路同 - 21. 合并两个有序链表 - 解法一

// 区别
//  不止两个链表
//  两两合并
//  遍历数组，合并两个成新的一个链表再继续合并下一个链表

var mergeKLists = function (lists) {
  let mergeTwoLists = (l1, l2) => {
      let head = new ListNode(-1)
      let p = head
      while (l1 && l2) {
          if (l1.val <= l2.val) {
              p.next = l1
              l1 = l1.next
          } else {
              p.next = l2
              l2 = l2.next
          }
          p = p.next
      }
      p.next = l1 ? l1 : l2
      return head.next
  }

  let n = lists.length
  if (n === 0) return null
  let res = lists[0]
  for (let i = 1; i < n; i++) {
      if (lists[i]) {
          res = mergeTwoLists(res, lists[i])
      }
  }

  return res
};