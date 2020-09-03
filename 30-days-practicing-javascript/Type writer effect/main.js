const TypeWriter= function(txtElement,words,wait=3000){
    this.txtElement=txtElement;
    this.words=words;
    this.wordIndex=0;
    this.txt="";
    this.wait=parseInt(wait,10);
    this.type();
    this.isDeleting=false;

} 

// type function

TypeWriter.prototype.type=function(){
    let typeSpeed=300;
    if(this.wordIndex>=this.words.length){
        this.wordIndex=0;
    }
    const current=this.wordIndex;
    
    const fullTxt= this.words[current];
    if(this.isDeleting){
    // delete char
        this.txt=fullTxt.substring(0,this.txt.length-1);
        
    }else{
        // add char
        this.txt=fullTxt.substring(0,this.txt.length+1);

    }

    if(this.txt===this.words[current] ){
        typeSpeed=this.wait;
        this.isDeleting=true;
    }else if(this.txt.length===0){
        this.wordIndex++;
        this.isDeleting=false;
        
    }
    this.txtElement.innerHTML=this.txt;
    setTimeout(()=>this.type(),typeSpeed)
}



document.addEventListener("DOMContentLoaded",init);
function init(){
    const txtElement= document.getElementById("text");
    const words=JSON.parse(txtElement.getAttribute("data-words"));
    const wait= txtElement.getAttribute("data-wait");
    new TypeWriter(txtElement, words, wait);
    
     
 }