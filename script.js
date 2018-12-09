document.getElementsByTagName('body')[0].insertAdjacentHTML('beforeEnd','<img src="img/orange.png" id="orange">');
var orange = document.getElementById('orange');
orange.style.position = 'fixed';
orange.style.display = 'none';

document.getElementsByTagName('body')[0].insertAdjacentHTML('beforeEnd','<img src="img/pig.png" id="pig">');
var pig = document.getElementById('pig');
pig.style.position = 'fixed';
pig.style.display = 'none';

document.getElementsByTagName('body')[0].insertAdjacentHTML('beforeEnd','<div id="scoreObj"></div>');
var scoreObj= document.getElementById('scoreObj');
scoreObj.style.textAlign = "center";
scoreObj.style.fontSize = 72+"pt";
var score=0;
scoreObj.style.display = 'none';

var mouseListener = function(event){mouseMoveFunc(event)};

var enterListener = function(event){startGame(event)};
document.addEventListener("keydown", enterListener)

var intervalId;

var timer=15

document.getElementsByTagName('body')[0].insertAdjacentHTML('beforeEnd', '<div id="timerObj"></div>');
var timerObj= document.getElementById('timerObj');
timerObj.style.textAlign = "center";
timerObj.style.fontSize = 72+"pt";
timerObj.style.display = 'none';

function setTimer(timeToSet){
	console.log(timer);
	timerObj.innerHTML = "Time: "+ timeToSet
}

document.getElementsByTagName('body')[0].insertAdjacentHTML('beforeEnd', '<div id="helloText">Press ENTER to play.</div>');
var helloText = document.getElementById('helloText');
helloText.style.display = 'block';
helloText.style.textAlign = "center";
helloText.style.fontSize = 72+"pt";

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
setScore(0);




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
	scoreObj.innerHTML = "Score: "+scoreToSet;
}

function startGame(event){
	if (event.keyCode ==13){
		score = 0;
		setScore(0);

		helloText.style.display = 'none';
		scoreObj.style.display = 'block';
		orange.style.display = 'block';
		pig.style.display = 'block';

		document.removeEventListener('keydown', enterListener);
		document.addEventListener("mousemove", mouseListener);

		spawnOrange();
		setScore(0)

		timerObj.style.display = 'block';
        timer = 15;
        setTimer(timer);

        intervalId = setInterval(
        	function(){cntdwn();}, 1000);
	}
}

function cntdwn(){
	timer-=1;
	setTimer(timer);
	if (timer==0){
		clearInterval(intervalId);
		document.addEventListener("mousemove", mouseListener);
		helloText.innerHTML="The end, your result: "+ score+ ".<br> Press ENTER to play again.";
		helloText.style.display = "block";
		pig.style.display = 'none';
		orange.style.display = 'none';
		scoreObj.style.display = 'none';
		timerObj.style.display = 'none';
		document.addEventListener("keydown", enterListener);
	}
}