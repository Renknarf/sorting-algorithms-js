// Another tranversal algorithm that visits all the vertices of a graph in breadthward motion.

function bfs(graph, start) {
	const visited = new Set();
	const queue = [start];
	
	while (queue.length > 0) {
		const node = queue.shift();
		
		if(!visited.has(node)) {
			console.log(node);
			visited.add(node);
			
			const neighbors = graph[node];
			for (const neightbor of neighbors) {
				queue.push(neighbor);	
			}		
		}
	}
	
}
