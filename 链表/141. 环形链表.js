//https://leetcode.cn/problems/linked-list-cycle/description/
// 给你一个链表的头节点 head ，判断链表中是否有环。
// 如果链表中有某个节点，可以通过连续跟踪 next 指针再次到达，则链表中存在环。 为了表示给定链表中的环，
// 评测系统内部使用整数 pos 来表示链表尾连接到链表中的位置（索引从 0 开始）。

var hasCycle = function (head) {
  //快慢指针判断是否有环
  let slow = fast = head
  while (fast && fast.next) {
      slow = slow.next
      fast = fast.next.next
      // 快慢指针相遇，说明含有环
      if (fast === slow) {
          return true
      }
  }

  return false
};