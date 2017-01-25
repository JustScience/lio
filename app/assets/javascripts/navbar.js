var ready;
ready = function() {
    // Hide Header on on scroll down
    var didScroll;
    var lastScrollTop = 0;
    var delta = 90;
    var navbarHeight = $('nav').outerHeight();

    $(window).scroll(function(event){
        didScroll = true;
    });

    setInterval(function() {
        if (didScroll) {
            hasScrolled();
            didScroll = false;
        }
    }, 250);

    function hasScrolled() {
        var st = $(this).scrollTop();
        
        // Make sure they scroll more than delta
        if(Math.abs(lastScrollTop - st) <= delta)
            return;
        
        // If they scrolled down and are past the navbar, add class .nav-up.
        // This is necessary so you never see what is "behind" the navbar.
        if (st > lastScrollTop && st > navbarHeight){
            // Scroll Down
            $('header').removeClass('navbar-down').addClass('navbar-up');
            // $('#scrollTop').fadeOut(300);
        } else {
            // Scroll Up
            if(st + $(window).height() < $(document).height()) {
                $('header').removeClass('navbar-up').addClass('navbar-down');
                // $('#scrollTop').slideDown(666);
            }
        }
        
        lastScrollTop = st;
    }
    // Burger Animations
    var stage = $('#stage'),
        main = $('#main-content'),
        menu = $('#full-nav'),
        li = $('.full-nav-link li'),
        burger = $('.navbar-burger'),
        top = $('#bg-top'),
        mid = $('#bg-mid'),
        bot = $('#bg-bot');

    burger.mouseenter(function(){
        if (menu.hasClass('fullnav-open')) {
            TweenLite.to(top, 0.6, {x:'3px',y:'-3px',rotation:46,scale:1.1, ease: Back.easeInOut});
            TweenLite.to(bot, 0.6, {x:'0',y:'3px',rotation:-46,scale:1.1, ease: Back.easeInOut});
        } else {
            TweenLite.to(top, 0.6, {y:'-2px',rotation:0,scale:1, ease: Back.easeInOut});
            TweenLite.to(bot, 0.6, {y:'2px',rotation:0,scale:1, ease: Back.easeInOut});
        }
    }).mouseleave(function(){
        if (menu.hasClass('fullnav-open')) {
            TweenLite.to(top, 0.6, {x:'0',y:'8px',rotation:0,scale:1, ease: Back.easeInOut});
            TweenLite.to(bot, 0.6, {x:'0',y:'-8px',rotation:0,scale:1, ease: Back.easeInOut});
        } else {
            TweenLite.to(top, 0.6, {y:'0',rotation:0,scale:1, ease: Back.easeInOut});
            TweenLite.to(bot, 0.6, {y:'0',rotation:0,scale:1, ease: Back.easeInOut});
        }
    }).click(function(){
        if (menu.hasClass('fullnav-open')) {
            TweenLite.to(top, 0.6, {x:'0',y:'-2px',rotation:0,scale:1, ease: Back.easeInOut});
            TweenLite.to(bot, 0.6, {x:'0',y:'2px',rotation:0,scale:1, ease: Back.easeInOut});
            TweenLite.to(mid, 0.6, {y:'0',rotation:0,scale:1, ease: Back.easeInOut});
            main.removeClass('is-blurred');
            menu.fadeToggle();        
            menu.removeClass('fullnav-open');
            li.fadeToggle(200);
        } else {
            TweenLite.to(top, 0.6, {x:'3px',y:'-3px',rotation:46,scale:1.1, ease: Back.easeInOut});
            TweenLite.to(bot, 0.6, {x:'0',y:'3px',rotation:-46,scale:1.1, ease: Back.easeInOut});
            TweenLite.to(mid, 0.1, {y:'0',rotation:0,scale:0.0,ease: Power0.easeInOut});
            main.addClass('is-blurred');
            menu.fadeToggle();        
            menu.addClass('fullnav-open');
            li.fadeToggle(600);
        }
    }).swipe({
        swipe: function(event, direction, distance, duration, fingerCount) {
            if (menu.hasClass('fullnav-open')) {
                TweenLite.to(top, 0.6, {x:'0',y:'-2px',rotation:0,scale:1, ease: Back.easeInOut});
                TweenLite.to(bot, 0.6, {x:'0',y:'2px',rotation:0,scale:1, ease: Back.easeInOut});
                TweenLite.to(mid, 0.6, {y:'0',rotation:0,scale:1, ease: Back.easeInOut});
                menu.fadeToggle();        
                main.removeClass('is-blurred');        
                menu.removeClass('fullnav-open');
                li.fadeToggle(200);
            } else {
                TweenLite.to(top, 0.6, {x:'3px',y:'-3px',rotation:46,scale:1.1, ease: Back.easeInOut});
                TweenLite.to(bot, 0.6, {x:'0',y:'3px',rotation:-46,scale:1.1, ease: Back.easeInOut});
                TweenLite.to(mid, 0.1, {y:'0',rotation:0,scale:0.0,ease: Power0.easeInOut});
                main.addClass('is-blurred');        
                menu.fadeToggle();        
                menu.addClass('fullnav-open');
                li.fadeToggle(600);
            }
        }
    });

    // Logo Animations
    var circles = $('.logo-circle');
    $('#footer-logo').mouseenter(function(){
        TweenLite.to(circles, 0.6, {scale:0.8,rotation:'360',ease: Power0.easeInOut});
        TweenMax.staggerTo(circles, 0.2, {scale:1, ease: Power0.easeInOut}, 0.1);
    }).mouseleave(function(){
        TweenMax.staggerTo(circles, 0.2, {scale:1,rotation:'0', ease: Power0.easeInOut},0.1);
    });

    // Scroll to Top    
    $("#scrollTop").click(function(){
        $('html,body').animate({
            scrollTop: 0
        }, 1200, 'swing');
    });
};

$(document).ready(ready);
$(document).on('page:load', ready);
