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
  100: [101],
  101: [100],
};

function dfs(graph, start, previouslyVisited = {}) {
  if (!graph[start]) throw new Error("node doesn't exist");

  // use hashmap cause access time is O(1)
  const visited = {
    ...previouslyVisited,
  };

  for (const key in graph) {
    if (visited[key] === undefined) visited[key] = false;
  }

  visited[start] = true;

  const queue = [start];

  while (queue.length) {
    const node = queue.shift();

    console.log(node);

    for (const sibling of graph[node]) {
      if (!visited[sibling]) {
        queue.push(sibling);
        visited[sibling] = true;
      }
    }
  }

  for (const key in visited) {
    if (!visited[key]) {
      dfs(graph, Number(key), visited);
      break;
    }
  }
}

dfs(graph, 1);
