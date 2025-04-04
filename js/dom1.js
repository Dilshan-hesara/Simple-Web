document.getElementsByTagName("h1")
var h1_element = document.getElementsByTagName("h1");
console.log(h1_element[0]);
console.log(h1_element[0].innerText);
h1_element[1].innerText ="wrgfhateyqrIFFFTURLTRg"

h1_element[1].innerHTML="<h1>Areeeeee</h1> " //element ekename change krnn puvn

document.getElementById("eng") // id select krnn pluvan

document.getElementsByClassName("lan") //class select
document.getElementsByClassName("lan")[1] //class ekke onaeke select krnn pluvn


var myname = document.getElementsByName("e");
console.log(myname[0]);
console.log(myname[0].innerText);
console.log(myname[0].innerHTML);
myname[0].innerText ="Type Srpit";


document.querySelector("h6 > p"); // qery slector
document.querySelectorAll("h6 > p"); // qery slector all
document.querySelector("h6 > p").innerText;

