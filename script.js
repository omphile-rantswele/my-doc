$(window).scroll(function () {
    if ($(this).scrollTop() > 200) {
    $('.navbar').fadeIn('slow').css('display', 'flex');
    } else {
    $('.navbar').fadeOut('slow').css('display', 'none');
    }
    });
$('.skill').waypoint(function ()
{
    $('.progress .progress-bar').each(function ()
    {
        $(this).css("width",
        $(this).attr("aria-valuenow") + '%');
    });
}, {offset: '80%'});

var portfolioIsotope = $('.portfolio-container').isotope({
    itemSelector: '.portfolio-item',
    layoutMode: 'fitRows'
    });
    $('#portfolio-flters li').on('click', function () {
    $("#portfolio-flters li").removeClass('active');
    $(this).addClass('active');
    
    portfolioIsotope.isotope({filter: $(this).data('filter')});
    });
    
    
    
    $(".testimonial-carousel").owlCarousel({
    autoplay: true,
    smartSpeed: 1500,
    dots: true,
    loop: true,
    items: 1
    });
    
    
    
    $(window).scroll(function () {
    if ($(this).scrollTop() > 200) {
    $('.back-to-top').fadeIn('slow');
    } else {
    $('.back-to-top').fadeOut('slow');
    }
    });
    $('.back-to-top').click(function () {
    $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
    return false;
    });
    