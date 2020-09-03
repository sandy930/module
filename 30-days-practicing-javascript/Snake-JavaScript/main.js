let cvs=document.getElementById("snake");
let ctx=cvs.getContext("2d");

//unit of box
let box=32;
// load image
let groundImg=new Image();
groundImg.src="img/ground.png";
let foodImg= new Image();
foodImg.src="img/food.png";
// random position of food

let foodPos={
    x:Math.floor(Math.random()*17+1)*box,
    y:Math.floor(Math.random()*15+3)*box
}

// snake
let snake=[];
snake[0]={
    x:9*box,
    y:10*box
}


// snake position
document.addEventListener("keydown",direction);
let d;
function direction(event){
    let key = event.keyCode;
    
    if( key == 37 && d!="RIGHT"){
        
        d="LEFT";
        left.play();
    }else if(key == 38 && d != "DOWN"){
      
       d="UP";
        up.play();
    }else if(key == 39 && d != "LEFT"){
        
        d="RIGHT";
        right.play()
    }else if(key == 40 && d != "UP"){
        
        d="DOWN";
        down.play();
    }
    
}
// load audio

let left=new Audio();
let right=new Audio();
let up=new Audio();
let down=new Audio();
let eat=new Audio();
let dead=new Audio();

left.src="audio/left.mp3";
right.src="audio/right.mp3";
up.src="audio/up.mp3";
down.src="audio/down.mp3";
eat.src="audio/eat.mp3";
dead.src="audio/dead.mp3";
//score
let score=0;

function collision(newHead,array){
    for(let i=0; i<array.length; i++){
        if(newHead.x==array[i].x && newHead.y==array[i].y){
            return true;
        }
    }
    return false;
}
// draw function

function draw(){
    // show ground img
    ctx.drawImage(groundImg,0,0);
    // food img
    ctx.drawImage(foodImg,foodPos.x,foodPos.y);
    //draw snake
    
    for(let i=0; i< snake.length; i++){
        ctx.fillStyle= (i==0) ? "green":"white";
        ctx.fillRect(snake[i].x,snake[i].y,box,box);
        ctx.strokeStyle="black";
        ctx.strokeRect(snake[i].x,snake[i].y,box,box)
    }
    ctx.fillStyle="white";
    ctx.font="45px Changa one";
    ctx.fillText(score,2*box,1.6*box);
    
// old head
let snakeX=snake[0].x;
let snakeY=snake[0].y;

     
    // which direction
   if(d=="LEFT"){
       snakeX-=box;
   }else if(d=="RIGHT"){
       snakeX+=box;
   }else if(d=="UP"){
       snakeY-=box;
   }else if(d=="DOWN"){
      snakeY+=box;

   }


   if(snakeX==foodPos.x && snakeY==foodPos.y){
       score++;
       eat.play();
       foodPos={
            x :Math.floor(Math.random()*17+1)*box,
            y :Math.floor(Math.random()*15+3)*box
       }
    

   }else{
       snake.pop();
   }
   
   //add new head
   let newHead={
    x:snakeX,
    y:snakeY
}

    if(snakeX<box || snakeX>17*box || snakeY<3*box || snakeY>17*box || collision(newHead,snake)){
        clearInterval(game);
        dead.play();
    }
    
    snake.unshift(newHead);

        
    
    

}


let game=setInterval(draw,100);
