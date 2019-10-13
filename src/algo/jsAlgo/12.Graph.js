// 图的表示方法
// 1. 邻接矩阵
// 2. 邻接表
// 3. 关联矩阵

class Graph{
    constructor(isDirected = false) {
        this.isDirected = isDirected;
        this.vertices = [];
        this.adjList = {};
    }


    addVertice(v) {
        if(!this.vertices.includes(v)){
            this.vertices.push(v);
            this.adjList[v] = [];
        }
    }

    addEdge(v, w) {
        if(!this.adjList.hasOwnProperty(v)) {
            this.addVertice(v);
        }
        if(!this.adjList.hasOwnProperty(w)) {
            this.addVertice(w);
        }

        this.adjList[v].push(w)

        if(!this.isDirected) {
            this.adjList[w].push(v);
        }
    }

    getVertices() {
        return this.vertices;
    }

    getAdjList() {
        return this.adjList;
    }

    toString() {
        let s = '';
        for (let i = 0; i < this.vertices.length; i++) {
            let v =this.vertices[i];
            s += `${v} -> `;
            const neighbors = this.adjList[v];
            for(let j = 0; j < neighbors.length; j++) {
                s += `${neighbors[j]} `;
            }
            s += '\n';
        }
        return s;
    }
}

let graph = new Graph();
let myVertices = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I'];
for(let i = 0; i< myVertices.length; i++) {
    graph.addVertice(myVertices[i]);
}

graph.addEdge('A', 'B');
graph.addEdge('A', 'C');
graph.addEdge('A', 'D');
graph.addEdge('C', 'D');
graph.addEdge('C', 'G');
graph.addEdge('D', 'G');
graph.addEdge('D', 'H');
graph.addEdge('B', 'E');
graph.addEdge('B', 'F');
graph.addEdge('E', 'I');

console.log(graph.toString());

// 12.4 图的遍历
// Breadth-first search BFS
// Depth-first search DFS

const Colors = {
    White: 0,
    Grey: 1,
    Black: 2
};

const initializeColor = function(vertices) {
    const color = {};
    for (let i = 0; i < vertices.length; i++) {
        color[vertices[i]] = Colors.White;
    }

    return color;
};

const breadthFirstSearch = (graph, startVertice, callback) => {
    const vertices = graph.getVertices();
    const adjList = graph.getAdjList();
    const color = initializeColor(vertices);

    const queue = []; // Use array to simulate queue in js.
    queue.push(startVertice);

    const distances = {};
    const predecessors = {};

    for(let i = 0; i< vertices.length; i++) {
        distances[vertices[i]] = 0;
        predecessors[vertices[i]] = null;
    }

    while(queue.length > 0) {
        const u = queue.shift();
        const neighbors = adjList[u];
        color[u] = Colors.Grey;

        for(let i = 0; i < neighbors.length; i ++) {
            const w = neighbors[i];
            if(color[w] === Colors.White) {
                color[w] = Colors.Grey;
                distances[w] = distances[u] + 1;
                predecessors[w] = u;
                queue.push(w);
            }
        }

        color[u] = Colors.Black;
        if(callback) {
            //callback(u);
        }
    }

    return {
        distances,
        predecessors
    };
};

const printVertice = value => console.log('Visited vertice: ' + value);
breadthFirstSearch(graph, myVertices[0], printVertice);

const shortestPathA = breadthFirstSearch(graph, myVertices[0]);
console.log(shortestPathA);

const fromVertice = myVertices[0];
for(let i = 1; i < myVertices.length; i++) {
    const toVertice = myVertices[i];
    const path = []; // Simulate stack
    for(let v = toVertice; v !== fromVertice; v = shortestPathA.predecessors[v]) {
        path.push(v);
    }

    path.push(fromVertice);
    let s = path.pop();
    while(path.length > 0) {
        s += ' - ' + path.pop();
    }

    console.log(s);

}

const depthFirstSearch = (graph, callback) => {
    const vertices = graph.getVertices();
    const adjList= graph.getAdjList();
    const color = initializeColor(vertices);

    for(let i = 0; i < vertices.length; i++) {
        if(color[vertices[i]] === Colors.White) {
            depthFirstSearchVisit(vertices[i], color, adjList, callback);
        }
    }
};

const depthFirstSearchVisit = (u, color, adjList, callback) => {
    color[u] = Colors.Grey;
    if(callback) {
        callback(u);
    }

    const neighbors = adjList[u];
    for(let i = 0; i < neighbors.length; i++) {
        const w = neighbors[i];
        if(color[w] === Colors.White) {
            depthFirstSearchVisit(w, color, adjList, callback);
        }
    }
    color[u] = Colors.Black;
};

depthFirstSearch(graph, printVertice);


const DFS = graph => {
    const vertices = graph.getVertices();
    const adjList = graph.getAdjList();
    const color = initializeColor(vertices);
    const d = {} // 发现时间
    const f = {} // 完成探索时间
    const p = {} // 前溯点

    const time = {count: 0};
    for(let i = 0; i < vertices.length; i++) {
        d[vertices[i]] = 0;
        f[vertices[i]] = 0;
        p[vertices[i]] = null;
    }

    for(let i = 0; i < vertices.length; i++) {
        if(color[vertices[i]] === Colors.White) {
            DFSVisit(vertices[i], color, d, f, p, time, adjList);
        }
    }

    return {
        discovery: d,
        finished: f,
        predecessors: p
    };
};

const DFSVisit = (u, color, d, f, p, time, adjList) => {
    color[u] = Colors.Grey;
    d[u] = ++time.count;
    const neighbors = adjList[u];
    for(let i = 0; i < neighbors.length; i++) {
        const w = neighbors[i];
        if(color[w] === Colors.White){
            p[w] = u;
            DFSVisit(w, color, d, f, p, time, adjList);
        }
    }
    color[u] = Colors.Black;
    f[u] = ++ time.count;
};


graph = new Graph(true);
myVertices = ['A', 'B', 'C', 'E', 'F'];
for(let i = 0; i < myVertices.length; i++) {
    graph.addVertice(myVertices[i]);
}
graph.addEdge('A', 'C');
graph.addEdge('A', 'D');
graph.addEdge('B', 'D');
graph.addEdge('B', 'E');
graph.addEdge('C', 'F');
graph.addEdge('F', 'E');

const result = DFS(graph);
console.log(result);

