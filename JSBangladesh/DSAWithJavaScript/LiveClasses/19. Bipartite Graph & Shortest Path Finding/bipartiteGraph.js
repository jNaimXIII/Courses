// invalid
const graph = {
  1: [2, 3],
  2: [1, 5, 3],
  3: [2, 5],
  4: [1, 5],
  5: [2, 3, 4],
};

// // valid
// const graph = {
//   1: [2],
//   2: [1, 5],
//   4: [1, 5],
//   5: [2, 4],
// };

function isBipartite(graph, source) {
  const colors = {};
  const queue = [source];

  let n = 0;
  while (queue.length) {
    const node = queue.shift();

    colors[node] = n % 2;

    for (const sibling of graph[node]) {
      if (colors[sibling] !== undefined) {
        if (colors[sibling] === n % 2) {
          return false;
        }
      } else {
        queue.push(sibling);
        colors[sibling] = n % 2;
      }
    }

    n++;
  }

  return true;
}

console.log(isBipartite(graph, 1));
