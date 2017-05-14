$(function() {



    const myName = document.querySelector('.enter h1');
    const flag = document.querySelector('.enter__flag');

    setMarginHigh();

    function setMarginTop(h) {
        let high = window.innerHeight;
        let width = window.innerWidth;
        myName.style.marginTop = high / h + 'px';
        myName.style.marginBottom = high / 8 + 'px';
        flag.style.marginTop = high / 6 + 'px';
    }

    function setMarginHigh() {
        let high = window.innerHeight;
        let width = window.innerWidth;
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
            callback: function() {
                $('.enter__flag').animate({ opacity: 1 }, 3000);
                $('.enter__flag img').animate({ width: '100px' }, 3000);
            }
        },
        type: 'char'
    });

    $('.enter__flag--polish').click(function() {
        $('.enter').fadeOut(800, "linear", function() {
            $(this).addClass('hide');
        });
    });

    $('.enter__flag--english').click(function() {
        translateSite();
        $('.enter').fadeOut(800, "linear", function() {
            $(this).addClass('hide');
        });
    });

});