class Graph {
    constructor() {
        this.adjacencyList = {}
    }

    addVertex(vertex) {
        if(!this.adjacencyList[vertex]) {
            this.adjacencyList[vertex] = []
            return true;
        }
        return false
    }

    addEdge(vertex1, vertex2) {
        // if we have 2 vertices located inside adjacencyList, we will push each vertex into the other's array, thus making the connection
        if (this.adjacencyList[vertex1] && this.adjacencyList[vertex2]) {
            this.adjacencyList[vertex1].push(vertex2)
            this.adjacencyList[vertex2].push(vertex1)
            return true;
        }
        return false;
    }
}

let myGraph = new Graph()

myGraph.addVertex(1)
myGraph.addVertex(2)
myGraph.addEdge("1", "2")
myGraph