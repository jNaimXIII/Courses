class Graph {
  constructor() {
    this.connections = new Map();
  }

  add(a, b) {
    const aConn = this.connections.get(a);
    if (aConn) {
      aConn.push(b);
    } else {
      this.connections.set(a, [b]);
    }

    const bConn = this.connections.get(b);
    if (bConn) {
      bConn.push(b);
    } else {
      this.connections.set(b, [a]);
    }
  }
}

const graph = new Graph();

graph.add(1, 2);
graph.add(1, 3);
graph.add(1, 4);
graph.add(1, 5);
graph.add(1, 6);

graph.add(2, 3);
graph.add(2, 4);

console.log(graph);
