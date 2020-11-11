let x = 40
let y = 40 
let z = 40
document.body.style.background = "rgb(" + x + "," + y + "," + z + ")"; 



function Changebody()
{
let text1  = document.getElementById('1').value;
let text2 = document.getElementById('2').value;
let text3 = document.getElementById('3').value;
let text4 = document.getElementById('4').value;

    document.body.style.background = "rgb(" + text1 + "," + text2 + "," + text3 + ")"; 
    document.getElementById("myDiv").style.border = "thick solid #0000FF";

}

function changeborder()
{
    let text5 = document.getElementById('5').value;
    let text6 = document.getElementById('6').value;
    let text7 = document.getElementById('7').value;
    let text8 = document.getElementById('8').value;

    document.getElementById("myDiv").style.border = "rgb(" + text5 + "," + text6 + "," + text7 + ")"; 

}