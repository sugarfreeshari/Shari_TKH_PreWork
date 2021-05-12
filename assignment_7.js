var names_array = ["bob","jimmy","max b", "bernie", "jordan", "future hendrix"];

var even_arr = new Array();
var odd_arr = new Array();
for(var i = 0; i<names_array.length;i++){
	if(names_array[i].length%2==0){
		even_arr.push(names_array[i]);
	}
	else{
odd_arr.push(names_array[i]);
	}

}
console.log(even_arr.toString());
console.log(odd_arr.toString());

for(var j=0; j<=even_arr.length;j++){
	console.log(even_arr[j]);
	var string3 = "b" + even_arr[j].slice(1);
	console.log(string3 + "string3");
	//even_arr.
	even_arr.splice(j, j, string3);
	

}

for(var j=0; j<=odd_arr.length;j++){
		var string2 = "c" + odd_arr[j].slice(1);

	odd_arr.splice(j, j, string2);
	
}

console.log(odd_arr.toString());
console.log(even_arr.toString());