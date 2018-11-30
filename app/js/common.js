
$(document).ready(function() {
    if ($(window).width() > 1023) {
        $('#fullpage').fullpage({
            scrollBar:true,
            controlArrows: false,
            responsiveWidth: 1024,
            onLeave: function(origin, index){
                var loadedSection = this;
                var thisIndex = index.index + 1;
                setTimeout(function(){
                    $('.left-line-current').text('0' + thisIndex);
                },300);
                var items = $('.section').length;
                if (thisIndex == items) {
                    $('.footer-btn').addClass('hide');
                    $('.footer-soc').addClass('show')
                }
                else {
                    $('.footer-btn').removeClass('hide');
                    $('.footer-soc').removeClass('show')
                }
                console.log(items);
                // var wow2 = new WOW(
                //     {
                //         boxClass:     'wow2',      // animated element css class (default is wow)
                //         animateClass: 'animated', // animation css class (default is animated)
                //         live:         true,       // act on asynchronously loaded content (default is true)
                //     }
                // );
                // wow2.init();
            }
        });
    }

    var items = $('.section').length;
    if (items == 1) {
        $('.footer-btn').addClass('hide');
        $('.footer-soc').addClass('show')
    }
    else {
        $('.footer-btn').removeClass('hide');
        $('.footer-soc').removeClass('show')
    }
    $('#fullpage2').fullpage({
        scrollBar:true,
        menu: '#myMenu',
        controlArrows: false,
        anchors: ['firstPage', 'secondPage', 'thirdPage'],
        onLeave: function(origin, index){
            var loadedSection = this;
            $('.ancors-row').eq(index.index).addClass('show').siblings().removeClass('show');
        }
    });
    var wow = new WOW(
        {
            boxClass:     'wow',      // animated element css class (default is wow)
            animateClass: 'animated', // animation css class (default is animated)
            offset:       0,          // distance to the element when triggering the animation (default is 0)
            mobile:       false,       // trigger animations on mobile devices (default is true)
            live:         true,       // act on asynchronously loaded content (default is true)
            callback:     function(box) {
                // the callback is fired every time an animation is started
                // the argument that is passed in is the DOM node being animated
            },
            scrollContainer: null // optional scroll container selector, otherwise use window
        }
    );
    wow.init();

    $('.third-arrow-next').click(function(){
        $('.third-slider').slick('slickNext')
    });
    $('.third-arrow-prev').click(function(){
        $('.third-slider').slick('slickPrev')
    });
    $('.gallery_next').click(function(){
        fullpage_api.moveSlideRight();
    });
    $('.gallery_prev').click(function(){
        fullpage_api.moveSlideLeft();
    });
    $('.fourth-slider').slick({
        slidesToShow: 4,
        arrows: false,
        responsive: [
            {
                breakpoint: 1439,
                settings: {
                    slidesToShow: 3,
                    arrows: false
                }
            },
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    arrows: false,
                    variableWidth: true
                }
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 2,
                    arrows: false,
                    variableWidth: true
                }
            }
            // You can unslick at a given breakpoint now by adding:
            // settings: "unslick"
            // instead of a settings object
        ]
    });
    // $('.about-slider').slick({
    //     slidesToShow: 1,
    //     arrows: false,
    //     asNavFor: '.about-bottom'
    // });
    // $('.about-bottom').slick({
    //     slidesToShow: 4,
    //     arrows: true,
    //     asNavFor: '.about-slider',
    //     focusOnSelect: true
    // });
    $('.slider1').slick({
        slidesToShow: 1,
        vertical: true,
        speed: 1000,
        verticalSwiping: true,
        arrows: false,
        asNavFor: ".news-slider"
    });
    $('.slider2').slick({
        slidesToShow: 1,
        vertical: true,
        speed: 1000,
        arrows: false,
        verticalSwiping: true,
        cssEase: 'ease-in-out',
        asNavFor: ".news-slider"
    });
    $('.slider3').slick({
        slidesToShow: 1,
        vertical: true,
        arrows: false,
        speed: 1000,
        verticalSwiping: true,
        asNavFor: ".news-slider"
    });
    $('.slider4').slick({
        slidesToShow: 1,
        vertical: true,
        arrows: false,
        speed: 1000,
        verticalSwiping: true,
        asNavFor: ".news-slider"
    });
    $('.slider5').slick({
        slidesToShow: 1,
        vertical: true,
        arrows: false,
        speed: 1000,
        verticalSwiping: true,
        asNavFor: ".news-slider"
    });
    $('.plan-slider').slick({
        slidesToShow: 1,
        arrows: false,
        speed: 1000,
        touchMove: false,
        swipeToSlide: true,
        draggable: false,
        swipe: false,
        // variableWidth: true,
        asNavFor: ".plan-number"
    });
    $('.third-slider').slick({
        slidesToShow: 1,
        arrows: false,
        speed: 1000,
    });
    $('.plan-number').slick({
        slidesToShow: 1,
        vertical: true,
        speed: 1000,
        arrows: false,
        verticalSwiping: true,
        asNavFor: ".plan-slider"
    });
    $('.fourth-slider-block').hover(function () {
        $(this).find('.fourth-slider-slide').addClass('active');
    },
    function() {
        $(this).find('.fourth-slider-slide').removeClass('active');
    });
    $('.fourth-arrow-next').click(function(){
        $('.fourth-slider').slick('slickNext')
    });
    $('.fourth-arrow-prev').click(function(){
        $('.fourth-slider').slick('slickPrev')
    });
    $('.plan-arrow-next').click(function(){
        $('.plan-slider').slick('slickNext')
    });
    $('.plan-arrow-prev').click(function(){
        $('.plan-slider').slick('slickPrev')
    });
    $('.footer-btn').click(function () {
        fullpage_api.moveSectionDown();
    });
    $('.menu-open').click(function(){
       $('.menu').addClass('active');
       $('.menu-overlay').addClass('active');
       setTimeout(function(){
           $('.menu-close').addClass('active');
           $('.down-text').addClass('active');
           $('.right-line').addClass('active');
        }, 500)
    });
    $('.menu-close').click(function(){
            $('.menu-close').removeClass('active');
            $('.down-text').removeClass('active');
            $('.right-line').removeClass('active');
        setTimeout(function(){
            $('.menu-overlay').removeClass('active');
        }, 500)
        setTimeout(function(){
            $('.menu').removeClass('active');
        }, 1000)
    });
    $('.news-arrow-next').click(function(){
        $('.news-slider').slick('slickNext')
    });
    $('.news-arrow-prev').click(function(){
        $('.news-slider').slick('slickPrev')
    });
    $('.news-btn').click(function(){
        $('.news-more').addClass('active');
    });
    $('.news-more-close').click(function(){
        $('.news-more').removeClass('active');
    });
    $('.plan-btn').click(function(){
        $('.room').addClass('active');
        $('.room-close').addClass('active');
    });
    $('.room-close').click(function(){
        $('.room').removeClass('active');
        $('.room-close').removeClass('active');
    });
    $('.popup-open').click(function(){
       $('.popup').addClass('active');
    });
    $('.popup-close').click(function(){
        $('.popup').removeClass('active');
    });
});
$(document).mouseup(function (e) {
    var container = $(".popup");
    if (container.has(e.target).length === 0){
        container.removeClass('active');
    }
});
$(window).scroll(function(){
    if ($(this).scrollTop() > 50) {
        $('.header_fixed').addClass('active')
    } else {
        $('.header_fixed').removeClass('active')
    }
});