let navbar_height = 50;

$(document).ready(function() {

    smoothScrolling();
    initNavbarSettings();

    activeFilterButtonsListener();

    // Load in animation
    $('body').addClass("load");
});

function smoothScrolling() {
    $("a[href^='#']").click(function(e) {
        // console.log("# clicked");
        e.preventDefault();

        var position = $($(this).attr("href")).offset().top-navbar_height;
    
        $("body, html").animate({
            scrollTop: position
        }, 800);
    });
}

function initNavbarSettings() {
    // Change navbar color when scrolling past landing page
    $(window).scroll(function () {
        var position = document.getElementById("about").offsetTop - navbar_height;

        if ($(this).scrollTop() >= position) {
            // console.log("background black");
            $('nav').addClass('bg-dark');
            $('.navbar-brand').addClass('show');
        }
        if ($(this).scrollTop() < position) {
            // console.log("background transparent");
            $('nav').removeClass('bg-dark');
            $('.navbar-brand').removeClass('show');
        }
    });

    // Hide navbar drawer when item is clicked
    $('.nav-item, .navbar-brand').on('click', function(){
        // console.log("nav item clicked");
        $('.navbar-collapse').collapse('hide');
    });
}

function activeFilterButtonsListener() {
    $(".btn-filter").click(function() {
        $(".btn-filter").removeClass('active');
        $(this).addClass('active');
    })
}

function filterButtonEvent(projectType) {
    if (projectType ==="all") {
        $(".project").slideDown();
        return;
    }
    
    $(".project:not(."+projectType+")").slideUp();
    $("."+projectType).slideDown();
}
