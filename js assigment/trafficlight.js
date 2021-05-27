
function normalSignal(event){

event.preventDefault();
const circles = document.querySelectorAll('.circle')
let activeLight = 0;

myTimer1=setInterval(() => {
	changeLight();
}, 1000);

function changeLight() {
	circles[activeLight].className = 'circle';
	activeLight++;
	
	if(activeLight > 2) {
		activeLight = 0;
	}
	
	const currentLight = circles[activeLight]
	
	currentLight.classList.add(currentLight.getAttribute('color'));
}

}

function greenSignal(event){

    const rcircles = document.querySelector('#red')
	const ycircles = document.querySelector('#yellow')
	rcircles.className = 'circle';
	ycircles.className = 'circle';



	event.preventDefault();	
	const circles = document.querySelector('#green')
	circles.classList.add(circles.getAttribute('color'));
}

function turnOff(event){
	event.preventDefault();	

    const rcircles = document.querySelector('#red')
	const ycircles = document.querySelector('#yellow')
	const gcircles = document.querySelector('#green')
	rcircles.className = 'circle';
	ycircles.className = 'circle';
	gcircles.className = 'circle';



	
	
}





function redSignal(event){
	event.preventDefault();
	
	const gcircles = document.querySelector('#green')
	const ycircles = document.querySelector('#yellow')
	gcircles.className = 'circle';
	ycircles.className = 'circle';


	const circles = document.querySelector('#red')
	circles.classList.add(circles.getAttribute('color'));
}


function yellowBlink(event){
	const gcircles = document.querySelector('#green')
	const rcircles = document.querySelector('#red')
	gcircles.className = 'circle';
	rcircles.className = 'circle';


	const circles = document.querySelector('#yellow')

	myTimer=setInterval(() => {
		blink();
	}, 700);

	myTimer3=setInterval(() => {
		blank();
	}, 1400);

	function blink(){	
	circles.classList.add(circles.getAttribute('color'));
	}
	function blank(){
		circles.className = 'circle';
	}
}