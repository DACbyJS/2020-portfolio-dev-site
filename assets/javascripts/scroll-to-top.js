document.addEventListener('DOMContentLoaded', function() {
  var backToTopBtn = document.getElementsByClassName('back-to-top');
  backToTopBtn[0].addEventListener('click', function() {
    window.scroll({ top: 0, left: 0, behavior: 'smooth' });
  });
});
