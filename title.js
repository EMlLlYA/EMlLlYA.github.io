if(document.addEventListener){
	document.addEventListener("DOMContentLoaded", function(){
		loaded();
	});
} else if(document.attachEvent){
	document.attachEvent("onreadystatechange", function(){
		loaded();
	});
}

function loaded(){
	
	setInterval(loop, 500);

}

var x = 0;

var titleText = [ "ㅤ", "3x6fv", "ㅤ", "t", "th", "thr", "thre", "three", "ㅤ", "three6", "three6 ", "three6 3", "three6 3x", "three6 3x6", "three6 3x6f", "three6 3x6fv", "three6 ", "three6 3x6fv", "three6 ", "three6 3x6fv",  "three6", "three", "thre"," thr", "th", "t", "", ];

function loop(){

	document.getElementsByTagName("title")[0].innerHTML = titleText[x++%titleText.length];

}