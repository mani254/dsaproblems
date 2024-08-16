class Node {
   constructor(data) {
      this.data = data || null;
      this.prev = null;
      this.next = null;
   }
}

class DoubleLinkedList {
   constructor() {
      this.head = null;
      this.tail = null;
      this.length = 0;
   }

   insertAtEnd(value) {
      let newNode = new Node(value);
      if (this.length === 0) {
         this.head = newNode;
         this.tail = newNode;
      } else {
         this.tail.next = newNode;
         newNode.prev = this.tail;
         this.tail = newNode;
      }
      this.length++;
   }

   insertAtBeginning(value) {
      let newNode = new Node(value);
      if (this.length === 0) {
         this.head = newNode;
         this.tail = newNode;
      } else {
         newNode.next = this.head;
         this.head.prev = newNode;
         this.head = newNode;
      }
      this.length++;
   }

   insertAtIndex(index, value) {
      if (index < 0 || index > this.length) {
         return "Index out of bounds";
      }

      if (index === 0) {
         return this.insertAtBeginning(value);
      }

      if (index === this.length) {
         return this.insertAtEnd(value);
      }

      let newNode = new Node(value);
      let current = this.head;

      for (let i = 0; i < index - 1; i++) {
         current = current.next;
      }

      newNode.next = current.next;
      newNode.prev = current;
      if (current.next) {
         current.next.prev = newNode;
      }
      current.next = newNode;

      this.length++;
   }

   removeAtEnd() {
      if (this.length <= 0) {
         return "list is emphty"
      }

      if (this.length == 1) {
         this.head = null;
         this.tail = null;
         this.length--
         return
      }

      this.tail = this.tail.prev
      this.tail.next = null
      this.length--

   }

   removeAtEnd() {
      if (this.length <= 0) {
         return "List is empty";
      }

      if (this.length === 1) {
         this.head = null;
         this.tail = null;
      } else {
         this.tail = this.tail.prev;
         this.tail.next = null;
      }

      this.length--;
   }

   removeAtBeginning() {
      if (this.length <= 0) {
         return "List is empty";
      }

      if (this.length === 1) {
         this.head = null;
         this.tail = null;
      } else {
         this.head = this.head.next;
         this.head.prev = null;
      }

      this.length--;
   }

   removeAtIndex(index) {
      if (index < 0 || index >= this.length) {
         return "Index out of bounds";
      }

      if (index === 0) {
         return this.removeAtBeginning();
      }

      if (index === this.length - 1) {
         return this.removeAtEnd();
      }

      let current = this.head;
      for (let i = 0; i < index; i++) {
         current = current.next;
      }

      current.prev.next = current.next;
      if (current.next) {
         current.next.prev = current.prev;
      }

      this.length--;
   }

   printList() {
      let current = this.head;
      while (current) {
         console.log(current.data);
         current = current.next;
      }
   }

   printReverseList() {
      let current = this.tail;
      while (current) {
         console.log(current.data);
         current = current.prev;
      }
   }
}

const cars = new DoubleLinkedList();

cars.insertAtBeginning('Toyota');
cars.insertAtBeginning('Lambo');
cars.insertAtIndex(2, 'Bmw');
cars.insertAtIndex(1, 'Ferrari');

console.log("Forward Print:");
cars.printList();

console.log("Reverse Print:");
cars.printReverseList();

console.log(cars)
