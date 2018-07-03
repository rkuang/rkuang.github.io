$(document).ready(function(){
    $("a[href^='#']").click(function(e) {
        console.log("# clicked");
        e.preventDefault();

        var position = $($(this).attr("href")).offset().top;
    
        $("body, html").animate({
            scrollTop: position
        });
    });
});