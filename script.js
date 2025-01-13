function sideStart(){
    var close = document.querySelector('.sideMenu');
    close.style.display="flex";
}
function sideClose(){
    var start = document.querySelector('.sideMenu');
    start.style.display="none";
}
var typed = new Typed(".auto-type",{
    strings : ["Web Developer", "Programmer"],
    typeSpeed : 100,
    backSpeed : 100,
    looped : true
})