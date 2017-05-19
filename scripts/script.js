'use strict';

$(function () {

    var myName = document.querySelector('.enter h1');
    var flag = document.querySelector('.enter__flag');

    setMarginHigh();

    function setMarginTop(h) {
        var high = window.innerHeight;
        var width = window.innerWidth;
        myName.style.marginTop = high / h + 'px';
        myName.style.marginBottom = high / 8 + 'px';
        flag.style.marginTop = high / 6 + 'px';
    }

    function setMarginHigh() {
        var high = window.innerHeight;
        var width = window.innerWidth;
        if (high > width) {
            setMarginTop(7);
        } else {
            setMarginTop(4);
        }
    }

    window.addEventListener('resize', setMarginHigh);

    $('.tlt').textillate({
        selector: '.tlt',
        loop: false,
        minDisplayTime: 1000,
        initialDelay: 300,
        autoStart: true,
        in: {
            effect: 'rollIn',
            delayScale: 1.3,
            delay: 80,
            sync: false,
            shuffle: true,
            reverse: false,
            callback: function callback() {
                $('.enter__flag').animate({ opacity: 1 }, 3000);
                $('.enter__flag img').animate({ width: '100px' }, 3000);
            }
        },
        type: 'char'
    });

    $('.enter__flag--polish').click(function () {
        $('.enter').fadeOut(800, "linear", function () {
            $(this).addClass('hide');
        });
    });

    $('.enter__flag--english').click(function () {
        translateSite();
        $('.enter').fadeOut(800, "linear", function () {
            $(this).addClass('hide');
        });
    });
});
"use strict";
'use strict';

$(document).ready(function () {
    $('.navBar__header--menuBtn').click(function () {
        $('.navBar__header--menuBtnIcon').toggleClass('open');
        $('.navBar__body').toggleClass('open');
    });

    $('#aboutBtn, #frontBtn, #musicBtn, #hobbyBtn, #contactBtn').click(function () {
        $('.navBar__header--menuBtnIcon').toggleClass('open');
        $('.navBar__body').toggleClass('open');
    });
});
'use strict';

var nav = document.querySelector('nav');
var navSize = function navSize() {
    return nav.offsetHeight;
};

window.addEventListener('resize', navSize);

$('a[href^="#"]').on('click', function (event) {

    var target = $($(this).attr('href'));

    if (target.length) {
        event.preventDefault();
        $('html, body').animate({
            scrollTop: target.offset().top - navSize() - 5
        }, 2000);
    }
});
'use strict';

