
$(document).ready(function() {
    $('#fullpage').fullpage({
        scrollBar:true,
        menu: '#myMenu',
        anchors: ['firstPage', 'secondPage', 'thirdPage'],
        onLeave: function(origin, index){
            var loadedSection = this;
            var thisIndex = index.index + 1;
            $('.ancors-row').eq(index.index).addClass('show').siblings().removeClass('show');
            setTimeout(function(){
                $('.left-line-current').text('0' + thisIndex);
            },300)

            var wow2 = new WOW(
                {
                    boxClass:     'wow2',      // animated element css class (default is wow)
                    animateClass: 'animated', // animation css class (default is animated)
                    live:         true,       // act on asynchronously loaded content (default is true)
                }
            );
            wow2.init();
        }
    });
    var wow = new WOW(
        {
            boxClass:     'wow',      // animated element css class (default is wow)
            animateClass: 'animated', // animation css class (default is animated)
            offset:       0,          // distance to the element when triggering the animation (default is 0)
            mobile:       true,       // trigger animations on mobile devices (default is true)
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
        fullpage_api.moveSlideRight();
    });
    $('.third-arrow-prev').click(function(){
        fullpage_api.moveSlideLeft();
    });
    $('.fourth-slider').slick({
        slidesToShow: 4,
        arrows: false
    });
    $('.about-slider').slick({
        slidesToShow: 1,
        arrows: false,
        asNavFor: '.about-bottom'
    });
    $('.about-bottom').slick({
        slidesToShow: 4,
        arrows: true,
        asNavFor: '.about-slider',
        focusOnSelect: true
    });
    $('.slider1').slick({
        slidesToShow: 1,
        vertical: true
    })
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
    $('.footer-btn').click(function () {
        fullpage_api.moveSectionDown();
    });
    $('.menu-open').click(function(){
       $('.menu').addClass('active');
       $('.menu-overlay').addClass('active');
       setTimeout(function(){
           $('.menu-close').addClass('active');
           $('.down-text').addClass('active');
        }, 500)
    });
    $('.menu-close').click(function(){
            $('.menu-close').removeClass('active');
            $('.down-text').removeClass('active');
        setTimeout(function(){
            $('.menu-overlay').removeClass('active');
        }, 500)
        setTimeout(function(){
            $('.menu').removeClass('active');
        }, 1000)
    });
});

