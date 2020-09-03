const search=document.getElementById("search");
let matchList= document.getElementById("match-list");




const searchStates=async searchText =>{
    const res= await fetch("./states.json");
    const states= await res.json();
    const reg= new RegExp(`^${searchText}`,"gi");
    let matches=states.filter((state)=>{
        return state.name.match(reg)|| state.abbr.match(reg);
    })
    if(searchText.length===0){
        matches=[];
    }
    output(matches);

}
const output= matches =>{
    if(matches.length>0){
        let out=matches.map((match)=>
            
            `
            <div class="card card-body mb-1">
                <h4>${match.name} (${match.abbr}) <span class="text-primary"> ${match.capital}</span></h4>
                <small>Lat:${match.lat} /Long: ${match.long}</small>
            </div>
            `
        
           
        )
        .join("");
        matchList.innerHTML=out;
        
    
        
        
    }
    
    

}
search.addEventListener("input",()=>searchStates(search.value))