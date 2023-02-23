class LinkedList {
    constructor(head = null) {
        this.head = head
    }
}

class Node{
    constructor(val){
        this.val = val;
        this.next = null;
    }
    
}

//node_creation
let node1 = new Node(2)
let node2 = new Node(3)
let node3 = new Node(22)
let node4 = new Node(56)
let node5 = new Node(4)

node1.next = node2;
node2.next = node3;
node3.next = node4;
node4.next = node5;

const list = new LinkedList(node1)

function displayLinkedList(list){
    let head = list.head
    while (head){
        process.stdout.write(`${head.val} --> `)
        head = head.next
    }
    process.stdout.write("End")
    console.log("")
}

function addFirst(list, val){
    let head = list.head;
    let node = new Node(val)
    if (head){
        node.next = head;
        list.head = node.next;
    } else {
        list.head = node;
    }
    return list
}
let addFirstList = addFirst(list, 5);
displayLinkedList(addFirstList)
