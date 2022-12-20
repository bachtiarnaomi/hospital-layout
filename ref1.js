/*
In a weighted non-directed graph, each edge connecting two vertices has a weight or cost associated with it. The edges do not have a direction, so the graph is considered non-directed.

One way to represent a weighted non-directed graph in JavaScript is to use an adjacency matrix. An adjacency matrix is a two-dimensional array in which the rows and columns represent the vertices of the graph, and the value at each index represents the weight of the edge connecting the two vertices. For example, if the value at index [i][j] is 3, it means there is an edge with weight 3 connecting vertex i and vertex j. If there is no edge connecting the two vertices, the value at that index can be set to Infinity.

Here is an example of how you can implement a weighted non-directed graph using an adjacency matrix in JavaScript:

*/

class WeightedGraph {
    constructor(numVertices) {
      this.numVertices = numVertices;
      this.adjacencyMatrix = new Array(numVertices);
  
      // Initialize the adjacency matrix with all zeros
      for (let i = 0; i < numVertices; i++) {
        this.adjacencyMatrix[i] = new Array(numVertices).fill(Infinity);
      }
    }
  
    // Add an edge to the graph
    addEdge(startVertex, endVertex, weight) {
      this.adjacencyMatrix[startVertex][endVertex] = weight;
      this.adjacencyMatrix[endVertex][startVertex] = weight;  // Since the graph is non-directed, we also need to add the edge in the opposite direction
    }
  
    // Get the weight of the edge connecting the two vertices
    getWeight(startVertex, endVertex) {
      return this.adjacencyMatrix[startVertex][endVertex];
    }
  }
  
  // Create a new weighted graph with 4 vertices
  const graph = new WeightedGraph(4);
  
  // Add some edges to the graph
  graph.addEdge(0, 1, 3);
  graph.addEdge(0, 2, 2);
  graph.addEdge(1, 2, 5);
  graph.addEdge(2, 3, 4);
  
  // Get the weight of the edge connecting vertex 0 and vertex 2
  console.log(graph.getWeight(0, 2));  // Output: 2




  
  class WeightedGraph {
    constructor() {
      this.adjacencyList = {};
    }
  
    // Add a vertex to the graph
    addVertex(vertex) {
      if (!this.adjacencyList[vertex]) {
        this.adjacencyList[vertex] = [];
      }
    }
  
    // Add an edge to the graph
    addEdge(startVertex, endVertex, weight) {
      this.adjacencyList[startVertex].push({ vertex: endVertex, weight });
      this.adjacencyList[endVertex].push({ vertex: startVertex, weight });  // Since the graph is non-directed, we also need to add the edge in the opposite direction
    }
  
    // Get the weight of the edge connecting the two vertices
    getWeight(startVertex, endVertex) {
      const edges = this.adjacencyList[startVertex];
      for (let i = 0; i < edges.length; i++) {
        if (edges[i].vertex === endVertex) {
          return edges[i].weight;
        }
      }
      return null;
    }
  }
  
  // Create a new weighted graph
  const graph = new WeightedGraph();
  
  // Add some vertices to the graph
  graph.addVertex("A");
  graph.addVertex("B");
  graph.addVertex("C");
  graph.addVertex("D");
  
  // Add some edges to the graph
  graph.addEdge("A", "B", 3);
  graph.addEdge("A", "C", 2);
  graph.addEdge("B", "C", 5);
  graph.addEdge("C", "D", 4);
  
  // Get the weight of the edge connecting vertex "A" and vertex "C"
  console.log(graph.getWeight("A", "C"));  // Output: 2