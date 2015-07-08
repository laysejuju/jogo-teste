function onPlay(){
	var p = 250;
	document.getElementById("p1").style.left = p + "px";
	document.getElementById("start").style.display = 'none';
	
	var pisoY = 0;
	document.getElementById("piso").style.bottom = pisoY + "px";
	
	jogar();
	

	
}

var denteY =-10;
var velocidade=10;
var p = 250;
var pisoY = 0;

function jogar(){
	var denteX = Math.random() * 600;
	setInterval(gameLoop(denteX),120);
}

function gameLoop(denteX){
	//document.getElementById("dente").style.top = denteY + "px";
	
//	for (var i = 0; i < 10; i++) { 
		//document.getElementById("cenario").innerHTML="<div id='dente' class='objeto'></div>";
//	}

/*
	if(document.getElementById("dente").style.top >= "0px"){
		document.getElementById("dente").style.top = velocidade + denteY + "px";
		console.log("Desce!");
	}
	if(document.getElementById("dente").style.top == document.getElementById("piso").style.height){
		document.getElementById("dente").style.top = denteY + "px";
		console.log("Passou do tamanho");
	}

*/


		
		denteY+=velocidade;
		//console.log(velocidade++);
		//for (var i=0; i<10; i++){
			var dentePosX = document.getElementById('dente');
			dentePosX.style.left = parseInt(denteX) + "px" ;
			var dentePosY = document.getElementById('dente');
			dentePosY.style.top = parseInt(denteY) + "px" ;
			if(denteY > 300){
				dentePosY.style.top = denteY=0;
			}
			console.log(denteX);
		//}

}

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

/*

function jogar(){
	iniciar = setInterval(gameLoop, 30);
}

if(bolaPosY <= canvas.height)
				{
					bolaPosY += velocidadeBola;
				}
				else
				{
					bolaPosX = Math.random() * 600;
					bolaPosY = -10;
					colisao = false;
				}
*/