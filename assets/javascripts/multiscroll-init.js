function initMultiScroll() {
  let isHomePage = $("body").hasClass("index");

  if (!isHomePage) {
    noMultiScroll();
    return;
  }

  $("#multiscroll").multiscroll({
    scrollingSpeed: 1000,
    easing: "easeOutSine",
    paddingTop: "78px",
  });

  return;
}

function noMultiScroll() {
  $("html").addClass("no-multiscroll");
  return;
}

$(document).on("DOMContentLoaded", function () {
  if ($(window).width() > 768) {
    initMultiScroll();
  } else {
    noMultiScroll();
  }
});
