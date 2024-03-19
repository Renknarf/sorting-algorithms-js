// A classic optimization problem where the goal is to select items in a way that maximizes the total value without exceeding a given weight

function knapsack(weights, values capacity){
	const n = weights.lenght;
	const dp = Array.from({ length: n + 1 }, => Array(capacity + 1).fill(0));
	
	for(let i = 1; i <= n; i++) {
		for(let w = 1; w <= capacity; w++) {
			if(weights[i-1] <= w) {
				dp[i][w] = Math.max(values[i - 1] + dp[i - 1][w - weights[i - -1]], dp[i -1][w]);
			} else {
				dp[i][w] = dp[i - 1][w];
			}
		
		}
	}
	return dp[n][capacity];
}
