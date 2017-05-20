function preloader() {
    if (document.images) {
        var img1 = new Image();
        var img2 = new Image();
        var img3 = new Image();
        var img4 = new Image();
        var img5 = new Image();
        var img6 = new Image();
        var img7 = new Image();
        var img8 = new Image();
        var img9 = new Image();
        var img10 = new Image();
        var img11 = new Image();
        var img12 = new Image();

        img1.src = "../pictures/atiart.jpg";
        img2.src = "../pictures/clock.jpg";
        img3.src = "../pictures/gbr.png";
        img4.src = "../pictures/mapa.jpg";
        img5.src = "../pictures/myear.jpg";
        img6.src = "../pictures/nuty.jpg";
        img7.src = "../pictures/sailing.jpg";
        img8.src = "../pictures/pol.png";
        img9.src = "../pictures/slide01.jpg";
        img10.src = "../pictures/slide04.jpg";
        img11.src = "../pictures/slide05.jpg";
        img12.src = "../pictures/slide06.jpg";
    }
}

function addLoadEvent(func) {
    var oldonload = window.onload;
    if (typeof window.onload != 'function') {
        window.onload = func;
    } else {
        window.onload = function() {
            if (oldonload) {
                oldonload();
            }
            func();
        }
    }
}
addLoadEvent(preloader);