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

function validBST(node, high, low) {
  if (!node) return true;

  if (node.value < low || node.value > high) return false;

  return (
    validBST(node.left, node.value, low) &&
    validBST(node.right, high, node.value)
  );
}

// bst.root.left.value = 80;

console.log(validBST(bst.root, Infinity, -Infinity));

// function bstToArray(root, arr) {
//   const nodes = [root];
//
//   while (nodes.length) {
//     const node = nodes.shift();
//
//     if (node.left) nodes.push(node.left);
//
//     arr.push(node.value);
//
//     if (node.right) nodes.push(node.right);
//   }
// }
//
// const flatBST = [];
// bstToArray(root, flatBST);
//
// function validBST(flatBST) {
//   for (let i = 0; i < flatBST.length; i++) {
//     const prev = flatBST[i - 1] || -Infinity;
//     const current = flatBST[i];
//     if (current < prev) return false;
//   }
//   return true;
// }
//
// console.log(validBST(flatBST));
