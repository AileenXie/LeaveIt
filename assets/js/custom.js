$(document).ready(function () {

    var pxShow = 100;
    var scrollSpeed = 500;
    var navbarHeight = 55;

    /* canvas-nest.js and toc with different device */
    // if(device.desktop()) {
    //     var js = document.createElement("script");
    //     js.src = "https://cdnjs.cloudflare.com/ajax/libs/canvas-nest.js/1.0.1/canvas-nest.min.js";
    //     document.getElementsByTagName("body")[0].appendChild(js);
    // } else {
    //     $("main").css("max-width", "100%");
    //     $(".toc").hide();
    // }

    // $('main').attr("class", "animated fadeIn faster");

    // site header slide up and down
    // $(window).scroll(function () {
    //     var before = $(window).scrollTop();
    //     $(window).scroll(function () {
    //         var after = $(window).scrollTop();
    //         if (before < after) {
    //             $("#site-header").removeClass("slideInUp");
    //             $("#site-header").addClass("slideOutDown");
    //         } else {
    //             $("#site-header").removeClass("slideOutDown");
    //             $("#site-header").addClass("slideInUp");
    //         }
    //         before = after;
    //     });
    // });


    /* Back to Top button behaviour */
    $(window).scroll(function() {
        if ($(window).scrollTop() >= pxShow) {
            $("#gotoTop").addClass('visible');
        } else {
            $("#gotoTop").removeClass('visible');
        }
    });

    $('#gotoTop a').on('click', function() {
        $('html, body').animate({
            scrollTop: 0
        }, scrollSpeed);
        ;
        return false;
    });

    /* scroll to the anchor and scroll spy */
    $("#page-scrollspy a.nav-link").on('click', function () {
        /* decode chinese hash */
        var target = decodeURI(this.hash.replace(/^#/, ''));
        var targetOffset = $(":header[id='" + target + "']").offset().top;

        if (targetOffset > $(window).scrollTop()) {
            $('html,body').animate({scrollTop: targetOffset}, scrollSpeed);
        } else {
            $('html,body').animate({scrollTop: targetOffset - navbarHeight}, scrollSpeed);
        }
        return false;

    });

    $('body').scrollspy({ target: "#page-scrollspy", offset: navbarHeight+5 });

    /* bootstrap table style*/
    $('table').addClass("table table-striped");

});