function humburgerClick () {
    $(".mobile-menu").slideToggle(600);
}
function moreClick(event, cardNumber){
    event.preventDefault();
    cardNumber = cardNumber || "";
    var itemWindow = document.querySelector(".item-window" + cardNumber);
    var display = itemWindow.style.display;
    if(display == "" || display == "none"){
        $(".item-window" + cardNumber).fadeIn(600);
        itemWindow.style.display = "flex";       
    }else{
        $(".item-window").fadeOut(600) ;
    }
}
var humburgerIcon = document.getElementsByClassName ("menu-icon") [0];
humburgerIcon.addEventListener("click", humburgerClick);

//var moreIcon = document.getElementsByClassName ("card-button") [1];
//moreIcon.addEventListener("click", moreClick);

//var closeIcon = document.getElementsByClassName ("item-close") [0];
//closeIcon.addEventListener("click", moreClick);
$(".item-close").click(
    function(){
$(".item-window").fadeOut();
    }
);

$(".card-button.first").click(
    function(event){
        moreClick(event,".first");
    }
);
$(".card-button.second").click(
    function(event){
        moreClick(event,".second");
    }
);
$(".card-button.third").click(
    function(event){
        moreClick(event,".third");
    }
);
$(".card-button.fourth").click(
    function(event){
        moreClick(event,".fourth");
    }
);

$("a[href='#']").click(
    function (){
        $("html, body").animate({
            scrollTop: 0
    },1000);
    });