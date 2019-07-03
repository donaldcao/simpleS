function Graph() {
    var vertices = [];
    var adjList = new Map();

    this.addVertex = function(v) {
        vertices.push(v);
        adjList.set(v, []);
    },

    this.addVertex = function(v) {
        vertices.push(v);
        adjList.set(v, []);
    },

    this.addEdge = function(v, w) {
        adjList.get(v).push(w);
        adjList.get(w).push(v);
    },

    this.toString = function() {
        var s = '';
        for(var i = 0; i< vertices.length; i++) {
            s += vertices[i] + ' -> ';
            var neighbors = adjList.get(vertices[i]);
            for(var j = 0; j < neighbors.length; j++) {
                s += neighbors[j] + ' ';
            }
            s += '\n';
        }

        return s;
    };
}

