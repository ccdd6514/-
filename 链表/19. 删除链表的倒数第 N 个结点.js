//https://leetcode.cn/problems/remove-nth-node-from-end-of-list/description/
//给你一个链表，删除链表的倒数第 n 个结点，并且返回链表的头结点。
var removeNthFromEnd = function (head, n) {
  let dummy = new ListNode(-1)
  dummy.next = head
  // 删除倒数第 n 个，要先找倒数第 n + 1 个节点
  let x = findFromEnd(dummy, n + 1);
  x.next = x.next.next;
  return dummy.next;
};

// 返回链表的倒数第 k 个节点
var findFromEnd = function (head, k) {
  let p1 = p2 = head;
  // p1 先走 k 步
  for (let i = 0; i < k; i++) {
      p1 = p1.next;
  }
  // p1 和 p2 同时走 n - k 步
  while (p1 != null) {
      p2 = p2.next;
      p1 = p1.next;
  }
  // p2 现在指向第 n - k 个节点
  return p2;
}