// Approach 1
/*function secondHighest(){
      arr.sort((a,b)=> b-a)
	let ans=arr.splice(1,1)
	return ans.join(" ")
}*/

// Approach 2

function secondHighest(arr) {
 let firstHighest=-infinity
 let secondHihest=-infinity

for(let i=0;i<arr.length;i++){
	if(arr[i]>firsttHighest){
		secondHighest=firstHighest
		firstHighest=arr[i]
	}
	else if(arr[i]<firstHighest && arr[i]>secondHighest){
		secondHighest=arr[i]
	}
}	

	if(secondHighest==-infinity){
		return -infinity
	}
	else{
		return secondHighest
	}
}
function Main() {
			var n = prompt("Enter the number of elements");
			var arr = [];
			for (var i = 0; i < n; i++) {
				arr[i] = prompt("Enter element " + (i+1));
			}
			alert(secondHighest(arr));
		Main();
		}