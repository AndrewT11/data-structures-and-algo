class Graph {
    // simple constructor. Creating an empty object {}
    constructor() {
        this.adjacencyList = {}
    }

    // will do this { A: [] }
    addVertex(vertex) {
        // we must have unique vertices, thus we need to use this validation statement
        if(!this.adjacencyList[vertex]) {
            this.adjacencyList[vertex] = []
            return true;
        }
        return false;
    }
}

let myGraph = new Graph()
myGraph;