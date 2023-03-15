"use strict";
//-----------------accordion--------------------

let accordion = document.querySelectorAll(".container");

accordion.forEach((element) => {
  element.addEventListener("click", function () {
    this.classlist.toggle("activecontainer");
    console.log(this);
  });
});

let scrollButton = document.getElementById("clicktop");

scrollButton.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});

//-------header scroll------

// let navBar = document.getElementById(".navbar");

// function scrollFunction() {
//   if (window.scrollTo() > 50) {
//     navBar.addClass.classlist("active");
//   } else {
//     navBar.removeClass.classlist("active");
//   }
// }
// navBar.addEventListener("scroll", function () {
//   if ($(window).scrollTop() > 50) {
//     navBar.addClass.classlist("active");
//   } else {
//     navBar.removeClass.classlist("active");
//   }
// });

// $(function() {
//     $(window).on("scroll", function() {
//         if($(window).scrollTop() > 50) {
//             $(".navbar").addClass("active");
//         } else {
//             $(".navbar").removeClass("active");
//         }
//     });
// });


// $(document).on('scroll', function(){
//     if ($(window).scrollTop() > 50) {
//         $('.navbar').addClass('active');
//     } else {
//         $('.navbar').removeClass('active');
//     }
// });


$(window).on("scroll", function() {
    if($(window).scrollTop() > 800) {
        $(".navbar").addClass("active");
    } else {
        //remove the background property so it comes transparent again (defined in your css)
       $(".navbar").removeClass("active");
    }
});