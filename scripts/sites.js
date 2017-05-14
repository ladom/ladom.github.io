const view = document.querySelector('.sites__view');

const list = document.querySelectorAll('.sites__menu--list li');

$(function() {
    $('.sites__menu--list li').click(function() {
        var index = $(this).index();
        var site = list[index].dataset.href;
        view.src = `${site}`;
    });
});