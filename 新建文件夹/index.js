
setInterval('my()',100);
function my(){
	var q=document.documentElement.scrollTop;
	document.getElementById("demo").innerHTML=q;
	
}