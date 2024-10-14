const htmlSec = document.querySelector('#HTML')
const cssSec = document.querySelector('#CSS')
const jsSec = document.querySelector('#JS')
const output = document.querySelector("iframe");
const run = document.querySelector('#runBtn');
const logo = document.querySelector('.logo');
const reset = document.querySelector('.reset');

const htmlcode = document.querySelector('textarea[name="htmlcode"]');
const csscode = document.querySelector('textarea[name="csscode"]');
const jscode = document.querySelector('textarea[name="jscode"]');

const popup = document.querySelector('.popup');
const menu = document.querySelector('.menu');

setTimeout(()=>{
    popup.style.display = 'none';
},3000)

const boilerhtml = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Document</title>
</head>
<body>
</body>
</html> 
`;
const boilercss = `*{
    margin:0;
    padding:0;
    box-sizing:border-box;
}
`;
const boilerjs = `// Type some JScode here`;

// showCode
function showCode() {
    let html =  localStorage.getItem('html') || boilerhtml;
    let css = localStorage.getItem('css') || boilercss;
    let js = localStorage.getItem('js') || boilerjs;
    
    htmlcode.value = html;
    csscode.value = css;
    jscode.value = js;

    output.contentDocument.body.innerHTML = html;
    output.contentDocument.head.innerHTML = `<style> ${css} </style>`;
    output.contentWindow.eval(js);
}
showCode()

let indexNo = 1;
const files = document.querySelector('header ul');
files.addEventListener('click',(e)=>{
    if(e.target.id === 'htmlfile'){
        htmlSec.style.zIndex = indexNo;
    }else if(e.target.id === 'cssfile'){
        cssSec.style.zIndex = indexNo;
    }else{
        jsSec.style.zIndex = indexNo;
    }
    indexNo ++
})

run.addEventListener('click',()=>{
    output.style.zIndex = indexNo++;
    htmlopen.style.borderBottom = 'none';
    cssopen.style.borderBottom = 'none';
    jsopen.style.borderBottom = 'none';
})

const htmlopen = document.querySelector('#htmlfile');
const cssopen = document.querySelector('#cssfile');
const jsopen = document.querySelector('#jsfile');

htmlopen.addEventListener('click',()=>{
    htmlopen.style.borderBottom = '1px solid white';
    cssopen.style.borderBottom = 'none';
    jsopen.style.borderBottom = 'none';
})
cssopen.addEventListener('click',()=>{
    cssopen.style.borderBottom = '1px solid white';
    htmlopen.style.borderBottom = 'none';
    jsopen.style.borderBottom = 'none';
})
jsopen.addEventListener('click',()=>{
    jsopen.style.borderBottom = '1px solid white';
    cssopen.style.borderBottom = 'none';
    htmlopen.style.borderBottom = 'none';
})



reset.addEventListener('click',()=>{
    let permission = confirm('Are you sure! You want to reset the code?')
    if (permission){
        localStorage.removeItem('html');
        localStorage.removeItem('css');
        localStorage.removeItem('js');
        showCode();
    }
    menu.classList.add('hide');

})

let isopen = false;
logo.addEventListener('click',()=>{
    if(!isopen){
        menu.classList.remove('hide');
        isopen = true;
    }else{
        menu.classList.add('hide');
        isopen = false;
    }
})



































































