$(function () {
   let myGrid = $('.works').isotope({
        itemSelector: '.work',
        percentPosition: true,
        masonry: {
            columnWidth: '.grid-sizer',
            gutter: '.gutter-sizer'
        }
    })

    $('.filter__link').on('click',function(e){
        e.preventDefault();

        $('.filter__link').removeClass('filter__link--active');
        $(this).addClass('filter__link--active');
        
        let myFilter = $(this).attr('data-filter');
        
        // filter = filter == '*' ? filter : '.' + filter;
        
        if (myFilter !== '*') {
            myFilter = '.' + myFilter; 
        }
        console.log(myFilter)

        myGrid.isotope ({
            filter: myFilter
        })
    })

    // Sliders

    $('.slider').slick({
        arrows: false,
        dots: true
    });

    $('.slider-1').slick({
        arrows: false,
        dots: true
    });

    // Form Validate
    var name = $('.form__username');
    var email = $('.form__email');
    var textAr = $('textarea');

    $('.error-div').hide();

    $('.form__btn').on('click', function(e){
        emailVldtn();
        emptyVldtn(textAr);
        emptyVldtn(name);
        console.log()
    })

    $('[type="text"], textarea').on("focus", function() {
        $(this).removeClass("err-border")
        $(this).next().fadeOut();
        console.log(this)
    })
    
    function emptyVldtn(elem) {
        if (elem.val() == '') {
            elem.addClass("err-border");
            elem.next().fadeIn();
            event.preventDefault();
        }
    }

    function emailVldtn() {
        if (!email.val().includes(".") || !email.val().includes("@")) {
            email.addClass("err-border");
            email.next().fadeIn();
            event.preventDefault();   
        } 
    }
    // Scroll Up

    var scrollBtn = $('.scrollup');
    scrollBtn.fadeOut();

// fadeIn не работает - не получает координаты
    $(window).scroll(function () {
        // console.log($(window).scrollTop())

        if ($(window).scrollTop() < 937) {
            scrollBtn.fadeOut();
        } else {
            scrollBtn.fadeIn();
        }
    })

});