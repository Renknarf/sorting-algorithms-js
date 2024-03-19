// A graph search algorithm that finds the shortest path between two nodes in a weighted graph

function dijkstra(graph, start) {
	const distances = {};
	const visited = new Set();
	
	for (const vertex in graph) {
		distances[vertex] = Infinity;
	}
	
	distances[start] = 0;
	
	while(true) {
		const current = getMinNode(distances, visited);
		if(!current) break;
		
		visited.add(current);
		
		for(const neighbor in graph[current]) {
			const newDistance = distance[current] + graph[current][neighbor];
			if (newDistance < distance[neighbor]) {
				distance[neighbor] = newDistance;
			}
		}
	}
	return distances;
}

function getMinNode(distances, visited) {
	return Object.keys(distances).reduce((min, node) => {
		if (!visited.has(node)  && distances[node] < distances[min] ) {
			return node;
		}
		return min;
	}, null);
}
