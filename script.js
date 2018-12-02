document.getElementsByTagName('body')[0].insertAdjacentHTML('beforeEnd','<img src="img/orange.png" id="orange">');
var orange = document.getElementById('orange');
orange.style.position = 'fixed';

document.getElementsByTagName('body')[0].insertAdjacentHTML('beforeEnd','<img src="img/pig.png" id="pig">');
var pig = document.getElementById('pig');
pig.style.position = 'fixed';

document.getElementsByTagName('body')[0].insertAdjacentHTML('beforeEnd','<div id="scoreObj"></div>');
var scoreObj= document.getElementById('scoreObj');
scoreObj.style.textAlign = "center";
scoreObj.style.fontSize = 72+"pt";
var score=0

var mouseListener = function(event){mouseMoveFunc(event)};
document.addEventListener("mousemove", mouseListener);

function mouseMoveFunc(event){
	pig.style.left=event.clientX - 64 +'px';
	pig.style.top=event.clientY - 64 +'px';
	checkCollision();
}

function spawnOrange(){
	orange.style.left=Math.random()*(window.innerWidth-128) + 'px';
	orange.style.top=Math.random()*(window.innerHeight-128) + 'px';
} 
spawnOrange();

function checkCollision(){
	
	if (Math.sqrt(Math.pow(pig.offsetLeft - orange.offsetLeft,2) + Math.pow(pig.offsetTop - orange.offsetTop,2)) <128)
	{
		spawnOrange();
		score++;
		setScore(score);
	}
}

setScore(0);

function setScore(scoreToSet){
	scoreObj.innerHTML = "Очки: "+scoreToSet;
}