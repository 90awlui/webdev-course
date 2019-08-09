// Button Press
var i;


for (i = 0; i < document.querySelectorAll(".drum").length; i++) {
    document.querySelectorAll("button")[i].addEventListener("click", function() {
        makeSound(this.innerHTML)
        buttonAnimation(this.innerHTML)
    })
}

// Keyboard Press

document.addEventListener("keydown",function(event) {
    makeSound(event.key)
    buttonAnimation(event.key)
})

function makeSound(key) {
    var sound_dict = {
        "w": "sounds/beak1.mp3",
        "a": "sounds/tom-2.mp3",
        "s": "sounds/tom-3.mp3",
        "d": "sounds/tom-4.mp3",
        "j": "sounds/crash.mp3",
        "k": "sounds/kick-bass.mp3",
        "l": "sounds/snare.mp3"
    };

    if (Object.keys(sound_dict).includes(key)) {
        var sound = document.createElement('audio');
        sound.src = sound_dict[key]
        // var sound = new Audio(sound_dict[key]);
        sound.play();
    console.log(key)
    }
}

function buttonAnimation(key) {
    var activeButton = document.querySelector("." + key);
    activeButton.classList.add("pressed");
    setTimeout(function() {
        activeButton.classList.remove("pressed");
    }, 100);
}