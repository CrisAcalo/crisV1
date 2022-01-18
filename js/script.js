function active_menu(){
    document.getElementById("responsive_menu").style.right = "0px";
    document.getElementById("blur_menu").style.left = "0";
    document.getElementById("blur_menu").style.opacity = "1";
};


function hide_menu() {
    document.getElementById("responsive_menu").style.right = "-220px";
    document.getElementById("blur_menu").style.left = "100vw";
    document.getElementById("blur_menu").style.opacity = "0";
}