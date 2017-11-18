// here goes all the JS

$(document).ready(function() {

    // set the navbar to pos.fixed when scrolling down the page

    $('#main').waypoint(function(event, direction) {
        $('#header').toggleClass('sticky', direction === "down");
        event.stopPropagation();
    });

    // Toggle the navigation in mobile view

    $('#navToggle').click(function () {
        $('.main-nav ul').fadeToggle(200).toggleClass('visible-mobile');
        $('.blur-this').toggleClass('blur-me');
    });
    $('#navToggleClose').click(function () {
        $('.main-nav ul').fadeToggle(200).toggleClass('visible-mobile');
        $('.blur-this').toggleClass('blur-me');
    });
    $('.visible-mobile a').click(function () {
        $('.main-nav ul').fadeToggle(200).toggleClass('visible-mobile');
        $('.blur-this').toggleClass('blur-me');
    });


    /* Anchor slide init */

    $(document).ready(function() {
        $("a.anchorlink").anchorAnimate();
    });

});
