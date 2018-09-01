let navbar_height = 50;

$(function() {

    // Smooth scrolling animation
    $("a[href^='#']").click(function(e) {
        console.log("# clicked");
        e.preventDefault();

        var position = $($(this).attr("href")).offset().top-navbar_height;
    
        $("body, html").animate({
            scrollTop: position
        }, 800);
    });


    // change navbar color
    $(window).scroll(function () {
        var position = document.getElementById("about").offsetTop - navbar_height;

        if ($(this).scrollTop() >= position) {
            console.log("background black");
            $('nav').addClass('bg-dark');
            $('.navbar-brand').addClass('show');
        }
        if ($(this).scrollTop() < position) {
            console.log("background transparent");
            $('nav').removeClass('bg-dark');
            $('.navbar-brand').removeClass('show');
        }
    });


    // Hide navbar when item is clicked
    $('.nav-item, .navbar-brand').on('click', function(){
        console.log("nav item clicked");
        $('.navbar-collapse').collapse('hide');
    });


    // Load in animation
    $('body').addClass("load");
});
