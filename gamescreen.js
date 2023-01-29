 /* Acess to score, startscreen and game screen */
 let score = document.querySelector("score");
 let startScreen = document.getElementById("start-screen");
 let gameArea = document.querySelector(".game-area");

 /* initially key will be false bydefault */
  /* this is object of keys ,if any other key is pressed it is automatically added inside the object better to use if condition in keypressed and released function to perform or not perform on any specified key */
 let controls = {
     ArrowUp: false, 
     ArrowDown: false,
     ArrowLeft: false,
     ArrowRight: false
 }

 let player = {
    speed: 5, // 5px per sec
    score: 0,
    start: false
}


function start(){
     console.log("Car")
    let car = document.querySelector('.car');
    
     if(player.start){
       car.style.top = player.x +player.speed + "px";
       car.style.left = player.y +player.speed + "px";
       requestAnimationFrame(start);
     }
}

 /* adding event listner of startscreen ie key will be pressed or released on startscreen */
 startScreen.addEventListener('click',startGame) //click event listner
 document.addEventListener('keydown',keyPressed);//keydown event call keypressed function
 document.addEventListener('keyup',keyReleased); //keyup event call keyreleased function

 function keyPressed(e){ //e is an event ,key pressed key will be true -keydown
     console.log("pressed",e.key);
     if(controls["e.key"] !== undefined){
        controls[e.key] = true;
     }
 }

 function keyReleased(e){ //e is an event ,key released key will be false -keyup
     console.log("released",e.key);
     if(controls["e.key"] !== undefined){
        controls[e.key] = false;
     }
 }
 function startGame(){
    console.log("Clicked");
    //add or remove the class from the element 
    startScreen.classList.add('hide');
    gameArea.classList.toggle('hide');

    /* create a car when startgame functions runs */
    let car = document.createElement('div');
    car.setAttribute('class','car');
    car.style.backgroundColor="orange";
    gameArea.appendChild(car);

    requestAnimationFrame(start)
 }