(function ($) {
    $(document).ready(function(){
        $('.multiple-items').slick({
            centerMode: true,
            centerPadding: '550px',
            slidesToShow: 1,
            dots: true,
            responsive: [
                {
                    breakpoint: 1500,
                    settings: {
                        arrows: true,
                        centerMode: false,
                        centerPadding: '450px',
                        slidesToShow: 1
                    }
                },
                {
                    breakpoint: 1045,
                    settings: {
                        arrows: false,
                        centerMode: true,
                        centerPadding: '-60px',
                        slidesToShow: 1
                    }
                },
                {
                    breakpoint: 768,
                    settings: {
                        arrows: false,
                        centerMode: true,
                        centerPadding: '40px',
                        slidesToShow: 3
                    }
                },
                    {
                    breakpoint: 600,
                    settings: {
                        arrows: false,
                        centerMode: true,
                        centerPadding: '40px',
                        slidesToShow: 1
                    }
                }
            ]
            
        });
    });
 
})(jQuery);