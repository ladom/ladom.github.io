$(function() {
    var lista = $('#slides img');
    var listLength = lista.length - 1;


    var sliderWidth = function() {
        return $(window).width();
    };

    var sliderHeight = function() {
        return $('#slides img').height() * 0.8;
    };

    function setSize() {
        $(lista).css({ width: sliderWidth() });
        $('#carousel').css({ width: sliderWidth() });
        $('#carousel').css({ height: sliderHeight() });
        $('#controls').css({ width: sliderWidth() });
        $('#rings').css({ top: sliderHeight() - 25 });
    };


    setSize();
    $(window).resize(function() {
        setSize();
    });


    var startSlide = setInterval(function() { slideShow() }, 5000);

    for (var i = 0; i < lista.length; i++) {
        $('#rings').append('<div></div>');
    };
    var rings = $('#rings div');


    var index = 0;
    $(rings[index]).css({ opacity: 0.9 });

    function hideSlide() {
        $(lista[index]).animate({ opacity: 0 }, 500);
        $(rings[index]).animate({ opacity: 0.4 }, 500);
    };

    function showSlide() {
        $(lista[index]).animate({ opacity: 1 }, 500);
        $(rings[index]).animate({ opacity: 0.9 }, 500);
    };

    $('#arrowRight').click(function() {
        if (index < listLength) {
            hideSlide();
            clearInterval(startSlide);
            index += 1;
            showSlide();
            startSlide = setInterval(function() { slideShow() }, 5000);
        } else {
            hideSlide();
            clearInterval(startSlide);
            index = 0;
            showSlide();
            startSlide = setInterval(function() { slideShow() }, 5000);
        }
    });

    $('#arrowLeft').click(function() {
        if (index > 0) {
            hideSlide();
            clearInterval(startSlide);
            index -= 1;
            showSlide();
            startSlide = setInterval(function() { slideShow() }, 5000);
        } else {
            hideSlide();
            clearInterval(startSlide);
            index = listLength;
            showSlide();
            startSlide = setInterval(function() { slideShow() }, 5000);
        }
    });

    function slideShow() {
        if (index < listLength) {
            hideSlide();
            index += 1;
            showSlide();
        } else {
            hideSlide();
            index = 0;
            showSlide();
        }
    };

    $('#rings').on('click', 'div', function() {
        var a = $(this).index();
        hideSlide();
        clearInterval(startSlide);
        index = a;
        showSlide();
        startSlide = setInterval(function() { slideShow() }, 5000);
    });
})