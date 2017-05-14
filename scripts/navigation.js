$(document).ready(function() {
    $('.navBar__header--menuBtn').click(function() {
        $('.navBar__header--menuBtnIcon').toggleClass('open');
        $('.navBar__body').toggleClass('open');
    });

    $('#aboutBtn, #frontBtn, #musicBtn, #hobbyBtn, #contactBtn').click(function() {
        $('.navBar__header--menuBtnIcon').toggleClass('open');
        $('.navBar__body').toggleClass('open');
    });
});