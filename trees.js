// Write a function to find the 2nd largest element in a binary search tree. 

  class BinaryTreeNode {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }

  insertLeft(value) {
    this.left = new BinaryTreeNode(value);
    return this.left;
  }

  insertRight(value) {
    this.right = new BinaryTreeNode(value);
    return this.right;
  }

    insert(value) {
        if (value < this.value) {
            if (this.left === null) {
                this.left = new BinaryTreeNode(value);
            } else {
                this.left.insert(value);
            }
        } else {
            if (this.right === null) {
                this.right = new BinaryTreeNode(value);
            } else {
                this.right.insert(value);
            }
        }
    }
    isSubtree(root, isSubtree) {
        if (root === null) {
            return false;
        }
        if (root.value === isSubtree.value) {
            return this.isSubtree(root.left, isSubtree.left) && this.isSubtree(root.right, isSubtree.right);
        }
        return this.isSubtree(root.left, isSubtree) || this.isSubtree(root.right, isSubtree); 
    }

}

