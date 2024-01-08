/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} x
 * @return {ListNode}
 */
var partition = function(head, x) {
  let smallHead = new ListNode(-1) //存放小于x的链表
  let largeHead = new ListNode(-1) //存放大于x的链表
  let p1 = smallHead,p2 = largeHead // p1, p2 指针负责⽣成结果链表
  // p 负责遍历原链表，类似合并两个有序链表的逻辑
  // 这⾥是将⼀个链表分解成两个链表
  let p = head
  while(p !== null) {
      if(p.val < x) {
          p1.next = p
          p1 = p1.next
      }else {
          p2.next = p
          p2 = p2.next
      }
      
      p = p.next
  }

  // 断开原链表中的 next 指针
  p2.next = null
  p1.next = largeHead.next

  return smallHead.next
  
};