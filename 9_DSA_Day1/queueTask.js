class Queue {
    constructor() {
        this.items = [];
    }

    // Enqueue - Add element at end
    enqueue(element) {
        this.items.push(element);
    }

    // Dequeue - Remove an element from front
    dequeue() {
        if(this.items.length === 0) {
            console.log("Queue is empty");
            return null;
        }
        return this.items.shift();
    }

    // Search for an element
    search(element) {
        return this.items.includes(element);
    }

    // Print the Queue
    print() {
        console.log(this.items.join(" <- "));
    }
}


const q = new Queue();

q.enqueue("A");
q.enqueue("B");
q.enqueue("C");

q.print();                                              // Output: A <- B <- C

console.log("Removing item: ", q.dequeue());            // Output: Removing item: A
console.log(q.search("B"));                             // Output: true

q.print();                                              // Output: B <- C
