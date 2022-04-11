const $img=document.querySelector("img");
$img.setAttribute("src","https://www.kindpng.com/picc/m/437-4377615_dragon-ball-goku-ss3-hd-png-download.png");
$img.setAttribute("id","poster");
console.log($img);

const $h1=document.querySelector("h1");
$h1.setAttribute("style","background:pink;");
$h1.style.background="green";

//Métodos importantes para la manipulación del CSS
const $div2=document.querySelector(".contain");

$div2.classList.add("movie");
$div2.classList.replace("movie","pelicula");
console.log($div2.classList);
console.log($div2.classList.contains("movie"));