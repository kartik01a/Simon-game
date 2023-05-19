var randomButtonSequence = [];
var randomUserSequence = [];
var colorGenerated;
var buttonColor = ["green","red","yellow","blue"];
var started = false;
var level =0;
$(document).keydown(function(event){
    if(!started){
        $("#level-title").html("Level "+level);
        gameStart();
        started =true;
    }
});
$(".btn").click(function(){
    var clicked  = this.id;
    randomUserSequence.push(clicked);
    change(clicked);
    playSound(clicked);
    check(randomUserSequence.length - 1);

});
function check(currentLevel){
    if(randomButtonSequence[currentLevel]===randomUserSequence[currentLevel]){
        if(randomButtonSequence.length===randomUserSequence.length){
            setTimeout(function () {
                gameStart();
            }, 1000);
        }
    }
    else{
        $("body").addClass("game-over");
        $("#level-title").html("Gameover, Score "+randomButtonSequence.length+" Press any key to continue");
        playSound("wrong");
        setTimeout(function () {
            $("body").removeClass("game-over");
        }, 200);
        playAgain();
    }
}
function gameStart(){

    randomUserSequence = [];
    level++;
    $("#level-title").html("Level "+level);
    var randomNumber = Math.floor(Math.random()*4);
    colorGenerated = buttonColor[randomNumber];
    randomButtonSequence.push(colorGenerated);
    playSound(colorGenerated);
    change(colorGenerated);

}

function playSound(name){
    var audio = new Audio("sounds/"+name+".mp3");
    audio.play();
}
function change(colorGenerated){
    $("#"+colorGenerated).addClass("pressed");
    setTimeout(function () {
        $("#"+colorGenerated).removeClass("pressed");
      }, 100);
}
function playAgain(){
    started = false;
    level = 0;
    randomButtonSequence =[];
}