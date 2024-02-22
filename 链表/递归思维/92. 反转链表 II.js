//https://leetcode.cn/problems/reverse-linked-list-ii/description/

// 给你单链表的头指针 head 和两个整数 left 和 right ，其中 left <= right 。
// 请你反转从位置 left 到位置 right 的链表节点，返回 反转后的链表 。

// 示例 1：
// 输入：head = [1,2,3,4,5], left = 2, right = 4
// 输出：[1, 4, 3, 2, 5]

// 示例 2：
// 输入：head = [5], left = 1, right = 1
// 输出：[5]

var reverseBetween = function (head, left, right) {
  let successor = null //后继节点得放外面，不然会漏掉最后一个
  const reverseN = function (head, n) {
      if (n === 1) {
          //保存后继节点
          successor = head.next
          return head
      }
      let last = reverseN(head.next, n - 1)
      head.next.next = head //反转的关键
      head.next = successor //让反转之后的 head 节点和后面的节点连起来

      return last
  }

  if (left == 1) {
      // 相当于反转前 n 个元素
      return reverseN(head, right);
  }
  // 前进到反转的起点触发 base case
  head.next = reverseBetween(head.next, left - 1, right - 1);
  return head;
};