function openMenu(){
    document.getElementById("gameMenu").style.display="block"
    document.getElementById("pause").style.display="none"
}
function closeMenu(){
    document.getElementById("gameMenu").style.display="none"
    document.getElementById("pause").style.display="block"
}
function restart(){
    location.reload();
}