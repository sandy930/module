let cvs= document.getElementById("snake");
let ctx= cvs.getContext("2d");

//load img

let ground= new Image();
ground.src="img/ground.png";
let food= new Image();
food.src="img/food.png";
// box
let box=32;
//snake

let snake=[];
snake[0]={
    x:9*box,
    y:10*box
}



// food
let foodPos={
    x:Math.floor(Math.random()*17+1)*box,
    y:Math.floor(Math.random()*15+3)*box
   
}
//score

let score=0;
// direction
let d;
document.addEventListener("keydown",direction);
function direction(e){
    let key=e.keyCode;
    if(key==37){
        d="LEFT"
    }else if(key==38){
        d="UP"
    }else if(key==39){
        d="RIGHT"
    }else if(key==40){
        d="DOWN"
    }

}
// draw canvas

function draw(){
    ctx.drawImage(ground,0,0);
    ctx.drawImage(food,foodPos.x,foodPos.y);
   
    for(let i=0; i<snake.length; i++){
        ctx.fillStyle= (i==0) ?"green":"white";
        ctx.fillRect(snake[i].x,snake[i].y,box,box);
        ctx.strokeStyle="black";
        ctx.strokeRect(snake[i].x,snake[i].y,box,box)
    }
    ctx.fillStyle="white";
    ctx.font="45px Changa one";
    ctx.fillText(score,2*box,1.6*box);
   
    
    let snakeX= snake[0].x;
    let snakeY=snake[0].y;
    
    
    
    if(d=="LEFT"){
        snakeX-=box;
        
    }else if(d=="UP"){
        snakeY-=box;
        
    }else if(d=="RIGHT"){
        snakeX+=box;
    }else if(d=="DOWN"){
        snakeY+=box;
    }

    
    
    if(snakeX==foodPos.x && snakeY==foodPos.y){
        foodPos={
            x:Math.floor(Math.random()*17+1)*box,
            y:Math.floor(Math.random()*15+3)*box

        }
    }else{
        snake.pop();
    }
    let newHead={
        x:snakeX,
        y:snakeY
    }
    
    snake.unshift(newHead);

}
let game=setInterval(draw,100);