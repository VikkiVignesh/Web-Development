var btn=document.querySelectorAll("button");
var total=document.querySelectorAll(".drum").length;
for(var i=0;i<total;i++)
{
    btn[i].addEventListener("click",
    function () {
      var innerbtn=this.innerHTML;
      makesound(innerbtn);
      anim(innerbtn);
    });
}


document.addEventListener("keypress",function (event) {
    makesound(event.key);
    anim(event.key);
})

function chill(src) {
    var audio=new Audio(src);
    audio.play();
}


function makesound(key) 
{
    switch (key) {
        case 'w':
            chill("./sounds/tom-1.mp3");
            break;
        case 'q':
            chill("./sounds/tom-2.mp3");
            break;
        case 'e':
            chill("./sounds/tom-3.mp3");
            break;
        case 'r':
            chill("./sounds/tom-4.mp3");
            break;
        case 't':
            chill("./sounds/snare.mp3");
            break;
        case 'y':
            chill("./sounds/crash.mp3");
            break;
        case 'u':
            chill("./sounds/kick-bass.mp3");
            break;
        case '0':
            alert("Game Over");
            end();
            alert("Thanks for Using.. ")
            break;

        default:
            break;
    }
}


function end() {
    document.body.classList.add("game-over");
}
function anim(parm) {
    var ele=document.querySelector("."+parm);
   ele.classList.add("press");
   setTimeout(function () {
    ele.classList.remove("press");
   },120)
}
