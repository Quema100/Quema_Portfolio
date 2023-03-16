//스크롤 이벤트
let calcScrollValue = () =>{
    let scrollprogress = document.getElementById("progress");
    let progresValue = document.getElementById("progress-value");
    let pos = document.documentElement.scrollTop;
    let calcHeight =
    document.documentElement.scrollHeight -
    document.documentElement.clientHeight;
    console.log(calcHeight)
    let scrollValue = Math.round((pos * 100)/calcHeight);
    if(pos > 70){
        scrollprogress.style.display = "grid";
    }else{
        scrollprogress.style.display = "none";
    }
    scrollprogress.addEventListener("click", () => {
        document.documentElement.scrollTop = 0;
     
    });
    scrollprogress.style.background = `conic-gradient(rgb(224, 224, 224) ${scrollValue}%, transparent ${scrollValue}%)`;
    //인사말 이벤트
    let mainText = document.querySelector('#hi')
    window.addEventListener('scroll',function(){
        let value = window.scrollY
        console.log('scrolly',value);
        if(value > 330){
            mainText.style.animation='disappear 1.5s ease-out forwards';
        }else{
            mainText.style.animation='hi 1.5s ease-out forwards';
        }
    })
    let mainText2 = document.querySelector('#welcome')
    window.addEventListener('scroll',function(){
        let value2 = window.scrollY
        console.log('scrolly',value2);
        if(value2 > 335){
            mainText2.style.animation='blink .5s infinite, typing2 2s steps(20) forwards';
        }else{
            mainText2.style.animation='blink .5s infinite, typing 2s steps(20) forwards';
        }
    })
    //소개글 이벤트
    let hi = document.querySelector('#d0')
    window.addEventListener('scroll',function(){
        let value3 = window.scrollY
        console.log('scrolly',value3);
        if(value3 > 1515 || value3 < 85){
            hi.style.animation='top2 2s forwards';
        }else if(value3 > 85){
            hi.style.animation='top 2s forwards';
        }
    })
    let hi2 = document.querySelector('#d1')
    window.addEventListener('scroll',function(){
        let value4 = window.scrollY
        console.log('scrolly',value4);
        if(value4 > 1515 || value4 < 85 ){
            hi2.style.animation='top2 2s forwards';
        }else if(value4 > 85){
            hi2.style.animation='top 2s forwards';
        }
    })
    let hi3 = document.querySelector('#d2')
    window.addEventListener('scroll',function(){
        let value5 = window.scrollY
        console.log('scrolly',value5);
        if(value5 > 1515 || value5 < 85){
            hi3.style.animation='top2 2s forwards';
        }else if(value5 > 85){
            hi3.style.animation='top 2s forwards';
        }
    })
    let hi4 = document.querySelector('#d3')
    window.addEventListener('scroll',function(){
        let value6 = window.scrollY
        console.log('scrolly',value6);
        if(value6 > 1515 || value6 < 85){
            hi4.style.animation='top2 2s forwards';
        }else if(value6 > 85){
            hi4.style.animation='top 2s forwards';
        }
    })
    let hi5 = document.querySelector('#d4')
    window.addEventListener('scroll',function(){
        let value7 = window.scrollY
        console.log('scrolly',value7);
        if(value7 > 1515 || value7 < 85 ){
            hi5.style.animation='top2 2s forwards';
        }else if (value7 > 85 ){
            hi5.style.animation='top 2s forwards';
        }
    })
   //기술 애니메이션
   let sk = document.querySelector('#sk')
   window.addEventListener('scroll',function(){
       let value14 = window.scrollY
       if(value14 > 2095 || value14 < 1515 ){
           sk.style.animation='skback 2s forwards';
       }else if (value14 > 1515 ){
           sk.style.animation='sk 2s forwards';
       }
   })

    let skill = document.querySelector('#center')
    window.addEventListener('scroll',function(){
        let value8 = window.scrollY
        console.log('scrolly',value8);
        if(value8 > 2095 || value8 < 1515 ){
            skill.style.animation='hidden2 .8s forwards';
        }else if (value8 > 1515 ){
            skill.style.animation='hidden1 .8s forwards';
        }
    })
    //기술 이미지
    let js = document.querySelector('#js')
    window.addEventListener('scroll',function(){
        let value9 = window.scrollY
        if(value9 > 2095 || value9 < 1515 ){
            js.style.animation='hidden3-1 .5s forwards';
        }else if (value9 > 1515 ){
            setTimeout(() => {
                js.style.animation='hidden3 .5s forwards';
            }, 1000); 
        }
    })
    let py = document.querySelector('#py')
    window.addEventListener('scroll',function(){
        let value10 = window.scrollY
        if(value10 > 2095 || value10 < 1515 ){
            py.style.animation='fuckingbug .5s forwards';
        }else if (value10 > 1515 ){
            setTimeout(() => {
                py.style.animation='fuckingbug1 .5s forwards';
            }, 1250); 
        }
    })
    let node = document.querySelector('#node')
    window.addEventListener('scroll',function(){
        let value11 = window.scrollY
        if(value11 > 2095 || value11 < 1515 ){
            node.style.animation='hidden5-1 .5s forwards';
        }else if (value11 > 1515 ){
            setTimeout(() => {
                node.style.animation='hidden5 .5s forwards';
            }, 1500); 
        }
    })
    let css = document.querySelector('#css')
    window.addEventListener('scroll',function(){
        let value12 = window.scrollY
        if(value12 > 2095 || value12 < 1515 ){
            css.style.animation='hidden6-1 .5s forwards';
        }else if (value12 > 872 ){
            setTimeout(() => {
                css.style.animation='hidden6 .5s forwards';
            }, 1750); 
        }
    })
    let html = document.querySelector('#html')
    window.addEventListener('scroll',function(){
        let value13 = window.scrollY
        if(value13 > 2095 || value13 < 1515 ){
            html.style.animation='hidden7-1 .5s forwards';
        }else if (value13 > 1515 ){
            setTimeout(() => {
                html.style.animation='hidden7 .5s forwards';
            }, 2000); 
        }
    })
    //기술 마지막부분
    let skfoot = document.querySelector('#foot')
    window.addEventListener('scroll',function(){
        let value15 = window.scrollY
        if(value15 > 2095 || value15 < 1515 ){
            skfoot.style.animation='skfootback 1s forwards';
        }else if (value15 > 1515 ){
            setTimeout(() => {
                skfoot.style.animation='skfoot 1s forwards';
            }, 1500);
        }
    }) 
    //연결 부분  
    let show = document.querySelector('#show1')
    window.addEventListener('scroll',function(){
        let i0 = window.scrollY
        if( i0 < 2133 ){
            show.style.animation='bye1-1 2s forwards';
        }else if (i0 > 2133 ){
            show.style.animation='bye1 2s forwards';
        }
    }) 
    let c = document.querySelector('#c')
    window.addEventListener('scroll',function(){
        let i = window.scrollY
        if( i < 2133 ){
            c.style.animation='no2 2s forwards';
        }else if (i > 2133 ){
            c.style.animation='no 2s forwards';
        }
    }) 
    let c1 = document.querySelector('#Y')
    window.addEventListener('scroll',function(){
        let i2 = window.scrollY
        if( i2 < 2133 ){
            c1.style.animation='bye1-1 2s forwards';
        }else if (i2 > 2133 ){
            setTimeout(() => {
                c1.style.animation='bye1 2s forwards';
            }, 1000);
        }
    }) 
    let c2 = document.querySelector('#G')
    window.addEventListener('scroll',function(){
        let i3 = window.scrollY
        if( i3 < 2133 ){
            c2.style.animation='bye2-1 2s forwards';
        }else if (i3 > 2133 ){
            setTimeout(() => {
                c2.style.animation='bye2 2s forwards';
            }, 1500);
        }
    }) 
    let c3 = document.querySelector('#D')
    window.addEventListener('scroll',function(){
        let i4 = window.scrollY
        if(i4 < 2133 ){
            c3.style.animation='bye3-1 2s forwards';
        }else if (i4 > 2133 ){
            setTimeout(() => {
                c3.style.animation='bye3 2s forwards';
            }, 2000);
        }
    }) 
};
window.onscroll = calcScrollValue;
window.onload = calcScrollValue;

let mouse = ()=>{
    let Y = document.querySelector('#Y')
    Y.addEventListener('mouseover',function(){
        let s=document.querySelector('#s')
        s.style.animation='s 1s forwards';
        s.innerHTML = "퀘마 Quema"
    });
    Y.addEventListener('mouseout',function(){
        let s=document.querySelector('#s')
        s.style.animation='s1 1s forwards';
    });
    let G= document.querySelector('#G')
    G.addEventListener('mouseover',function(){
        let h=document.querySelector('#s')
        h.style.animation='s 1s forwards';
        h.innerHTML = "Quema100"
    }); 
    G.addEventListener('mouseout',function(){
        let h=document.querySelector('#s')
        h.style.animation='s1 1s forwards';
    }); 
    let D = document.querySelector('#D')
    D.addEventListener('mouseover',function(){
        let o=document.querySelector('#s')
        o.style.animation='s 1s forwards';
        o.innerHTML = "\(This is my personal server link.\)"
    }); 
    D.addEventListener('mouseout',function(){
        let o=document.querySelector('#s')
        o.style.animation='s1 1s forwards';
    }); 
}
onmouseout=mouse;
onmouseover=mouse;




