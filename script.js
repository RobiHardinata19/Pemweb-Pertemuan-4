var icon  = document.getElementById("icon");
var hero  = document.getElementById("hero");

icon.onclick = function(){
    document.body.classList.toggle("dark-theme");
    if(document.body.classList.contains("dark-theme")){
        icon.src = "light.png";
        hero.src = "HeroBanDark.png";
    }else{
        icon.src = "dark.png"
        hero.src = "HeroBan.png";
    }
}