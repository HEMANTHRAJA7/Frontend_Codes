var randomNumber1 = Math.floor((Math.random() * 6)) + 1;
var imgSource1 = "./images/dice"+randomNumber1+".png";
var image1 = document.querySelectorAll("img")[0];
image1.setAttribute("src",imgSource1);

var randomNumber2=Math.floor((Math.random() * 6)) + 1;
var imgSource2 = "./images/dice"+randomNumber2+".png";
var image2 = document.querySelectorAll("img")[1];
image2.setAttribute("src",imgSource2);

if(randomNumber1>randomNumber2){
    document.querySelector("h1").innerHTML="Player1 wins!";
}
else if(randomNumber1<randomNumber2){
    document.querySelector("h1").innerHTML="Player2 wins!";
}
else{
    document.querySelector("h1").innerHTML="Draw!! roll again";
}