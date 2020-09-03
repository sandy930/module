const url="./pdf.pdf";

// store the state of our pdf viewer
let pdfDoc=null,
    pageIsRendering=false,
    pageNum=1,
    pageNumIsPending=null;

// set scale of canvas
const scale=1.5,
     cvs=document.querySelector("#pdf-render"),
    ctx=cvs.getContext("2d");

//render page

const renderPage= num =>{
    pageIsRendering=true;


    // get Page
    pdfDoc.getPage(num).then(page=>{
        // set viewport
        const viewport= page.getViewport({scale});
        cvs.height=viewport.height;
        cvs.width=viewport.width;

        const renderCtx={
            canvasContext:ctx,
            viewport
        }
        page.render(renderCtx).promise.then(()=>{
            pageIsRendering=false;

            if(pageNumIsPending!=null){
                renderPage(pageNumIsPending);
                pageNumIsPending=null;
            }
        });

        document.querySelector("#page-num").textContent=num;
    });
    


}
// check for page rendering

const queueRenderPage= num=>{
    if(pageIsRendering){
        pagenumIsPending=num;
    }else{
        renderPage(num);
    }
}
// show prev page

const showPrevpage= ()=>{
    if(pageNum<=1){
        return;
    }pageNum--;
    queueRenderPage(pageNum);

}

// show next page
const showNextpage= ()=>{
    if(pageNum>=pdfDoc.numPages){
        return;
    }pageNum++;
    queueRenderPage(pageNum);

}
// load our pdf file

pdfjsLib.getDocument(url).promise.then((pdfDoc_)=>{
    pdfDoc=pdfDoc_;
    document.querySelector("#page-count").textContent=pdfDoc.numPages;
    renderPage(pageNum)


})


document.querySelector("#prev-page").addEventListener("click",showPrevpage);
document.querySelector("#next-page").addEventListener("click",showNextpage);

