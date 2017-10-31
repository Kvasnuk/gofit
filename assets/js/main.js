$(document).ready(function () {

    /* init video bachground*/
    if (window.location.pathname === "/" && $(window).width() >= 992) {
        getVideoSize();
        bannerGreenBlockDraw();
    }

    /*show  mobile menu */
    $('.mobile-menu__burger').click(function () {
        $(this).toggleClass('open');
        $('.b-header__menu ').toggleClass('open');
    });
    /*-----------------ADD HOME PAGE VIDEO----------------------------*/

    function getVideoSize() {
        var windowWidth = $(window).width(),
            videoHeight  = (windowWidth / 16) * 9;
        if (videoHeight > 859) {
            videoHeight = 860;
        }
        $('.video__description, .video__wrapper').height(videoHeight);
    };

    /*----------------END----------------------------*/
    $(window).resize(function () {
        getVideoSize();
        bannerGreenBlockDraw();
    });


    function bannerGreenBlockDraw() {
        var img = document.createElement('img');
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
        var pat = ctx.createPattern(img, "repeat");
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
        if ($(window).width() >= 1000) {
            var modalWin = 960,
                modalHeight = 540;
        } else {
            modalWin = $(window).width() - 50;
            modalHeight = (modalWin / 16 ) * 9;
            $('.gf-modal__dialog.video-dialog').css({'max-width': modalWin, 'height': modalHeight});
        }
        $('.video-modal-content').append(' <video id="modalVideo"  width="' + modalWin + '" height="' + modalHeight + '"   autoplay controls> <source src="/assets/media/video/london.mp4" type="video/mp4"> </video>');
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
        responsive: [
            {
                breakpoint: 991,
                settings: {
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 2,
                    centerMode: true,
                    dotsClass: 'custom_paging',
                    customPaging: function (slider, i) {

                        return (i + 1) + '/' + slider.slideCount;
                    }
                }
            },
            {
                breakpoint: 575,
                settings: {
                    slidesToShow: 1,
                    centerMode: true,
                    dotsClass: 'custom_paging',
                    customPaging: function (slider, i) {

                        return (i + 1) + '/' + slider.slideCount;
                    }
                }
            },


            // You can unslick at a given breakpoint now by adding:
            // settings: "unslick"
            // instead of a settings object
        ]
    });
    $('#stars-slider').slick({
        infinite: true,
        slidesToShow: 2,
        slidesToScroll: 1,
        dots: true,
        arrows: false,
    });
    $('#press-slider,#users-slider').slick({
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        dots: true,
        arrows: false,
    });

    $(document).click(function (e) {
        var container = $(".map-city-list");
        if (e.target.className == 'map-city') {
            container.fadeIn(300);
        } else {
            container.fadeOut(300);
        }
    });

    var windowCenter = function () {
        var windowHeight = $(window).height() / 2.5;
        return windowHeight
    }

    $("#simbol-vs").stick_in_parent({
        offset_top: windowCenter()
    });
    $(".b-compare__header-fix").stick_in_parent({});


    $('.b-compare__item').waypoint(function (direction) {
        if (direction === 'down') {
            $('.b-compare__item').removeClass('active');
            $(this.element).addClass('active');
        }
    }, {
        offset: windowCenter() + 120
    });

    $('.b-compare__item').waypoint(function (direction) {
        if (direction === 'up') {
            $('.b-compare__item').removeClass('active');
            $(this.element).addClass('active');
        }
    }, {
        offset: windowCenter()
    });

    $('.b-compare__header').waypoint(function (direction) {
        if (direction === 'up') {
            $('.b-compare__item').removeClass('active');
        }
    }, {
        offset: windowCenter() - 120
    });

    $('.b-compare__header').waypoint(function (direction) {
        if (direction === 'down') {
            $('.b-compare__header-fix').addClass('on');
        }
    }, {
        offset: -195
    });
    $('.b-compare__header').waypoint(function (direction) {
        if (direction === 'up') {
            $('.b-compare__header-fix ').removeClass('on');
        }
    }, {
        offset: -270
    });
    $('.play-animation').waypoint(function () {
        $(this.element).addClass('play');
    }, {
        offset: '58%'
    });


    $('.gf-modal__sm_close').click(function () {
        $(this).closest('.modal').modal('hide');
    })
    $('.mobile-app__btn').click(function (e) {
        e.preventDefault();
    });


    $('.ticket-modal').click(function () {
        $('.error_msg').remove();
        var activationCode = $('#ticket-input').val();
        if (activationCode == '') {
            $(this).closest('.b-ticket-code__form').after('<p class="error_msg"> Введите код активации</p>');
        } else {
            $('.gf-modal__ticket_code').val(activationCode);
            $('#gf-modal-ticket').modal('show');

        }

    });
    $('.send-ticket-code').click(function (e) {
        e.preventDefault();

    });


    $('.form-submit').click(function () {
        var dataContent = $(this).data('content');

        switch (dataContent) {
            case 'email':
                $('.error_msg').remove();
                var email = $('#inlineFormInputGroup');
                if (email.val().match(/^[0-9a-z-\.]+\@[0-9a-z-]{2,}\.[a-z]{2,}$/i)) {
                    $('.gf-modal__text_title').text('Мы сообщим Вам о доступности приложения');
                    $('.gf-modal__text_icon').attr('src', '/assets/media/img/modal-letter.svg');
                    $('.gf-modal__text_desc').html("Как только приложение станет доступно для скачивания, мы отправим Вам сообщение на email: <span >" + email.val() + "</span>");
                    $('#gf-modal-sm').modal('show');
                    email.val('');
                } else {
                    $(this).closest('.input-group').after('<p class="error_msg"> Введен неверный Е-mail</p>');
                }
                break;

            case 'phone':
                $('.error_msg').remove();
                var phone = $('#call-back-input');
                 if (phone.val().match(/^\+?([0-9]{2}?)\s?(\(?[0-9]{3}\)?)\s?[0-9]{3}-?[0-9]{2}-?[0-9]{2}$/i)) {
                    $('.gf-modal__text_title').text('Заявка на обратный звонок добавлена');
                    $('.gf-modal__text_icon').attr('src', '/assets/media/img/modal-phone.svg');
                    $('.gf-modal__text_desc').html("Вы успешно оставили завявку на обратный звонок. В ближайшее время мы перезвоним Вам по номеру:  <span >" + phone.val() + "</span>");
                    $('#gf-modal-sm').modal('show');
                    phone.val('');
                } else {
                    $(this).closest('.input-group').after('<p class="error_msg"> Введен неверный номер</p>');
                }
                break;
        }
    });
});