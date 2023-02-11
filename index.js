// alert("Working properly");
var NumberOfDrums = document.querySelectorAll(".drum").length;
for(var i=0;i<NumberOfDrums;i++)
{
    document.querySelectorAll("button")[i].addEventListener("click",IGotClick);
}

function IGotClick()
{
    var inner = this.innerHTML;
    MakeSound(inner);
    buttonAnimation(inner);
}

document.addEventListener("keydown",function(Event){
    MakeSound(Event.key);
    buttonAnimation(Event.key);
});

function MakeSound(key){
    switch(key)
    {
        case "w":
        var tom1 = new Audio('sounds/tom-1.mp3');
        tom1.play();
        break;

        case "a":
        var tom2 = new Audio('sounds/tom-2.mp3');
        tom2.play();
        break;

        case "s":
        var tom3 = new Audio('sounds/tom-3.mp3');
        tom3.play();
        break;

        case "d":
        var tom4 = new Audio('sounds/tom-4.mp3');
        tom4.play();
        break;

        case "j":
        var snare = new Audio('sounds/snare.mp3');
        snare.play();
        break;

        case "k":
        var crash = new Audio('sounds/crash.mp3');
        crash.play();
        break;
        
        case "l":
        var kick = new Audio('sounds/kick-bass.mp3');
        kick.play();
        break;
    }
}

function buttonAnimation(CurrentKey)
{
    var activeKey = document.querySelector("."+CurrentKey);
    activeKey.classList.add("pressed");
    setTimeout(function (){
        activeKey.classList.remove("pressed");
    },1);
}