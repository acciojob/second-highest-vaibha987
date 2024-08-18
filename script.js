function secondHighest(){
      arr.sort((a,b)=> b-a)
	let ans=arr.splice(1,1)
	return ans.join(" ")
}
