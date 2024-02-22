//https://leetcode.cn/problems/reverse-linked-list/description/

// 给你单链表的头节点 head ，请你反转链表，并返回反转后的链表。

// 输入：head = [1,2,3,4,5]
// 输出：[5,4,3,2,1]

var reverseList = function (head) {
  // base case
  if (head == null || head.next == null) { //意思是如果链表为空或者只有⼀个节点的时候，反转结果就是它⾃⼰，直接返回即可。
      return head;
  }
  let last = reverseList(head.next)
  head.next.next = head
  //当链表递归反转之后，新的头结点是 last，⽽之前的 head 变成了最后⼀个节点，别忘了链表的末尾要指向 null
  head.next = null  

  return last
};