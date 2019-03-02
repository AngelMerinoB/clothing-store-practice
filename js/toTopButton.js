var icon = document.getElementById("toTop");
var screenWidth = window.matchMedia(("min-width: 1200px"));

window.addEventListener("scroll",function(){
    if((innerWidth>=1200) && (document.body.scrollTop>900 || document.documentElement.scrollTop>900)){
        icon.style.display = "block";
    }
    else {
        icon.style.display = "none";
    }
});

icon.addEventListener("click", function(){
    window.scrollTo(0,0);
});