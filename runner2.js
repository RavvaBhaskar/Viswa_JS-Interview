class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class MyLinkedList {
  constructor(head = null) {
    this.head = head;
    this.size = 0;
    console.log("linked list created");
    console.log(this.head, "head");
    console.log(this.size, "size");
  }

  add(data) {
    var node = new Node(data);
    var current;
    if (this.head === null) this.head = node;
    else {
      current = this.head;
      while (current.next) {
        current = current.next;
      }
      current.next = node;
    }
    this.size++;
    console.log("-----------------node added----------------");
    console.log(this.head, "head");
    console.log(this.size, "size");
  }
  size_of_the_list() {
    return this.size;
  }
  isEmpty() {
    return this.size === 0;
  }
  indexOf(data) {
    var count = 0;
    var current = this.head;
    while (current !== null) {
      if (current.data == data) return count;
      count++;
      current = current.next;
    }
    return -1;
  }
}

var ll = new MyLinkedList();
ll.add(10);
ll.add(20);
ll.add(30);
console.log(ll.size_of_the_list());
console.log(ll.isEmpty());
console.log(ll.indexOf(10));
