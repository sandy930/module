const url="./health.pdf";


let pdfDoc=null,
   
    numPage=1;
 

const scale=1;
    

// render page
const renderPage= num=>{
    //show page at exactly num page
    pdfDoc.getPage(num)
        /*.catch((err)=>{
            console.log(err.type)
        })*/
        .then((page)=>{
            // set viewport of the canvas
            const cvs=document.getElementById("pdf-render");
            const ctx=cvs.getContext("2d");
            document.querySelector("#page-num").textContent=page.pageNumber;
            const viewport= page.getViewport({scale:1});
            cvs.height=viewport.height;
            cvs.width=viewport.width;
        

            // context of canvas
            const renderCtx={
                canvasContext:ctx,
                viewport:viewport
            }
            // show the page
            page.render(renderCtx);


    })
    
   

}
// load pdf file using promise and then you can use pdf file 
pdfjsLib.getDocument(url).promise.then((pdf)=>{
    // set pdfDoc=pdf file
    pdfDoc=pdf;
    renderPage(numPage);
    document.getElementById("page-count").textContent=pdf.numPages;
   

})
// show next page
const showNextPage= ()=>{
    if(numPage>=pdfDoc.numPages){
        return;
    }else{
        numPage++;
        renderPage(numPage);
    }
}
// show prev page
const showPrevPage= ()=>{
    if(numPage<=1){
        return;
    }else{
        numPage--;
        renderPage(numPage);
    }
}
// show page user inputed
const showPage=(event)=>{
// value of input
    if(event.target.value==""){
        return;
    }else{
// convert string to number
        let input=event.target.value;
        let num=parseInt(input);
        renderPage(num);

    }
    

     
    

}

document.getElementById("input-page").addEventListener("keyup", showPage);

document.getElementById("next-page").addEventListener("click",showNextPage);
document.getElementById("prev-page").addEventListener("click",showPrevPage);
