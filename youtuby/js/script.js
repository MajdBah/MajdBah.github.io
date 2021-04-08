$(document).ready(function() {
    $(".first-list-element").addClass("active");
    $(".nav-item").click(function() {
        $(".nav-item").removeClass("active");
        $(this).addClass("active");
    });

    $(".side-icon").click(function() {
        $("#wrap").toggleClass("toggled");
        var right = $(".sidebar").css("right");
        if (right == '0px') {
            $(".sidebar").css({ 'right': '-17rem' });
            $(".layer").fadeOut();
        } else {
            $(".sidebar").css({ 'right': '0px' });
            $(".layer").fadeIn();
        }
    });

    $(".layer").click(function() {
        $(".sidebar").css({ 'right': '-17rem' });
        $(".layer").fadeOut();
    });

    var searchPosition = $(".search-box").css("display");

    $(".search-icon").click(function() {

        $("#search").slideToggle("slow");

    });

})