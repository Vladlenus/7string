
let ss=['s/1.wav','s/2.wav','s/3.wav','s/4.wav','s/5.wav','s/6.wav',
's/7.wav','s/8.wav','s/9.wav','s/10.wav','s/11.wav','s/12.wav','s/13.wav','s/14 .wav']
// let ff=[f0,f1,f2,f3,f4,f5,f6,f7,f8,f9,f10,f11,f12,f13,f14,f15,f16,f17]

// function a2(){
//     var audio1 = new Audio()
//     audio1.src = s[j];
//     audio1.play(); 
 
           
// }


let keys =document.querySelectorAll('.key')

keys.forEach(key =>{
    key.addEventListener('touchstart', a2, !0)
})

function  a2(e){
    
    let key = e.target;
    console.log('ss')
    let note= document.getElementById(key.dataset.note);
    note.currentTime = 0;
    note.play();
           
}