function translateSite() {
    document.getElementById('aboutBtn').textContent = 'About';
    document.getElementById('musicBtn').textContent = 'Music';
    document.getElementById('hobbyBtn').textContent = 'Passions';
    document.getElementById('contactBtn').textContent = 'Contact';

    document.querySelector('.about__me--body p').innerHTML = 'Music and IT. Is it possible to connect?<br>For over 30 years I play the violin. I have completed all degrees in music education. Elementary and secondary schools, studies, then doctorate and habilitation degrees. The computer has always been close to me. I have tried many technologies, pretty well mastered Photoshop, created advanced Excel worksheets, even folded and published my own book using Adobe InDesign.<br>Now I decided that I would like to professionally deal with creating websites and web applications. I\'ve always had plenty of ideas on how should it look, act, have funcionalities. I just lacked the knowledge of how to do this with code. For some time I have been very diligent learning HTML, CSS styles and above all JavaScript. And I\'m more and more fascinated by their possibilities, which seem to have no limits.<br>Apart from work I\'m a woodworking lover, sometimes I\'m organizing urban games. I like to travel, and recently I was fascinated with off-road.';
    document.querySelector('.about__front--body p').innerHTML = 'I\'m starting my career as a Front-end developer. As many of beginers I have good, in my opinion, knowledge of HTML and CSS. I use HTML5 and CSS3 for my projects. Currently I\'m most fascinated by the capabilities of JavaScript. I am delighted with the new ES6 solutions that make it easier for me to implement my ideas.<br>In order to streamline my work, I use the Gulp toolkit and CSS preprocessors. My favorite is SASS and in fact I use it most often. I\'m also using CSS and JS libraries e.g. Twitter Bootstrap, jQuery, AngularJS.<br>I am constantly learning and discovering new opportunities to solve my problems every day. I would like to use my existing skills and join to projects in a professional development team. Such kind of work would allow me to use the experience and knowledge of my colleagues to further develop in this field. I think my artistic experience can help in an completely unexpected way, to solve the problems and issues we will be working on.<br>Because I\'m a musician, I\'d like to work on creating websites and applications for learning this art. I see huge deficiencies in the educational applications market for learning music.';
    document.querySelector('.about__front--works').textContent = "My choosen works:";
    document.querySelector('.about__front--list').innerHTML = '<li><a href="http://www.atiart.pl" target="_blank"><i class="fa fa-arrow-right"></i> Muzyczni Odkrywcy - home site</a></li><li><a href="http://www.muzyczniodkrywcy.pl/nuty" target="_blank"><i class="fa fa-arrow-right"></i> Poznaj Nuty - education game for children</a></li><li><a href="http://www.muzyczniodkrywcy.pl/clock" target="_blank"><i class="fa fa-arrow-right"></i> JavaScript clock</a></li>';
    document.querySelector('.about__front--git').innerHTML = 'My projects on GitHub: <a href="https://github.com/ladom"><i class="fa fa-github"></i> github.com/ladom</a>';
    document.querySelector('.about__music--header h2').textContent = "Classical music";
    document.querySelector('.about__music--body p').innerHTML = 'I\'m a professional violinist. For nearly twenty years I have performed on many stages in Poland and abroad. For many years I worked also as a teacher at the Academy of Music in Wrocław. I have recorded a dozen CDs and DVDs, played hundreds of concerts as a soloist, chamber and orchestra musician.<br>Playing is like riding a bike - it is not forgotten. That is why I\'ll always be a musician and I\'ll always enjoy playing the violin.';
    document.querySelector('.about__hobby--header h2').textContent = "Passions";
    document.querySelector('.about__hobby--body p').innerHTML = 'How long I remember, I loved wood. When I was a child, I was spending hours hulling bark boats or sticking wooden constructions. Over time, I began to approach this more practically. Amateur, but with great success I manage to create small wooden trinkets, as well as large structures such as stairs in my home, terraces or terrace roof from wood. It invariably gives me a lot of fun and allows me to relax and rest.<br>Since I remember I also liked traveling. As a child I visited various parts of the world with my parents. Later, due to the music profession, I was able to visit a large number of amazing places. Often very exotic and rarely visited by tourists. For the few years, I\'m fascinated by driving off-road car. Off-road allows me to visit places that were once inaccessible and give me an incredible sense of independence and complete separation from daily affairs.<br>Besides this and many other hobbies I\'m fortunate that I love both the violin and the programming, so the work is also a source of satisfaction and joy for me.';
    document.querySelector('.footer__contact').textContent = "Contact:";
}
'use strict';

$(function () {
    var lista = $('#slides img');
    var listLength = lista.length - 1;

    var sliderWidth = function sliderWidth() {
        return $(window).width();
    };

    var sliderHeight = function sliderHeight() {
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
    $(window).resize(function () {
        setSize();
    });

    var startSlide = setInterval(function () {
        slideShow();
    }, 5000);

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

    $('#arrowRight').click(function () {
        if (index < listLength) {
            hideSlide();
            clearInterval(startSlide);
            index += 1;
            showSlide();
            startSlide = setInterval(function () {
                slideShow();
            }, 5000);
        } else {
            hideSlide();
            clearInterval(startSlide);
            index = 0;
            showSlide();
            startSlide = setInterval(function () {
                slideShow();
            }, 5000);
        }
    });

    $('#arrowLeft').click(function () {
        if (index > 0) {
            hideSlide();
            clearInterval(startSlide);
            index -= 1;
            showSlide();
            startSlide = setInterval(function () {
                slideShow();
            }, 5000);
        } else {
            hideSlide();
            clearInterval(startSlide);
            index = listLength;
            showSlide();
            startSlide = setInterval(function () {
                slideShow();
            }, 5000);
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

    $('#rings').on('click', 'div', function () {
        var a = $(this).index();
        hideSlide();
        clearInterval(startSlide);
        index = a;
        showSlide();
        startSlide = setInterval(function () {
            slideShow();
        }, 5000);
    });
});