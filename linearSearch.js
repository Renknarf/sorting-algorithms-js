// A simple search algorithm that finds the position of a target value within a list

function linearSeach(arr, target) {
	for(let i = 0; i < arr.length; i++) {
		if(arr[i] === target) {
			return i;
		}
	}
	return -1; // Not found
}
