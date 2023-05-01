class Node {
  constructor(value, left, right) {
    this.value = value;
    this.left = left;
    this.right = right;
  }
}

const root = new Node(1);

root.left = new Node(2);
root.right = new Node(3);

root.left.left = new Node(4);
root.left.right = new Node(5);

root.right.left = new Node(6);
root.right.right = new Node(7);

// function breadthFirstSearch(root) {
//   const nodes = [root];
//   let currentNodeIndex = 0;
//   let node = nodes[currentNodeIndex];
//
//   while (node) {
//     console.log(node.value);
//     if (node.left) nodes.push(node.left);
//     if (node.right) nodes.push(node.right);
//
//     currentNodeIndex++;
//     node = nodes[currentNodeIndex];
//   }
// }

function breadthFirstSearch(root) {
  const nodes = [root];

  while (nodes.length) {
    const node = nodes.shift();

    console.log(node.value);

    if (node.left) nodes.push(node.left);
    if (node.right) nodes.push(node.right);
  }
}

// breadthFirstSearch(root);

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

// console.log(bst.search(25));

function depthFirstSearch(node, items) {
  if (!node) return;

  depthFirstSearch(node.left, items);
  depthFirstSearch(node.right, items);

  console.log(node.value);
  items.push(node.value);
  return items;
}

const items = [];
depthFirstSearch(bst.root, items);
console.log(items);

// NOTE: i wanted to traverse all left nodes, then all
// right, but, i guess it doesn't work with this kind of
// structure.
// function directedDepthFirstSearch(node, direction) {
//   if (!node) return;
//
//   console.log(node.value);
//
//   if (direction === "left") {
//     directedDepthFirstSearch(node.left, "left");
//     directedDepthFirstSearch(node.right, "right");
//   } else if (direction === "right") {
//     directedDepthFirstSearch(node.right, "right");
//     directedDepthFirstSearch(node.left, "left");
//   }
// }
//
// directedDepthFirstSearch(bst.root, "left");
