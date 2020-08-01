var items= document.querySelectorAll(".choosen").forEach((item)=>{
    item.addEventListener("click",showQuantity);
});
var del=document.querySelector(".delete");
del.addEventListener("click",hideProduct);
var quantity=document.getElementById("quantity");
var itemChoosen=0;
var checkProduct=document.getElementById("cart");
checkProduct.addEventListener("click",showProduct);
var a=1;
var priceProduct=document.querySelector(".show-total");
function showQuantity(e){
    
    quantity.classList.add("show");
    // check
    var nameItem=e.target.previousElementSibling.textContent;
    var child=priceProduct.children;
    var content=child[child.length-1].children;
    if(content[0].textContent!==nameItem){
        itemChoosen++;
        quantity.textContent=itemChoosen;
        var newElement=document.createElement("div");
        newElement.classList.add("flex-item");
        var h1=document.createElement("h1");
        var price=document.createElement("input");
        price.type="number";
        price.value="1";
        
        h1.textContent=nameItem;
        newElement.appendChild(h1);
        newElement.appendChild(price);
        priceProduct.appendChild(newElement);
    }

    
}


function showProduct(e){
    priceProduct.classList.add("show");
    

}
function hideProduct(){
    priceProduct.classList.remove("show");
}