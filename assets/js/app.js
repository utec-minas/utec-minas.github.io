$(document).ready(function(){
  $(".owl-carousel").owlCarousel({
    loop:true,
    items: 1,
    autoplay:true
  });
  //$('#courses').tab('show');

  document.querySelectorAll('a[href^="#"]').forEach($anchor => {
    $anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    });
});
});