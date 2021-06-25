class Node {
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

class BinarySearchTree {
  constructor(root = null) {
    this.root = root;
  }

  /** insert(val): insert a new node into the BST with value val.
   * Returns the tree. Uses iteration. */

  insert(val) {
    let newNode = new Node(val);
    if (!this.root) {
      this.root = newNode;
      return this;
    } else {
      let currentNode = this.root;
      while (true) {
        if (val > currentNode.val) {
          if (!currentNode.right) {
            currentNode.right = newNode;
            return this;
          } else {
            currentNode = currentNode.right;
          }
        } else if (val < currentNode.val) {
          if (!currentNode.left) {
            currentNode.left = newNode;
            return this;
          } else {
            currentNode = currentNode.left;
          }
        }
      }
      currentNode = newNode;
      return this;
    }

  }

  /** insertRecursively(val): insert a new node into the BST with value val.
   * Returns the tree. Uses recursion. */

  insertRecursively(val) {
    if (!this.root) {
      let newNode = new Node(val);
      this.root = newNode;
    } else {

      function insertNode(node) {
        if (!node) {
          let newNode = new Node(val);
          node = newNode;
          return node;
        }
        if (val > node.val) {
          node.right = insertNode(node.right);
          return node;
        } else if (val < node.val) {
          node.left = insertNode(node.left);
          return node;
        }
      }

      insertNode(this.root);
    }
    return this;
  }

  /** find(val): search the tree for a node with value val.
   * return the node, if found; else undefined. Uses iteration. */

  find(val) {
    if (!this.root) {
      return undefined;
    }
    let currentNode = this.root;
    while (currentNode) {
      if (currentNode.val === val) {
        return currentNode;
      } else if (currentNode.val > val) {
        currentNode = currentNode.left;
      } else {
        currentNode = currentNode.right;
      }
    }
  }

  /** findRecursively(val): search the tree for a node with value val.
   * return the node, if found; else undefined. Uses recursion. */

  findRecursively(val) {
    if (!this.root) {
      return undefined;
    }

    function findNode(node) {
      if (!node) {
        return undefined;
      } else if (node.val === val) {
        return node;
      } else if (node.val > val) {
        return findNode(node.left);
      } else return findNode(node.right);
    }

    return findNode(this.root);
  }

  /** dfsPreOrder(): Traverse the array using pre-order DFS.
   * Return an array of visited nodes. */

  dfsPreOrder() {
    let arr = [];

    function dfsPreOrderNode(node) {
      if (node) {
        arr.push(node.val);
        dfsPreOrderNode(node.left);
        dfsPreOrderNode(node.right)
      }
    }
    dfsPreOrderNode(this.root);
    return arr;

  }

  /** dfsInOrder(): Traverse the array using in-order DFS.
   * Return an array of visited nodes. */

  dfsInOrder() {
    let arr = [];

    function dfsPreOrderNode(node) {
      if (node) {
        dfsPreOrderNode(node.left);
        arr.push(node.val);
        dfsPreOrderNode(node.right)
      }
    }
    dfsPreOrderNode(this.root);
    return arr;

  }

  /** dfsPostOrder(): Traverse the array using post-order DFS.
   * Return an array of visited nodes. */

  dfsPostOrder() {
    let arr = [];

    function dfsPreOrderNode(node) {
      if (node) {
        dfsPreOrderNode(node.left);
        dfsPreOrderNode(node.right);
        arr.push(node.val);
      }
    }
    dfsPreOrderNode(this.root);
    return arr;

  }

  /** bfs(): Traverse the array using BFS.
   * Return an array of visited nodes. */

  bfs() {
    let arr = [];

    if (!this.root) return arr;

    let toVisit = [this.root];
    while (toVisit.length) {
      let node = toVisit.shift();
      arr.push(node.val);
      if (node.left) toVisit.push(node.left);
      if (node.right) toVisit.push(node.right);
    }
    return arr;
  }

  /** Further Study!
   * remove(val): Removes a node in the BST with the value val.
   * Returns the removed node. */

  remove(val) {

  }

  /** Further Study!
   * isBalanced(): Returns true if the BST is balanced, false otherwise. */

  isBalanced() {

  }

  /** Further Study!
   * findSecondHighest(): Find the second highest value in the BST, if it exists.
   * Otherwise return undefined. */

  findSecondHighest() {

  }
}

module.exports = BinarySearchTree;
