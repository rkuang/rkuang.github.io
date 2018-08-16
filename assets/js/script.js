$(function() {
    $("a[href^='#']").click(function(e) {
        console.log("# clicked");
        e.preventDefault();

        var position = $($(this).attr("href")).offset().top-51;
    
        $("body, html").animate({
            scrollTop: position
        }, 800);
    });


    $(window).scroll(function () {
        var position = document.getElementById("about").offsetTop - 51;

        if ($(this).scrollTop() >= position) {
            console.log("background black");
            $('nav').addClass('changeColor');
            $('nav>.navbar-brand').addClass('show');
        }
        if ($(this).scrollTop() < position) {
            console.log("background transparent");
            $('nav').removeClass('changeColor');
            $('nav>.navbar-brand').removeClass('show');
        }
    });

    $('nav>.navbar-collapse>.navbar-nav>.nav-item').on('click', function(){
        console.log("nav item clicked");
        $('.navbar-collapse').collapse('hide');
    });

    $('body').addClass("load");
});
