function OpenMenu(){
    document.getElementById("menu-icon").style.display = "none";
    document.getElementById("close-icon").style.display = "block";
    document.getElementById("menu").style.transform = "translate(0,0)";
}
function CloseMenu(){
    document.getElementById("menu-icon").style.display = "block";
    document.getElementById("close-icon").style.display = "none";
    document.getElementById("menu").style.transform = "translate(-100%,0)";
}
function myFunction(x) {
    if (x.matches) { // If media query matches
        document.getElementById("close-icon").style.display = "block";
        document.getElementById("menu-icon").style.display = "block";
    } else {
        document.getElementById("close-icon").style.display = "none";
        document.getElementById("menu-icon").style.display = "none";
    }
  }
