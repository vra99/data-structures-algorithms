/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var maxDepth = function(root) {
    if(!root) return 0;
    return Math.max(maxDepth(root.left), maxDepth(root.right)) + 1;
};

function maxDepth(T) {
    if(!T) return 0;
    return Math.max(maxDepth(T.left), maxDepth(T.right)) + 1;
}

function TreeNode(val, left, right) {
    this.val = (val===undefined ? 0 : val)
    this.left = (left===undefined ? null : left)
    this.right = (right===undefined ? null : right)
}

var sortedArrayToBST = function(nums) {
    if(nums.length === 0) return null;
    let mid = Math.floor(nums.length / 2);
    let root = new TreeNode(nums[mid]);
    root.left = sortedArrayToBST(nums.slice(0, mid));
    root.right = sortedArrayToBST(nums.slice(mid + 1));
    return root;
};

function insert(root, val) {
    if(!root) return new TreeNode(val);
    if(val < root.val) root.left = insert(root.left, val);
    else root.right = insert(root.right, val);
    return root;
}

function getValues(root) {
    if(!root) return [];
    return getValues(root.left).concat(root.val, getValues(root.right));
}

// create tree
let root = new TreeNode(1);
let root1 = new TreeNode(1);

insert(root, 3);
insert(root, 2);
insert(root, 1);
insert(root1, 7);
insert(root1, 2);
insert(root1, 6);


var isSameTree = function(p, q) {
    if(!p && !q) return true;
    if(!p || !q) return false;
    return p.val === q.val && isSameTree(p.left, q.left) && isSameTree(p.right, q.right);
};

var invertTree = function(root) {
    if(!root) return null;
    let left = invertTree(root.left);
    let right = invertTree(root.right);
    root.left = right;
    root.right = left;
    return root;;   
};

function postOrder(root) {
    if(!root) return [];
    return postOrder(root.left).concat(postOrder(root.right)).concat(root.val);
}

function preOrder(root) {
    if(!root) return [];
    return [root.val].concat(preOrder(root.left)).concat(preOrder(root.right));
}

var inorderTraversal = function(root) {
    if(!root) return [];
    return inorderTraversal(root.left).concat(root.val, inorderTraversal(root.right));
};

function isSubTree(root, subRoot) {
    if(!root) return false;
    if(isSameTree(root, subRoot)) return true;
    return isSubTree(root.left, subRoot) || isSubTree(root.right, subRoot);
}

// console.log(invertTree(root));

function fizzBuzzer(n) {
    if(n < 1) return [];
    return fizzBuzzer(n - 1).concat(n % 3 === 0 && n % 5 === 0 ? 'FizzBuzz' : n % 3 === 0 ? 'Fizz' : n % 5 === 0 ? 'Buzz' : n);
}


function sumArray (array){
    if(array.length === 0) return 0;
    return array[0] + sumArray(array.slice(1));
}

var lowestCommonAncestor = function(root, p, q) {
    if(!root) return null;
    if(root.val === p.val || root.val === q.val) return root;
    let left = lowestCommonAncestor(root.left, p, q);
    let right = lowestCommonAncestor(root.right, p, q);
    if(left && right) return root;
    return left ? left : right;
};

function reverseTree(root) {
    if(!root) return null;
    let left = reverseTree(root.left);
    let right = reverseTree(root.right);
    root.left = right;
    root.right = left;
    return root;
}

function isBalanced(root) {
    if(!root) return true;
    let left = height(root.left);
    let right = height(root.right);
    return Math.abs(left - right) <= 1 && isBalanced(root.left) && isBalanced(root.right);
}

var levelOrder = function(root) {
    if(!root) return [];
    let result = [];
    let queue = [root];
    while(queue.length) {
        let level = [];
        let size = queue.length;
        for(let i = 0; i < size; i++) {
            let node = queue.shift();
            level.push(node.val);
            if(node.left) queue.push(node.left);
            if(node.right) queue.push(node.right);
        }
        result.push(level);
    }
    return result;
};

var isValidBST = function(root) {
    
     var max= Infinity;
     var min= -Infinity;
    
    return isValid(root,min,max);
  
    function isValid(root,min,max)
    {
        if(!root) return true;
        
        // Сheck that curent node meets the minimum and maximum limits
        if((root.val<=min) || ( root.val>=max))
            return false;  
        
        // Check left and right branches
        return  isValid(root.left, min, root.val) && isValid(root.right, root.val, max);
    }
};

var sortedListToBST = function(head) {
 if(!head) return null;
    
    const sorted = [];
    
    let cur = head;
    
    while(cur) {
        sorted.push(cur.val);
        
        cur = cur.next;
    }
    
    const generate = (l, r) => {
        if(l > r) return null;
        
        const mid = Math.floor((r+l)/2);
    
        let val = sorted[mid];
        
        const node = new TreeNode(val);

        node.left = generate(l, mid-1);
        node.right = generate(mid + 1, r);
        
        return node;
    };
    
    return generate(0, sorted.length-1);
};

console.log(fizzBuzzer(15));

