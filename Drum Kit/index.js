var totalbtns=document.querySelectorAll(".drum").length;
var btn=document.querySelectorAll("button");
for(let i=0;i<totalbtns;i++)   
{
    btn[i].addEventListener("click",function () 
    {
        var innerbtn=this.innerHTML;
        makesound(innerbtn);
        clicked(innerbtn);
    });
}

function callaudio(src)  //auido calling function
{
    var audio=new Audio(src);
    audio.play();
}


document.addEventListener("keypress", function (event) 
{
   makesound(event.key);
   clicked(event.key);
});


//Slecting keys and corresponding audi file
function makesound(key) 
{
    switch (key) {
        case 'w':
            callaudio("sounds/tom-1.mp3");
            break;
        case 'a':
            callaudio("sounds/tom-2.mp3");
            break;
        case 's':
            callaudio("sounds/tom-3.mp3");
            break;
        case 'd':
            callaudio("sounds/tom-4.mp3");
            break;
        case 'j':
            callaudio("sounds/snare.mp3");
            break;
        case 'k':
            callaudio("sounds/crash.mp3");
            break;
        case 'l':
            callaudio("sounds/kick-bass.mp3");
            break;
        default:
            break;
    }
}


//Adding Animation to buttons
function clicked(currentkey)
{
  var ele=document.querySelector("."+currentkey);
  ele.classList.add("pressed");


  setTimeout(() => {
    ele.classList.remove("pressed");
  }, 120);
}