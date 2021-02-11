/**
 * https://christopheraue.net/design/fading-pages-on-load-and-unload
 */

document.addEventListener("DOMContentLoaded", function () {
  if (!window.AnimationEvent) {
    return;
  }

  var anchors = document.getElementsByTagName("a");

  for (var idx = 0; idx < anchors.length; idx += 1) {
    if (
      anchors[idx].hostname !== window.location.hostname ||
      anchors[idx].pathname === window.location.pathname
    ) {
      continue;
    }

    anchors[idx].addEventListener("click", function (event) {
      var fader = document.getElementById("fader");
      var anchor = event.currentTarget;

      var listener = function () {
        window.location = anchor.href;
        fader.removeEventListener("animationend", listener);
      };
      fader.addEventListener("animationend", listener);

      event.preventDefault();

      fader.classList.add("fade-in");
    });
  }
});

window.addEventListener("pageshow", function (event) {
  if (!event.persisted) {
    return;
  }
  var fader = document.getElementById("fader");
  fader.classList.remove("fade-in");
});