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

  search(target) {
    let node = this.root;

    while (node) {
      if (node.value === target) return node;

      if (node.value < target) {
        node = node.right;
      } else {
        node = node.left;
      }
    }

    return null;
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

console.log(bst.search(25));
