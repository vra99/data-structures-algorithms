'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('end', _ => {
    inputString = inputString.replace(/\s*$/, '')
        .split('\n')
        .map(str => str.replace(/\s*$/, ''));

    main();
});

function readLine() {
    return inputString[currentLine++];
}

const SinglyLinkedListNode = class {
    constructor(nodeData) {
        this.data = nodeData;
        this.next = null;
    }
};

const SinglyLinkedList = class {
    constructor() {
        this.head = null;
        this.tail = null;
    }

    insertNode(nodeData) {
        const node = new SinglyLinkedListNode(nodeData);

        if (this.head == null) {
            this.head = node;
        } else {
            this.tail.next = node;
        }

        this.tail = node;
    }
};

function printSinglyLinkedList(node, sep, ws) {
    while (node != null) {
        ws.write(String(node.data));

        node = node.next;

        if (node != null) {
            ws.write(sep);
        }
    }
}

/*
    Find merge point of two linked lists
    Note that the head may be 'null' for the empty list.
    Node is defined as
    var Node = function(data) {
        this.data = data;
        this.next = null;
    }
*/

// This is a "method-only" submission.
// You only need to complete this method.

function findMergeNode(headA, headB) {
    let currentA = headA;
    let currentB = headB;
    let countA = 0;
    let countB = 0;
    while (currentA != null) {
        countA++;
        currentA = currentA.next;
    }
    while (currentB != null) {
        countB++;
        currentB = currentB.next;
    }
    currentA = headA;
    currentB = headB;
    if (countA > countB) {
        let diff = countA - countB;
        while (diff > 0) {
            currentA = currentA.next;
            diff--;
        }
    } else {
        let diff = countB - countA;
        while (diff > 0) {
            currentB = currentB.next;
            diff--;
        }
    }
    while (currentA != null) {
        if (currentA == currentB) {
            return currentA.data;
        }
        currentA = currentA.next;
        currentB = currentB.next;
    }
    return null;
}
