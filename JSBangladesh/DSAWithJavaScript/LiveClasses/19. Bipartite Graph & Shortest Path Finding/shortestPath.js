const graph = {
  1: [2, 3],
  2: [1, 8],
  3: [1, 4, 6],
  4: [5, 3, 7],
  5: [4, 9],
  6: [3, 8],
  7: [4, 6, 8],
  8: [2, 7, 10, 11],
  9: [5, 10],
  10: [8, 9],
  11: [8],
};

function shortestPath(graph, source, target) {
  const parents = {
    [source]: null,
  };
  const queue = [source];

  while (queue.length) {
    const node = queue.shift();

    if (node === target) break;

    for (const sibling of graph[node]) {
      if (sibling in parents) continue;
      parents[sibling] = node;
      queue.push(sibling);
    }
  }

  const path = [];
  for (let node = target; node !== null; node = parents[node]) {
    path.push(node);
  }
  return path.reverse();
}

console.log(shortestPath(graph, 1, 11));
