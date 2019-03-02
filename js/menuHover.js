// --- For Women's menu---
var menuSelector = document.getElementById("nav-item");
var menuContainer = document.getElementById("dropdown-menu");
var menuLink = document.getElementById("navbarDropdown");

menuSelector.addEventListener("mouseenter",function(){
    menuSelector.classList.toggle("show");
    menuContainer.classList.toggle("show");
    menuLink.setAttribute("aria-expanded", "true");
});

menuSelector.addEventListener("mouseleave",function(){
    var showExists = false;
    for(i=0;i<menuSelector.classList.length;i++){
        if(menuSelector.classList[i]=="show"){
            showExists = true;
        }
    }

    if(showExists){
        menuSelector.classList.toggle("show");
        menuContainer.classList.toggle("show");
    }

    menuLink.setAttribute("aria-expanded", "false");
});

// --- For Men's menu---
var menuSelector2 = document.getElementById("nav-item2");
var menuContainer2 = document.getElementById("dropdown-menu2");
var menuLink2 = document.getElementById("navbarDropdown2");

menuSelector2.addEventListener("mouseenter",function(){
    menuSelector2.classList.toggle("show");
    menuContainer2.classList.toggle("show");
    menuLink2.setAttribute("aria-expanded", "true");
});

menuSelector2.addEventListener("mouseleave",function(){
    var showExists2 = false;
    for(i=0;i<menuSelector2.classList.length;i++){
        if(menuSelector2.classList[i]=="show"){
            showExists2 = true;
        }
    }

    if(showExists2){
        menuSelector2.classList.toggle("show");
        menuContainer2.classList.toggle("show");
    }

    menuLink2.setAttribute("aria-expanded", "false");
});