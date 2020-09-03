document.querySelector("button").addEventListener("click",showcard);
let card=document.querySelector(".card");
document.querySelector(".del").addEventListener("click",deleteCard);
function showcard(){
    card.classList.add("show");
}
function deleteCard(){
    card.classList.remove("show");
}