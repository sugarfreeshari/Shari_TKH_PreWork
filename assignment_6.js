var array = [ "Retta", "Vern", "Marica", "Cyrus", "Linette", "Curt", "Nichole", "Jesica", "Wynell", "Michaele" ];

var answer=0;
for(var i =0;i<array.length;i++){
	var longest_name;
	longest_name = array[i].length;
	if(answer<longest_name){
		answer = longest_name;
	}


}
console.log(answer);