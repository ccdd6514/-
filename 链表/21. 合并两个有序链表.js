var mergeTwoLists = function(list1, list2) {
  let list = new ListNode(-1)
  let p = list
  let p1 = list1,p2 = list2

  while(p1 !== null && p2 !== null) {
      // ⽐较 p1 和 p2 两个指针
      // 将值较⼩的的节点接到 p 指针
      if(p1.val < p2.val) {
          p.next = p1
          p1 = p1.next
      }else {
          p.next = p2
          p2 = p2.next
      }
      p = p.next
  }

  if(p1 !== null) {
      p.next = p1
  }

  if(p2 !== null) {
      p.next = p2
  }

  return list.next
};