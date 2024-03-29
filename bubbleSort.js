// A simple sorting algorithm that repeatedly steps through the list, 
//compares adjacent elements, and swaps them if they are in the wrong order.

function bubbleSort(arr) {

	let n = arr.length;
	
	for ( let i = 0; i < n-1; i++ ) {	
		for ( let j = 0; j < n-1; j++ ) {			
			if( arr[j] > arr[j+1] ) {
				//Swap
				let temp = arr[j];
				arr[j] = arr[j+1];
				arr[j+1] = temp;		
			}			
		}	
	}	
	return arr;
}
