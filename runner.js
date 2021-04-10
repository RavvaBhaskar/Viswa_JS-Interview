class ListNode {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class LinkedList {
  constructor(head = null) {
    console.log(head, "linked");
    this.head = head;
  }
}

let node1 = new ListNode(2);
let node2 = new ListNode(5);
node1.next = node2;

let list = new LinkedList();
//console.log(list.head.data); //returns 5
