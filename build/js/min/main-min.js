// here goes all the JS
// Reveal navigation when scroll up
var lastScrollPosition=0;window.onscroll=function(){var l=window.scrollY;l<lastScrollPosition?$(".main-nav").addClass("reveal-burger"):$(".main-nav").removeClass("reveal-burger"),lastScrollPosition=l},$(document).ready(function(){
// Toggle the navigation in mobile view
$("#navToggle").click(function(){$(".main-nav ul").fadeToggle(200).toggleClass("visible-mobile"),$(".navToggle").toggleClass("close-button"),$(".blur-this").toggleClass("blur-me"),$("body").toggleClass("nav-open")});
/* Anchor slide init */
// $("a.anchorlink").anchorAnimate();
});