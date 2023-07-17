let text =document.getElementById('text');
let button = document.getElementById('button');

button.addEventListener("click", function(){
   if (text.style.color === 'white') {
    text.style.color = "";
   } else {
    text.style.color = "white";
   }
});
let but = document.getElementById("heading");
let text2 = document.getElementById("p");

but.addEventListener("click", function(){
    for(var y=0; y < text2.leght; y++){
        text2[y].classList.toggle("text-decoration");
    }
});