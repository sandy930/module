var hexColor=document.getElementById("random-color");
hexColor.addEventListener("click", chooseRandomColor);

var txtValue=document.getElementById("value-color")
txtValue.addEventListener("keyup", changeValueColor);

var bgColor=document.querySelector(".bg-color");
var bgBtn=document.getElementById("change-color");

var hex=["0","1","2","3","4","5","6","7","8","9","A","B","C","D","E","F"]
var randomColor="#";

/* choose random color*/
function chooseRandomColor(){
    randomColor="#";
    hexColor.style.backgroundColor="lightseagreen";
    hexColor.style.color="#fff";
    for(var i=0; i<6; i++){
        randomColor+=randomValue(hex);
    }  
    bgColor.style.backgroundColor=randomColor;
    bgBtn.value=randomColor;
}
/* choose random value to create hex code*/
function randomValue(arr){
    var indexColor=Math.floor(Math.random()*hex.length);
    
    return arr[indexColor]
    
}


function changeValueColor(){
    var inputValue=txtValue.value;
    
        bgColor.style.backgroundColor=inputValue;
        bgBtn.value=inputValue;
    
    

    

}