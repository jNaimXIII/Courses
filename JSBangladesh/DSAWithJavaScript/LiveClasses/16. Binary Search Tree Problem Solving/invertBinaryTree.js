function invertBinaryTree(root) {
  const nodes = [root];

  while (nodes.length) {
    const node = nodes.shift();

    const temp = node.left;
    node.left = node.right;
    node.right = temp;

    // [node.left, node.right] = [node.right, node.left];

    if (node.left) nodes.push(node.left);
    if (node.right) nodes.push(node.right);
  }
}

function invertBinaryTreeDepthFirst(node) {
  if (!node) return;

  const temp = node.left;
  node.left = node.right;
  node.right = temp;

  depthFirstSearch(node.left);
  depthFirstSearch(node.right);
}
