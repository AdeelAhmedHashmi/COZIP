const logoname = document.querySelector('.COZIP');
const author = document.querySelector('.author');

setTimeout(()=>{
    logoname.style.opacity = '1';
},7000);

setTimeout(()=>{
    author.style.height = '20px';
},8500);

setTimeout(()=>{
    try{
        window.open('./code.html',parent);
        setTimeout(()=>{
            startBtn = document.querySelector('.startBtn');
            startBtn.style.opacity = '1';
        },500)
    }catch(e){
        alert('your device are blocked some javascript')
        setTimeout(()=>{
            startBtn = document.querySelector('.startBtn');
            startBtn.style.opacity = '1';
        },500)
    }
},11000)
