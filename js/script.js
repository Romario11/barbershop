
alert("Hello world")
for (var i = 0; i <10; i++) {
	alert(i);
}
if (true) {
	if (true) {}
		else{}
}

function removeChar(str){
var arr = str.split('');
 arr.shift();
 arr.pop();
 return arr.join("");

};
 
 console.log( removeChar("Romario"));