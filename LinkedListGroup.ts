import { ISortable } from "./isortable";

class Node {
    next: Node | null = null;
    data: number;
    constructor(data: number) {
      this.data = data;
    }
  }
  
  export class LinkedListGroup implements ISortable {
    head: Node | null = null;
  
    // Create Node out of data and attach to end of list
    add(data: number): void {
      const node = new Node(data);
      if (!this.head) {
        this.head = node;
        return;
      }
  
      let tail = this.head;
      while (tail.next) {
        tail = tail.next;
      }
      tail.next = node;
    }
  
    // Should return number of Nodes in List
    get length(): number {
      let temp = this.head;
      let size = 0;
      while (temp !== null ) {
        size++;
        temp = temp.next;
      }
      return size;
    }
  
   // Convenience method that returns a Node at a given index
    at(index: number): Node {
      if (!this.head) {
        throw new Error("Error: Index out of bounds");
      }
      let counter = 0;
      let node: Node | null = this.head;
      while (node) {
        if (counter === index) {
          return node;
        }
        counter++;
        node = node.next;
      }
      throw new Error("Error: Index out of bounds");
    }
  
    compare(leftPos: number, rightPos: number): boolean {
        if (!this.head) throw new Error("List is empty");
        return this.at(leftPos).data > this.at(rightPos).data;
      }
  
    swap(leftPos: number, rightPos: number): void {
        if (!this.head) throw new Error("List is empty");

        let leftNode = this.at(leftPos);
        let rightNode = this.at(rightPos);

        [leftNode.data, rightNode.data] = [rightNode.data, leftNode.data]
    }
  
    print(): void {
      if (!this.head) {
        return;
      }
      let node: Node | null = this.head;
      while (node) {
        console.log(node.data);
        node = node.next;
      }
    }
  }