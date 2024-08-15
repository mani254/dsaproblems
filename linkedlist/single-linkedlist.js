class Node {
   constructor(data) {
      this.data = data
      this.next = null
   }
}

class SingleLinkedList {
   constructor() {
      this.head = null
   }

   insertAtEnd(value) {
      let newNode = new Node(value)
      if (!this.head) {
         this.head = newNode
      }
      else {
         let current = this.head
         while (current.next !== null) {
            current = current.next
         }
         current.next = newNode
      }
   }

   insertAtBegining(value) {
      let newNode = new Node(value)
      if (this.head == null) {
         this.head = newNode
      }
      else {
         newNode.next = this.head
         this.head = newNode
      }
   }

   inserAtIndex(index, value) {
      const newNode = new Node(value)

      if (index === 0) {
         return this.insertAtBegining(value)
      }

      let current = this.head
      let count = 0

      // Traverse to the node before the target index
      while (current !== null && count < index - 1) {
         current = current.next
         count++
      }

      // Check if the index is out of bounds
      if (current === null) {
         console.log("Index out of bounds")
         return
      }

      newNode.next = current.next
      current.next = newNode
   }

   removeAtIndex(index) {
      if (this.head == null) {
         console.log("List is empty")
         return
      }

      let current = this.head

      if (index === 0) {
         this.head = current.next
         return
      }

      let prev = null
      let count = 0

      // Traverse to the node before the target index
      while (current !== null && count < index) {
         prev = current
         current = current.next
         count++
      }

      // Check if the index is out of bounds
      if (current === null) {
         console.log("Index out of bounds")
         return
      }

      prev.next = current.next
   }

   removeAtEnd() {
      let current = this.head
      let prev = this.head

      if (!current) return console.log('list is emphty')


      while (current.next !== null) {
         prev = current
         current = prev.next
      }

      prev.next = null
   }

   reverse() {
      let prev = null
      let current = this.head
      let next = null

      while (current) {
         next = current.next;
         current.next = prev;
         prev = current;
         current = next
      }

      this.head = prev

   }

   printReverse() {
      let current = this.head

      function recursive(current) {
         if (current == null) {
            return
         }
         recursive(current.next)
         console.log(current.data)
      }

      recursive(current)
   }

   printList() {
      let current = this.head
      const list = []
      while (current !== null) {
         list.push(current.data)
         current = current.next
      }
      console.log(list)

   }
}



const cars = new SingleLinkedList()

cars.insertAtBegining('BMW')
cars.insertAtBegining('Pourshe')
cars.insertAtEnd('Ferari')
cars.inserAtIndex(1, 'Lamborgingi')
cars.inserAtIndex(4, 'Bugati')
cars.reverse()
cars.printReverse()
cars.printList()