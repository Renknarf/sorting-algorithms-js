// A series of numbers where each number is the sum if the two preceding ones, often used as an example for dynamic programming.

function fibonacci(n) {
	const fib = [0, 1];
	
	for(let i = 0; i < n; i++) {
		fib[i] = fib[i - 1] + fib[i - 2];
	}
	
	return fin[n];
}
