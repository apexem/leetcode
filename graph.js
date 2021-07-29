class Graph {
    constructor() {
        this.adjList = new Map();
    }

    addVertex(v) {
        this.adjList.set(v, []);
    }

    addEdge(v, w) {
        this.adjList.get(v).push(w);
        this.adjList.get(w).push(v);
    }
}

const dfs = (graph, searched) => {
    const adj = graph.adjList;
    const stack = new Array();
    stack.push("A");
    const visited = new Set();
    while (stack.length > 0) {
        let item = stack.pop();
        console.log("curently visited:" + item);
        if (visited.has(item))
            continue;
        else
            visited.add(item);

        if (item === searched) {
            console.log("found!");
            return true;
        }
        let children = adj.get(item);
        children.forEach(el => {
            stack.push(el);
        });
    }
}

const bfs = (graph, searched) => {
    const adj = graph.adjList;
    const queue = new Array();
    queue.push("A");
    const visited = new Set();
    while (queue.length > 0) {
        let item = queue.shift();
        console.log("curently visited:" + item);
        if (visited.has(item))
            continue;
        else
            visited.add(item);

        if (item === searched) {
            console.log("found!");
            return true;
        }
        let children = adj.get(item);
        children.forEach(el => {
            queue.push(el);
        });
    }
}

const xd = new Graph();
xd.addVertex("A");
xd.addVertex("B");
xd.addVertex("C");
xd.addVertex("D");
xd.addVertex("E");
xd.addVertex("G");
xd.addVertex("F");
xd.addVertex("H");

xd.addEdge("A", "B");
xd.addEdge("A", "C");
xd.addEdge("A", "G");

xd.addEdge("B", "H");
xd.addEdge("C", "D");
xd.addEdge("G", "E");
xd.addEdge("E", "F");
console.log(dfs(xd, "D"));
