import $ from "jquery";
window.jQuery = $;
window.$ = $;

import "jquery-ui";
import "jquery-ui/ui/effect.js";
import "multiscroll.js";
import "multiscroll.js/jquery.multiscroll.css";
import "letteringjs/jquery.lettering.js";
import "@fortawesome/fontawesome-free/js/all.js";

import Splide from "@splidejs/splide";
document.addEventListener("DOMContentLoaded", function () {
  var elms = document.getElementsByClassName("splide");
  for (var i = 0, len = elms.length; i < len; i++) {
    var aSplide = new Splide(elms[i], {
      type: "fade",
      speed: 3000,
      autoplay: true,
      interval: 13000,
      heightRatio: 0.8,
      arrows: false,
      pagination: false,
      lazyLoad: "nearby",
      rewind: true,
      rewindSpeed: 3000,
      pauseOnHover: false,
      pauseOnFocus: false,
    }).mount();

    aSplide.on("active", function (s) {
      var image = $(s.slide).find("img");
      image.addClass("slideslow");
    });

    aSplide.on("inactive", function (s) {
      var image = $(s.slide).find("img");
      if (image.hasClass("slideslow")) {
        image.css("opacity", 0);
        image.removeClass("slideslow");
        void image.offsetWidth;
      }
    });
  }
});

import "./fade-load.js";
import "./multiscroll-init.js";
import "./lettering-init.js";
