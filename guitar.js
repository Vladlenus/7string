

let s=['s/1.wav','s/2.wav','s/3.wav','s/4.wav','s/5.wav','s/6.wav',
's/7.wav','s/8.wav','s/9.wav','s/10.wav','s/11.wav','s/12.wav','s/13.wav',
's/14.wav','s/15.wav','s/16.wav','s/17.wav','s/18.wav','s/19.wav','s/20.wav','s/21.wav',
's/22.wav','s/23.wav','s/24.wav','s/25.wav']

// document.onkeyup= a2=>
// {}
let j=0
document.onkeypress = function (a1)
{
     
    function a2(){
        var audio1 = new Audio()
        audio1.src = s[j];
        audio1.currentTime = 0;
        audio1.play(); 
        // audio1.currentTime = 0;
       
                
}

console.log(j)
if (a1.key == 'z') {j=0; a2()}
if (a1.key == 'x') {j=1; a2()}

if (a1.key == 'c') {j=2; a2()}
if (a1.key == 'v') {j=3; a2()}
if (a1.key == 'b') {j=4; a2()}
if (a1.key == 'n') {j=5; a2()}//5
if (a1.key == 'm') {j=6; a2()}
if (a1.key == ',') {j=7; a2()}
if (a1.key == '.') {j=8; a2()}
if (a1.key == '/') {j=9; a2()}


if (a1.key == 'a') {j=5; a2()}
if (a1.key == 's') {j=6; a2()}
if (a1.key == 'd') {j=7; a2()}
if (a1.key == 'f') {j=8; a2()}
if (a1.key == 'g') {j=9; a2()}
if (a1.key == 'h') {j=10; a2()}//5
if (a1.key == 'j') {j=11; a2()}
if (a1.key == 'k') {j=12; a2()}
if (a1.key == 'l') {j=13; a2()}
if (a1.key == ';') {j=14; a2()}
if (a1.key == `'`) {j=15; a2()}

if (a1.key == 'q') {j=10; a2()}
if (a1.key == 'w') {j=11; a2()}
if (a1.key == 'e') {j=12; a2()}
if (a1.key == 'r') {j=13; a2()}
if (a1.key == 't') {j=14; a2()}
if (a1.key == 'y') {j=15; a2()}//5
if (a1.key == 'u') {j=16; a2()}
if (a1.key == 'i') {j=17; a2()}
if (a1.key == 'o') {j=18; a2()}
if (a1.key == 'p') {j=19; a2()}
if (a1.key == '[') {j=20; a2()}

localStorage.setItem('1', j);

} 


 



