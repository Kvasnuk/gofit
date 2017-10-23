/*-----------------HOME PAGE MAP INIT----------------------------*/

/*----------------------------END----------------------------*/

$(document).ready(function () {
    getVideoSize();
    bannerGreenBlockDraw();
    /*-----------------ADD HOME PAGE VIDEO----------------------------*/

    function getVideoSize() {
        var videoContainerHeight = '';
        var windowWidth = $(window).width(),
            videoHeight =  videoContainerHeight = (windowWidth / 16) * 9;
        if (videoHeight > 879) {
                videoHeight = 860;
        }
        $('.video__description, .video__wrapper').height(videoHeight);
        if ($('#gofit-banner-video').length == 0) {
            initVideoBanner('gofit-banner-video', windowWidth, videoContainerHeight, 0);
        } else {
            $('#gofit-banner-video').width(windowWidth);
            $('#gofit-banner-video').height(videoHeight);

        }
    };
    function initVideoBanner(videoID, videoWidth, videoHeight, videoControls) {
        $('#video__background').before(' <iframe id="' + videoID + '" width="' + videoWidth + '" height="' + videoHeight + '" src="https://www.youtube.com/embed/4B5sfE1fjLs?autoplay=1&mute=1&loop=1&playlist=4B5sfE1fjLs&controls=' + videoControls + '" frameborder="0" allowfullscreen></iframe>');
    }

    /*----------------END----------------------------*/
    $(window).resize(function () {
        getVideoSize();
        bannerGreenBlockDraw();
    });
    function bannerGreenBlockDraw() {
        var  img = document.createElement('img');
        img.src = "/assets/media/img/pattern-1.svg";
        var banner = document.getElementById('video__background'),
            bannerWidth = $(window).width() / 2,
            bannerHeight = 1 + ($(window).width() / 16) * 9;
        if (bannerHeight > 860) {
            bannerHeight = 860;
        }
        var bannerCurveTop = (bannerHeight / 2) - 55,
            bannerCurveBottom = (bannerHeight / 2) + 55,
            bannerCurvePoint = bannerWidth - 77;

        var ctx = banner.getContext('2d');
        banner.width = bannerWidth;
        banner.height = bannerHeight;
        ctx.clearRect(0, 0, banner.width, banner.height);
        var pat=ctx.createPattern(img,"repeat");
        ctx.beginPath();
        ctx.moveTo(0, 0);
        ctx.lineTo(bannerWidth, 0);
        ctx.lineTo(bannerWidth, bannerCurveTop);
        ctx.bezierCurveTo(bannerCurvePoint, bannerCurveTop, bannerCurvePoint, bannerCurveBottom, bannerWidth, bannerCurveBottom);
        ctx.moveTo(bannerWidth, bannerCurveBottom);
        ctx.lineTo(bannerWidth, bannerHeight);
        ctx.lineTo(0, bannerHeight);
        ctx.lineTo(0, 0);
        ctx.fillStyle = 'rgba(29, 208, 186, 0.98)';
        ctx.strokeStyle = "transparent";
        ctx.fill();
        ctx.stroke();
        ctx.beginPath();
        ctx.moveTo(0, 0);
        ctx.lineTo(bannerWidth, 0);
        ctx.lineTo(bannerWidth, bannerCurveTop);
        ctx.bezierCurveTo(bannerCurvePoint, bannerCurveTop, bannerCurvePoint, bannerCurveBottom, bannerWidth, bannerCurveBottom);
        ctx.moveTo(bannerWidth, bannerCurveBottom);
        ctx.lineTo(bannerWidth, bannerHeight);
        ctx.lineTo(0, bannerHeight);
        ctx.lineTo(0, 0);
        ctx.fillStyle = pat;
        ctx.strokeStyle = "transparent";
        ctx.fill();
        ctx.stroke();
    }

    $('.video__play').click(function (e) {
        e.preventDefault();
        $('.video-modal-content').append(' <iframe id="modalVideo" width="1200" height="675" src="https://www.youtube.com/embed/4B5sfE1fjLs?autoplay=1&mute=0&loop=1&playlist=4B5sfE1fjLs&controls=1" frameborder="0" allowfullscreen></iframe>');
        $('#videoModal').modal('show');
    });
    $('.close-modal,#videoModal').click(function () {
        $('#videoModal').modal('hide');
        $('#modalVideo').remove();
    });
    $('.video__scrollTo').click(function (e) {
        e.preventDefault();
        $('html, body').animate({
            scrollTop: $("#map-gyms").offset().top
        }, 1000);
    });
    $('#popular-activities-slider, #popular-gyms-slider').slick({
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        dots: true,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 4000,
    });

// $('.b-compare__simbol').waypoint(function(){
//     $('.b-compare__simbol').toggleClass('fixed');
//     {
//         offset: function() {
//             return $.waypoints('viewportHeight') / 2 - $(this).outerHeight();
//         }
//     }
// });

    // $('#simbol-vs').waypoint(function() {
    //         $('.b-compare__simbol').toggleClass('fixed');
    // }, {
    //     offset: '50%'
    // });

    $('.b-compare__title').waypoint(function () {
        $('.b-compare__header').toggleClass('fixed');
        $('.b-compare__wrapper').toggleClass('offset-top');
    }, {
        offset: '-250px'
    });
 $('.price-item').waypoint(function () {
        $('.b-compare__header').toggleClass('hidden');
    }, {
        offset: '100px'
    });

     $('.b-compare__header').waypoint(function (direction) {
        if (direction === 'down') {
            $('.b-compare__simbol').addClass('fixed');
        } else if (direction === 'up') {
            $('.b-compare__simbol').removeClass('fixed');
            $('.b-compare__item').removeClass('active');
        }
    }, {
        offset: '45%'
    });

    $('.last-item').waypoint(function (direction) {
        if (direction === 'down') {
            $('.b-compare__simbol').addClass('bottom');
        } else if (direction === 'up') {
            $('.b-compare__simbol').removeClass('bottom');
        }
    }, {
        offset: '60%'
    });

    $('.b-compare__item').waypoint(function (direction) {
        if (direction === 'down') {
            $('.b-compare__item').removeClass('active');
            $(this.element).addClass('active');
        }
    }, {
        offset: '58%'
    });
    $('.b-compare__item').waypoint(function (direction) {
        if (direction === 'up') {
            $('.b-compare__item').removeClass('active');
            $(this.element).addClass('active');
        }
    }, {
        offset: '45%'
    });
    $('.gf-modal__sm_close').click(function () {
        $(this).closest('.modal').modal('hide');
    })
    $('.mobile-app__btn').click(function (e) {
        e.preventDefault();
    });
    $('.form-submit').click(function () {
        var dataContent = $(this).data('content');

        switch(dataContent) {
            case 'email':
                $('.error_msg').remove();
                var email = $('#inlineFormInputGroup');
                if (email.val().match(/^[0-9a-z-\.]+\@[0-9a-z-]{2,}\.[a-z]{2,}$/i)) {
                    $('.gf-modal__text_title').text('Мы сообщим Вам о доступности приложения');
                    $('.gf-modal__text_icon').attr('src','/assets/media/img/modal-letter.svg');
                    $('.gf-modal__text_desc').html("Как только приложение станет доступно для скачивания, мы отправим Вам сообщение на email: <span >" +email.val() + "</span>");
                    $('#gf-modal-sm').modal('show');
                    email.val('');
                } else {
                    $(this).closest('.input-group').after('<p class="error_msg"> Введен неверный Е-mail</p>');
                }
                break;

            case 'phone':
                $('.error_msg').remove();
                var phone = $('#call-back-input');
                if (phone.val().match(/^(\+\d{1,2}\s)?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/i)) {
                    $('.gf-modal__text_title').text('Заявка на обратный звонок добавлена');
                    $('.gf-modal__text_icon').attr('src','/assets/media/img/modal-phone.svg');
                    $('.gf-modal__text_desc').html("Вы успешно оставили завявку на обратный звонок. В ближайшее время мы перезвоним Вам по номеру:  <span >" +phone.val() + "</span>");
                    $('#gf-modal-sm').modal('show');
                    phone.val('');
                } else {
                    $(this).closest('.input-group').after('<p class="error_msg"> Введен неверный номер</p>');
                }
                break;
            case 'success':
                break;
            default:

                break;
        }
    });

});