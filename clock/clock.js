var min5=300000
var distance = min5
var Timer
var minutes
var seconds
function startTimer(){
    Timer = setInterval(
        function(){
    distance=distance-1000
    minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    seconds = Math.floor((distance % (1000 * 60)) / 1000);
    if(seconds<10)
    {
        seconds="0"+seconds;
    }
    document.getElementById("clock").innerHTML=`<h1>${minutes}:${seconds}</h1>`
    if (distance<0) {
        clearInterval(Timer)
        document.getElementById("clock").innerHTML=`<h1>0:00</h1>`
        gameOver()
    }
    
},1000)}
var currentStrikes=0

function strike(){
    document.getElementById("mainWindow").classList.add("shake-horizontal")
    setTimeout(function(){document.getElementById("mainWindow").classList.remove("shake-horizontal")},400);
    currentStrikes++
    if(currentStrikes>2)
    {
        gameOver();
    }
    else if(currentStrikes == 1)
    {
        document.getElementById("strike1").style.color = "red";
    }
    else
    {
        document.getElementById("strike2").style.color = "red";
    }
}

function gameOver(){
    clearInterval(Timer);
    document.getElementById("menuText").innerText="Game Over"
    document.getElementById("gameMenu").style.display="block"
    document.getElementById("pauseIcon").style.display="none"
    document.getElementById("playIcon").style.display="none"
}