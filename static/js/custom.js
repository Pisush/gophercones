$(document).ready(function(){
    // Smooth scrolling via animate()
    $("a").on('click', function(event) {
        if (this.hash && window.location.pathname === "/") {
            event.preventDefault();
            var hash = this.hash;
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 800, function(){
                window.location.hash = hash;
            });
        }
    });

    // Navigation change on scroll
    var maxOffset = 300;
    $(window).scroll(function() {
        if ($(window).scrollTop() >= maxOffset) {
            $('.navbar-default').addClass('navbar-shrink');
        }
        else {
            $('.navbar-default').removeClass('navbar-shrink');
        }
    });

    if ($(window).scrollTop() >= maxOffset) {
        $('.navbar-default').addClass('navbar-shrink');
    }
    else {
        $('.navbar-default').removeClass('navbar-shrink');
    }

    // Highlight the top nav as scrolling occurs
    $('body').scrollspy({
        target: '.navbar-fixed-top'
    });

    // Closes the Responsive Menu on Menu Item Click
    $('.navbar-collapse ul li a').click(function() {
        $('.navbar-toggle:visible').click();
    });

    var randomizeThings = function(what, where, toggled) {
        var div = $(what).toArray();
        while(div.length > 0) {
            var idx = Math.floor((Math.random() * (div.length)));
            var element = div.splice(idx, 1);
            $(where).append(element[0]);
        }

        $(toggled).toggle()
    };

    randomizeThings('.trainers-item', '.trainers-row', '.workshops-container');
    randomizeThings('.speakers-item', '.speakers-row', '.speakers-container');
});
