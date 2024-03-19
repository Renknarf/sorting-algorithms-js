// A traversal algorithm that explores as far as possible along each branch before backtracking

class Graph {
	constructor(){
		this.adjList = new Map();
	}
	
	addVertex(vertex) {
		this.adjList.set(vertex, []);	
	}
	
	addEdge(v, w) {
		this.adjList.get(v).push(w);
		this.adjList.get(w).push(v);
	}
	
	dfs(startingNode) {
		const visited = new Set();
		
		function dfsHelper(node) {
			visited.add(node);
			console.log(node);
			
			const neightbors = this.adjList.get(node);
			for (const neightbor of neighbors) {
				if (!visited.has(neighbor)) {
					dfsHelper(neighbor);
				}
			}
			
		}
		
		dfsHelper(startingNode);
	}
}
