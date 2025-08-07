class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class SinglyLinkedList {
  constructor() {
    this.head = null;
    this.length = 0;
  }

  // Append: Add data at the end
  append(data) {
    const newNode = new Node(data);
    if (!this.head) {
      this.head = newNode;
    } else {
      let current = this.head;
      while (current.next !== null) {
        current = current.next;
      }
      current.next = newNode;
    }
    this.length++;
  }

  // Prepend: Add data at the beginning
  prepend(data) {
    const newNode = new Node(data);
    newNode.next = this.head;
    this.head = newNode;
    this.length++;
  }

  // RemoveAt: Removes data from the given index
  removeAt(index) {
    if (index < 0 || index >= this.length) return null;

    let removedNode;

    if (index === 0) {
      removedNode = this.head;
      this.head = this.head.next;
    } else {
      let current = this.head;
      let previous = null;
      let count = 0;

      while (count < index) {
        previous = current;
        current = current.next;
        count++;
      }

      removedNode = current;
      previous.next = current.next;
    }

    this.length--;
    return removedNode.data;
  }

  // InsertAt: Add data at the given index
  insertAt(data, index) {
    if (index < 0 || index > this.length) return false;

    const newNode = new Node(data);

    if (index === 0) {
      newNode.next = this.head;
      this.head = newNode;
    } else {
      let current = this.head;
      let previous = null;
      let count = 0;

      while (count < index) {
        previous = current;
        current = current.next;
        count++;
      }

      newNode.next = current;
      previous.next = newNode;
    }

    this.length++;
    return true;
  }

  // Size: returns the size of list
  size() {
    return this.length;
  }

  // isEmpty: Checks if list is empty or not
  isEmpty() {
    return this.length === 0;
  }

  // Search: Finds data from linked list.
  search(data) {
    let current = this.head;
    let index = 0;

    while (current !== null) {
      if (current.data === data) {
        return index;
      }
      current = current.next;
      index++;
    }

    return -1; 
  }

  // Utility method to print the list (for testing/debugging)
  print() {
    let result = [];
    let current = this.head;

    while (current) {
      result.push(current.data);
      current = current.next;
    }

    console.log(result.join(' -> '));
  }
}


const list = new SinglyLinkedList();

list.append(10);
list.append(20);
list.prepend(5);
list.insertAt(15, 2);

list.print(); 

console.log(list.search(15)); 
console.log(list.removeAt(1)); 
list.print(); 

console.log("Size:", list.size()); 
console.log("Is Empty?", list.isEmpty()); 

