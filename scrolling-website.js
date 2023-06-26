let star=document.getElementById('img1');
let moon=document.getElementById('img2');
let mountains3=document.getElementById('img3');
let mountains4=document.getElementById('img4');
let river=document.getElementById('img5');
let boat=document.getElementById('img6');
window.onscroll=()=>{
    let value=scrollY;
    star.style.left=value + 'px';
    moon.style.top=value*4 + 'px';
    mountains3.style.top=value*1.5 + 'px';
    mountains4.style.top=value + 'px';
    river.style.top=value*0.8 + 'px';
    boat.style.top=value*0.8 + 'px';
    boat.style.left=value*3+ 'px';
    if(scrollY>100){
        document.querySelector('.main').style.background= 'linear-gradient(rgb(111, 44, 173),rgb(92, 200, 250))';
    }else
    {
        document.querySelector('.main').style.background= 'linear-gradient(rgb(68, 7, 68),rgb(182, 79, 182))';
    }
}