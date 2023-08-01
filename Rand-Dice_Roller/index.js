var randnum1=Math.floor(Math.random()*6)+1;

var src1="./images/dice"+randnum1+".png"

var img1=document.querySelectorAll("img")[0];
img1.setAttribute("src",src1);


var randnum2=Math.floor(Math.random()*6)+1;
var src2="./images/dice"+randnum2+".png"

var img2=document.querySelectorAll("img")[1];
img2.setAttribute("src",src2);

var H1=document.querySelector("h1");
if(randnum1>randnum2)
{
    H1.innerHTML="Player 1 Won 🚩";
}
else if(randnum1=== randnum2)
{
    H1.innerHTML="Draw Match!";
}
else
{
    H1.innerHTML="Player 2 Won 🚩";
}