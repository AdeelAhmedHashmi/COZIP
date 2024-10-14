const fontSize = document.querySelector('.menu input');
const font = document.querySelector('.menu select');

font.addEventListener('change',()=>{
    try{
        htmlcode.style.fontFamily = font.value
        csscode.style.fontFamily = font.value
        jscode.style.fontFamily = font.value
    }catch{
        htmlcode.style.fontFamily = 'consolas';
        csscode.style.fontFamily = 'consolas';
        jscode.style.fontFamily = 'consolas';
    }
})
fontSize.addEventListener('change',(e)=>{
    try{
        htmlcode.style.fontSize = fontSize.value + 'px'
        csscode.style.fontSize = fontSize.value + 'px'
        jscode.style.fontSize = fontSize.value + 'px'
    }catch{
        htmlcode.style.fontSize = '0.9rem';
        csscode.style.fontSize = '0.9rem';
        jscode.style.fontSize = '0.9rem';
    }
});

