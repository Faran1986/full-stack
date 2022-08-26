$(document).ready(function () {
  $(".header-dots").click(function () {
    $(".menu").addClass("show");
    $("body").addClass("overlay-body");
  });
});

$(document).ready(function () {
  $(".close-menu").click(function () {
    $(".menu").removeClass("show");
    $("body").removeClass("overlay-body");
  });
});

$(document).ready(function () {
  $(".menu-item").click(function () {
    $(".menu").removeClass("show");
    $("body").removeClass("overlay-body");
  });
});

// GSAP Animation

// if ($(window).width() > 767) {
//   const quotes = document.querySelectorAll(".animation_title");

//   function setupSplits() {
//     quotes.forEach((quote) => {
//       if (quote.anim) {
//         quote.anim.progress(1).kill();
//         quote.split.revert();
//       }

//       quote.split = new SplitText(quote, {
//         type: "lines,words,chars",
//         linesClass: "split-line",
//       });
//       quote.anim = gsap.from(quote.split.chars, {
//         scrollTrigger: {
//           trigger: quote,
//           toggleActions: "restart none restart none",
//           start: "top 90%",
//         },
//         duration: 0.9,
//         ease: "circ.out",
//         y: 380,
//         stagger: 0.04,
//       });
//     });
//   }

//   ScrollTrigger.addEventListener("refresh", setupSplits);
//   setupSplits();

//   gsap.from(".about p", {
//     scrollTrigger: {
//       trigger: ".about p",
//       toggleActions: "restart none restart none",
//     },
//     duration: 1,
//     y: -100,
//     autoAlpha: 0,
//     ease: Power1.out,
//     delay: 0.5,
//   });

//   gsap.from(".skill-list li", {
//     scrollTrigger: {
//       trigger: ".skill-list",
//       toggleActions: "restart none restart none",
//     },
//     duration: 0.7,
//     x: -160,
//     autoAlpha: 0,
//     ease: Power1.out,
//     stagger: 0.1,
//   });

//   gsap.from(".hero-vertical-text", {
//     duration: 0.7,
//     y: -200,
//     autoAlpha: 0,
//     delay: 0.7,
//     ease: Power1.out,
//   });
// }
