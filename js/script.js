// $( document ).ready(function() {
// 	$('.change').click(function () {
// 		$("h1").css("color", "purple");
// 	});

//  	$(".navbar2").attr("id", "potato");

// }); 

// $("#icon_link").click(function() {
// 	$(".topnav").toggleClass("responsive");
// 	});


$(document).ready(function() {
    $(document).foundation();
});

var slideIndex = 0;
carousel();

function carousel() {
    var i;
    var x = document.getElementsByClassName("mySlides");
    for (i = 0; i < x.length; i++) {
      x[i].style.display = "none"; 
    }
    slideIndex++;
    if (slideIndex > x.length) {slideIndex = 1} 
    x[slideIndex-1].style.display = "block"; 
    setTimeout(carousel, 2000); // Change image every 3 seconds
}

