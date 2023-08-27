let buttonColours =["red", "blue", "green", "yellow"]; 
let gamePattern=[];
let userClickedPattern=[];

var started=false;
var level=0;

$(document).keypress(function () {
    if(!started)
    {    $("#level-title").html("Level "+ level);
         nextSequence();
        started=true;
    }
 }
);


$(".btn").click(function () {
    var btnclr=$(this).attr("id");
    userClickedPattern.push(btnclr);
    playsound(btnclr);
    animatePress(btnclr);
    checkanswer(userClickedPattern.length-1);
});


function checkanswer(lev) {
    if(gamePattern[lev]=== userClickedPattern[lev])
    {
        if(userClickedPattern.length === gamePattern.length)
        {
            setTimeout(() => {
            nextSequence();
            },1000);
        }
    }
    else
    {   playsound("wrong");
        $("body").addClass("game-over");
        $("#level-title").text("Game Over, Press Any Key to Restart");
    
        setTimeout(()=>{
          $("body").removeClass("game-over")
        } ,200);

      startover();
    }
    
}



function nextSequence() 
{   userClickedPattern=[];
    level++;
    $("#level-title").text("Level "+  level)
    var randomNumber=Math.floor(Math.random()*4);
    let randomChosenColour=buttonColours[randomNumber];
    gamePattern.push(randomChosenColour);
    
    // Selecting id's and adding animation;
    $("#"+randomChosenColour).fadeIn(100).fadeOut(100).fadeIn(100);

    //Adding Audio to the boxes
    playsound(randomChosenColour);
}


function playsound(file)
{
    var audio=new Audio("sounds/"+file+".mp3");
    audio.play();
}


function startover() {
    userClickedPattern=[];
    started=false;
    level=0;
}


function animatePress(currentclr) {
    $("#"+currentclr).addClass("pressed");
    setTimeout(function ()  {
    $("#"+currentclr).removeClass("pressed");
    }, 100);
}









