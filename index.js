function humburgerClick () {
    var mobileMenu = document.getElementsByClassName("mobile-menu") [0];
    var display = mobileMenu.style.display;
    if(display == ""){
        mobileMenu.style.display = "flex";
    }else{
        mobileMenu.style.display = "";
    }
}
function moreClick(event){
    event.preventDefault();
    var itemWindow = document.getElementsByClassName("item-window") [0];
    var display = itemWindow.style.display;
    if(display == ""){
        itemWindow.style.display = "flex"        
    }else{
        itemWindow .style.display = "";
    }
}
var humburgerIcon = document.getElementsByClassName ("menu-icon") [0];
humburgerIcon.addEventListener("click", humburgerClick);

var moreIcon = document.getElementsByClassName ("card-button") [1];
moreIcon.addEventListener("click", moreClick);

var closeIcon = document.getElementsByClassName ("item-close") [0];
closeIcon.addEventListener("click", moreClick);
