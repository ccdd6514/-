//https://leetcode.cn/problems/remove-duplicates-from-sorted-list/description/
//和26题类似 //https://leetcode.cn/problems/remove-duplicates-from-sorted-array/description/

//思路
//利用快慢指针进行判断
var deleteDuplicates = function(head) {
  if(head === null) return null

  let slow = fast = head
  while(fast !== null) {
      if(slow.val !== fast.val) {
          slow.next = fast
          slow = slow.next
      }
      fast = fast.next
  }
  // 断开与后⾯重复元素的连接
  slow.next = null;
  return head
};