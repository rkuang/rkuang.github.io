$(function() {
    $("a[href^='#']").click(function(e) {
        console.log("# clicked");
        e.preventDefault();

        var position = $($(this).attr("href")).offset().top;
    
        $("body, html").animate({
            scrollTop: position
        });
    });


    $(window).scroll(function () {
        var position = document.getElementById("about").offsetTop - 51;

        if ($(this).scrollTop() >= position-51) {
            console.log("background black")
            $('nav').addClass('changeColor')
        }
        if ($(this).scrollTop() < position-51) {
            console.log("background transparent")
            $('nav').removeClass('changeColor')
        }
    });

    $('body').addClass("load");
});
