//Get specific time of the day
var time=document.getElementById("day");
var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];


// add todo 
var addItem=document.getElementById("add").addEventListener("click",addTodo);
// get value of user inputed
var todo=document.getElementById("to-do");
// place for adding new element
var list=document.querySelector(".container");
// show time of the day after loaded the page
document.addEventListener("DOMContentLoaded",function(){
     var day=new Date();
     time.textContent=day.getFullYear()+" "+months[day.getMonth()]+" "+day.getDate()+" "+days[day.getDay()];
     

    })
// after clicking plus sign then add to-do work
function addTodo(){
// if enter nothing show alert
    if(todo.value===""){
        alert("Enter a to-do")
    }else {
// create new div 
        var newEl= document.createElement("div")   ;
// add class "todo"
        newEl.classList.add("todo");
// create input tag
        var inputChild= document.createElement("input");
// set type of this input
        inputChild.type="checkbox";
// add input to div
        newEl.appendChild(inputChild);
// create p tag for this div
        var newContent=document.createElement("p");
//content of this <p> is value of user entered
        newContent.textContent=todo.value; 

// div add <p>
        newEl.appendChild(newContent);
// create delete icon
        var delIcon=document.createElement("i");
// add class for this icon
        delIcon.classList.add("fas");
        delIcon.classList.add("fa-trash")
// add delete icon to div
        newEl.appendChild(delIcon);
// add this div to list( parent div )
        list.appendChild(newEl);
// all the div have class ".todo"
        var todoWork=document.querySelectorAll(".todo");
// loop through all class ".todo"
        for(var i=0;i<todoWork.length; i++){
/* user added to-do element then they want to delete it after completed */
// set event to the child of div have a class ".todo" when user click for checking "work done" then show that work is done
            todoWork[i].children[0].addEventListener("click",addClass);
        }
// loop through delete icon
        for(var i=0;i<todoWork.length; i++){
            todoWork[i].children[2].addEventListener("click",delwork);
        }
       

    }
    
}
// show that work is done 

function addClass(){
    var nextel=this.nextElementSibling;
    nextel.classList.add("line");
}
// when click delete icon will remove this todo element
function delwork(){
    var par= this.parentNode;
    par.remove();
    
}