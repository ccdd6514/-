//https://leetcode.cn/problems/lian-biao-zhong-dao-shu-di-kge-jie-dian-lcof/description/
//给定一个头节点为 head 的链表用于记录一系列核心肌群训练项目编号，请查找并返回倒数第 cnt 个训练项目编号。


var trainingPlan = function (head, cnt) {
  let p1 = p2 = head
  //p1 先走 k步
  for (let i = 0; i < cnt; i++) {
      p1 = p1.next
  }

  while (p1 !== null) {
      // p1 和 p2 同时⾛ n - k 步
      p2 = p2.next
      p1 = p1.next
  }

  // p2 现在指向第 n - k + 1 个节点，即倒数第 k 个节点
  return p2;
};