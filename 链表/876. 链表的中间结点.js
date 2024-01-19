//快慢指针法
// 给你单链表的头结点 head ，请你找出并返回链表的中间结点。
// 如果有两个中间结点，则返回第二个中间结点。

var middleNode = function (head) {
  // 快慢指针初始化指向 head
  let p1 = p2 = head
  // 快指针⾛到末尾时停⽌
  while (p1 && p1.next) {
      p1 = p1.next.next
      p2 = p2.next
  }
  // 慢指针指向中点
  return p2
};