// function burgerButton() {
//   var x = document.getElementById("myTopnav");
//   if (x.className === "nav-bar") {
//     x.className += " responsive";
//   } else {
//     x.className = "nav-bar";
//   }
// }

// ("#navbarNavDropdown");

// function dropDown() {
//   const el = document.getElementById("navbarDropdownMenuLink");
//   el.parentElement.classList.toggle("show");
// }

function burgerButton() {
  $(".navbar-nav")
    .find("a")
    .toggleClass("display-active");

  if ($(".navbar").height() > 100) {
    $(".navbar").css("height", "69px");
    console.log("this is trying to get back");
  } else {
    $(".navbar").height(185);
  }

  //   console.log(document.getElementByClassName(".nav-item").style.display);
  //   console.log("this is what I got", test + test2);
}

function dropdown() {
  $("#drop-down-system").toggleClass("addon-dropdown");

  const test = $("#navbarDropdownMenuLink").find("id", "drop-down-system");
  console.log("the button is working?", test);
}

// #####################           to Top Button
// jQuery(document).ready(function() {
//   var btn = $("#toTopButton");

//   $(window).scroll(function() {
//     if ($(window).scrollTop() > 400) {
//       btn.addClass("show");
//     } else {
//       btn.removeClass("show");
//     }
//   });

//   btn.on("click", function(e) {
//     e.preventDefault();
//     $("html, body").animate({ scrollTop: 0 }, "400");
//   });
// });

var btn = $("#toTopButton");

$(document).scroll(function() {
  if ($(document).scrollTop() > 300) {
    btn.addClass("show");
  } else {
    btn.removeClass("show");
  }
});

btn.on("click", function(e) {
  e.preventDefault();
  $("html, body").animate({ scrollTop: 0 }, "300");
});

// $(function() {
//     if (window.matchMedia("(max-width: 768px)").matches) {
//       $("#mobileFoot").attr("display", "flex");
//     }
//   });

// $(function() {
//   if ($(window).width() > 768) {
//     console.log("screen width is greater than 768px");
//   } else {
//     $("#footerLaptop").attr("css", { display: "none !important" });
//     $("#mobileFoot").attr("css", { display: "flex" });
//   }
// });

var coll = document.getElementsByClassName("bannkin-service-step");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.maxHeight) {
      content.style.maxHeight = null;
    } else {
      content.style.maxHeight = content.scrollHeight + "px";
    }
  });
}
