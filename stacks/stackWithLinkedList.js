class Node {
   constructor(data) {
      this.data = data;
      this.prev = null;
   }
}

class Stack {
   constructor() {
      this.top = null;
   }

   isEmpty() {
      return this.top === null;
   }

   pop() {
      if (this.isEmpty()) {
         console.log('Stack is empty');
         return null;
      }

      let poppedNode = this.top;
      this.top = this.top.prev;
      return poppedNode.data;
   }

   push(value) {
      let newNode = new Node(value);
      newNode.prev = this.top;
      this.top = newNode;
   }

   peek() {
      if (this.isEmpty()) {
         console.log('Stack is empty');
         return null;
      }
      return this.top.data;
   }

   clear() {
      this.top = null;
   }
}
