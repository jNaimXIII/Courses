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
bst.insert(25);
bst.insert(15);
bst.insert(40);
bst.insert(7);
bst.insert(20);
bst.insert(35);
bst.insert(60);

function successorNode(node) {
  let curr = node.right;
  while (curr.left) curr = curr.left;
  return curr;
}

function deleteBSTNode(root, node) {
  const parent = parentNode(root, node);

  if (!node?.left && !node?.right) {
    if (parent?.left?.value === node.value) parent.left = null;
    else if (parent?.right?.value === node.value) parent.right = null;
  } else if (node.left && !node.right) {
    parent.left = node.left;
  } else if (node.right && !node.left) {
    parent.right = node.right;
  } else {
    const successor = successorNode(node);
    node.value = successor.value;
    deleteBSTNode(root, successor);
  }
}

function parentNode(root, target) {
  let node = root;

  let parent = null;
  while (node) {
    if (node.value === target.value) return parent;

    parent = node;
    if (node.value < target.value) {
      node = node.right;
    } else {
      node = node.left;
    }
  }

  return null;
}

// console.log(bst.root.left.left);
// deleteBSTNode(bst.root, bst.root.left.left);

deleteBSTNode(bst.root, bst.root);

function depthFirstSearch(node) {
  if (!node) return true;

  depthFirstSearch(node.left);
  console.log(node.value);
  depthFirstSearch(node.right);
}
depthFirstSearch(bst.root);
