//https://leetcode.cn/problems/intersection-of-two-linked-lists/description/
//给你两个单链表的头节点 headA 和 headB ，请你找出并返回两个单链表相交的起始节点。
//如果两个链表不存在相交节点，返回 null

var getIntersectionNode = function(headA, headB) {
  let p1 = headA
  let p2 = headB

  while(p1 !== p2) { //两者拼接，到最后一定
      // p1 ⾛⼀步，如果⾛到 A 链表末尾，转到 B 链表
      p1 = p1 === null ? headB : p1.next
      // p2 ⾛⼀步，如果⾛到 B 链表末尾，转到 A 链表
      p2 = p2 === null ? headA : p2.next
  }

  return p1
};