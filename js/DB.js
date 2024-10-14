
inputs.forEach((code)=>{
    code.addEventListener('keydown',()=>{
        console.log('store');
        storeCode();
    })
})

function storeCode() {
    let html =  htmlcode.value;
    let css = csscode.value;
    let js = jscode.value;

    localStorage.setItem('html',html);
    localStorage.setItem('css',css);
    localStorage.setItem('js',js);
}