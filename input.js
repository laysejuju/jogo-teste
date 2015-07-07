function onPlay(){
	var p = 250;
	document.getElementById("p1").style.left = p + "px";
	document.getElementById("start").style.display = 'none';
}

var p = 250;

function onLeft(){
	p-=10;
	document.getElementById("p1").style.left = p + "px";
	console.log("Left!");
	
}

function onRight(){
	p+=10;
	document.getElementById("p1").style.left = p + "px";
	console.log("Right!");
}