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

const graph = new Graph();
const myVertices = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I'];
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

    while(queue.length > 0) {
        const u = queue.shift();
        const neighbors = adjList[u];
        color[u] = Colors.Grey;

        for(let i = 0; i < neighbors.length; i ++) {
            const w = neighbors[i];
            if(color[w] === Colors.White) {
                color[w] = Colors.Grey;
                queue.push(w);
            }
        }

        color[u] = Colors.Black;
        if(callback) {
            callback(u);
        }
    }
};

const printVertice = value => 
console.log('Visited vertice: ' + value);
breadthFirstSearch(graph, myVertices[0], printVertice);








