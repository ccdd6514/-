//https://leetcode.cn/problems/linked-list-cycle-ii/description/

// 给定一个链表的头节点  head ，返回链表开始入环的第一个节点。 如果链表无环，则返回 null。

var detectCycle = function (head) {
  let slow = fast = head
  while (fast !== null && fast.next !== null) {
      fast = fast.next.next
      slow = slow.next
      //相遇了，说明有环
      if (fast === slow) {
          break
      }
  }
  if (fast === null || fast.next === null) {
      //说明是最后一个节点才中断循环的
      return null
  }
  //重新指向头节点
  slow = head
  while (slow !== fast) {
      fast = fast.next
      slow = slow.next
  }
  return slow
};