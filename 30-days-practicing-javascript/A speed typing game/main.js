window.addEventListener("load",init);

//avala
const levels={
    easy:5,
    medium:3,
    hard:2
}

// change level

const currentLevel=levels.easy;
let score=0;
let time=currentLevel;
let isPlaying;

const wordInput = document.querySelector('#word-input');
wordInput.addEventListener("keyup",matching);
const currentWord = document.querySelector('#current-word');
const scoreDisplay = document.querySelector('#score');
const timeDisplay = document.querySelector('#time');
const message = document.querySelector('#message');
const seconds = document.querySelector('#seconds');

const words = [
  'hat',
  'river',
  'lucky',
  'statue',
  'generate',
  'stubborn',
  'cocktail',
  'runaway',
  'joke',
  'developer',
  'establishment',
  'hero',
  'javascript',
  'nutrition',
  'revolver',
  'echo',
  'siblings',
  'investigate',
  'horrendous',
  'symptom',
  'laughter',
  'magic',
  'master',
  'space',
  'definition'
];


/*Initialize function{
   Show random word
   Matching on word input
   Call countdown every second (1000 miliseconds)
   Check game status

}


*/

function init(){
    showWord(words);
    matching();
    setInterval(countdown,1000);
    setInterval(checkStatus,50);
}

function showWord(words){
    const randomInd=Math.floor(Math.random()*words.length);
    currentWord.innerHTML=words[randomInd];
}

time=6;
function countdown(){
    
    if(time>0){
        time--;
    }else{
        time=0
    }

    timeDisplay.innerHTML=time;
}

function checkStatus(){
    if(time==0 && !isPlaying){
        score=0;
        scoreDisplay.innerHTML=score;
        message.innerHTML="Game over!!"
    }


}
function matching(){
    if(wordInput.value===currentWord.innerHTML){
        score++;
        message.innerHTML="Correct";

        scoreDisplay.innerHTML=score;
        showWord(words);
        wordInput.value="";
        time=6;
        
        
    }else{
        message.innerHTML="";
        isPlaying=false;

    }
     
    
}