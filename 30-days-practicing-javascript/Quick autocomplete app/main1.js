const matchList=document.getElementById("match-list");
const search= document.getElementById("search");

search.addEventListener("input",matching);
function matching(){
    fetch("./states.json")
    .then((res)=>
        res.json()
        
    )
    .then((data)=>{
        const reg= new RegExp(`^${search.value}`,"gi");
        
        let matches= data.filter((state)=>{
            return state.name.match(reg)|| state.abbr.match(reg);
        })
        if(search.value.length===0){
            return matches;

        }
        
        let output=matches.map((match)=>
        
            
            `
            <div class="card card-body mb-1">
                <h4>${match.name} (${match.abbr}) <span class="text-primary"> ${match.capital}</span></h4>
                <small>Lat:${match.lat} /Long: ${match.long}</small>
            </div>
            `
            
        ).join("");
        matchList.innerHTML=output
    }
         
    )

    
}  
