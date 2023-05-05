class TreeNode {
  constructor(value, left = null, right = null) {
    this.value = value;
    this.left = left;
    this.right = right;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  insert(value) {
    const node = new TreeNode(value);

    if (!this.root) {
      this.root = node;
      return;
    }

    let parent = this.root;
    while (true) {
      if (parent.value < node.value) {
        if (!parent.right) {
          parent.right = node;
          break;
        }

        parent = parent.right;
      } else {
        if (!parent.left) {
          parent.left = node;
          break;
        }

        parent = parent.left;
      }
    }
  }
}

const bst = new BinarySearchTree();
bst.insert(10);
bst.insert(25);
bst.insert(15);
bst.insert(40);
bst.insert(30);
bst.insert(38);
bst.insert(8);
bst.insert(12);
bst.insert(6);
bst.insert(1);
bst.insert(35);
bst.insert(28);

function predecessor(node) {
  let curr = node.left;
  while (curr.right) curr = curr.right;
  return curr;
}

function successor(node) {
  let curr = node.right;
  while (curr.left) curr = curr.left;
  return curr;
}

console.log(predecessor(bst.root)?.value);
console.log(successor(bst.root)?.value);

// function depthFirstSearch(node) {
//   if (!node) return true;
//
//   depthFirstSearch(node.left);
//   console.log(node.value);
//   depthFirstSearch(node.right);
// }
