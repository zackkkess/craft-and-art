//  sticky header start
window.onscroll= function () {
  myFunction();
};
window.onscroll = function () {
  myFunction();
};
var header = document.getElementById("myHeader");
var sticky = header.offsetTop;
function myFunction() {
  if (window.pageYOffset > sticky) {
      header.classList.add("sticky");
  } else {
      header.classList.remove("sticky");
  }
}
//  sticky header end
// Form Function start
jQuery('input').focus(function(){
  jQuery(this).parents('.form-group').addClass('focused');
});
jQuery('textarea').focus(function(){
  jQuery(this).parents('.form-group').addClass('focused');
});
jQuery('textarea').blur(function(){
  var inputValue = jQuery(this).val();
  if ( inputValue == "" ) {
    jQuery(this).removeClass('filled');
    jQuery(this).parents('.form-group').removeClass('focused');  
  } else {
    jQuery(this).addClass('filled');
  }
}) 
jQuery('input').blur(function(){
  var inputValue = jQuery(this).val();
  if ( inputValue == "" ) {
    jQuery(this).removeClass('filled');
    jQuery(this).parents('.form-group').removeClass('focused');  
  } else {
    jQuery(this).addClass('filled');
  }
})  
// Form Function end
// mouse move effect start
jQuery(document).mousemove(function(event){
  var xPos = (event.clientX/jQuery(window).width())-0.5,
      yPos = (event.clientY/jQuery(window).height())-0.5,
      box = jQuery('.box'),
      coord = jQuery('.coordinates');
 TweenLite.to(box, 0.6, {
   rotationY: 5 * xPos, 
   rotationX: 5 * yPos,
   ease: Power1.easeOut,
   transformPerspective: 1500,
   transformOrigin: 'center'
 });
});
// mouse move effect end
// banner zoom effect start
jQuery(window).scroll(function() {
  var scroll = $(window).scrollTop();
	jQuery(".zoom").css({
		backgroundSize: (100 + scroll/5)  + "%",
		top: -(scroll/10)  + "%",
	});
});
// banner zoom effect end
// background image start
$(window).scroll(function() {    
  var scroll = $(window).scrollTop();
  if (scroll >= 100) {
      $(".mainBannerBox").addClass("darkHeader");
  } else {
      $(".mainBannerBox").removeClass("darkHeader");
  }
})
// background image end
// CURSOR
var cursor = $(".cursor"),
follower = $(".cursor-follower");
var posX = 0,
    posY = 0;
var mouseX = 0,
    mouseY = 0;
TweenMax.to({}, 0.016, {
  repeat: -1,
  onRepeat: function() {
    posX += (mouseX - posX) / 9;
    posY += (mouseY - posY) / 9;
    TweenMax.set(follower, {
        css: {
        left: posX - 12,
        top: posY - 12
        }
    });
    TweenMax.set(cursor, {
        css: {
        left: mouseX,
        top: mouseY
        }
    });
  }
});
$(document).on("mousemove", function(e) {
    mouseX = e.clientX;
    mouseY = e.clientY;
});
// yellow circle
$(".link").on("mouseenter", function() {
    cursor.addClass("active");
    follower.addClass("active");
});
$(".link").on("mouseleave", function() {
    cursor.removeClass("active");
    follower.removeClass("active");
});
// Menu Bar Start
const showBtn = document.querySelector(".btn-bars"),
  closeBtn = document.querySelector(".btn-close"),
  navMenu = document.querySelector(".navbar-collapse");
showBtn.addEventListener("click", () => {
  navMenu.classList.add("showMenu");
});
closeBtn.addEventListener("click", () => {
  navMenu.classList.remove("showMenu");
});
// Menu Bar End
// Element Reveal start
ScrollReveal({ reset: true });
{ mobile: true }
ScrollReveal().reveal(".slide-up", {
  duration: 900,
  origin: "bottom",
  distance: "100px",
  easing: "cubic-bezier(.37,.01,.74,1)",
  opacity: 0.3,
  scale: 0.9
});
ScrollReveal().reveal(".slide-right", {
  duration: 3000,
  origin: "left",
  distance: "300px",
  easing: "ease-in-out"
});
ScrollReveal().reveal(".slide-left", {
  duration: 3000,
  origin: "right",
  distance: "300px",
  easing: "ease-in-out"
});
ScrollReveal().reveal(".scaleUp", {
  duration: 4000,
  scale: 0.85
});
ScrollReveal().reveal(".flip", {
  delay: 500,
  duration: 2000,
  rotate: {
    x: 20,
    z: 20
  }
});
// Element Reveal end