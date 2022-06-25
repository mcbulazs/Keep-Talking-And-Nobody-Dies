function openMenu(){
    document.getElementById("gameMenu").style.display="block"
    document.getElementById("pauseIcon").style.display="none"
}
function closeMenu(){
    document.getElementById("gameMenu").style.display="none"
    document.getElementById("pauseIcon").style.display="block"
}
function restart(){
    location.reload();
}