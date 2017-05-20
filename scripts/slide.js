var nav = document.querySelector('nav');
var navSize = function() {
    return nav.offsetHeight;
};

window.addEventListener('resize', navSize);


$('a[href^="#"]').on('click', function(event) {

    var target = $($(this).attr('href'));

    if (target.length) {
        event.preventDefault();
        $('html, body').animate({
            scrollTop: target.offset().top - navSize() - 5
        }, 1000);
    }
});