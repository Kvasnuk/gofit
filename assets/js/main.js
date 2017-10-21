/*-----------------HOME PAGE MAP INIT----------------------------*/

/*----------------------------END----------------------------*/

$(document).ready(function () {
    getVideoSize();
    bannerGreenBlockDraw();
    /*-----------------ADD HOME PAGE VIDEO----------------------------*/

    function getVideoSize(){
        var windowWidth = $(window).width(),
                 videoHeight = (windowWidth /16) * 9;
        $('.video__description, .video__wrapper').height( videoHeight );
        if($('#gofit-banner-video').length == 0){
            initVideoBanner(windowWidth,videoHeight);
        }else{
            $('#gofit-banner-video').width(windowWidth);
            $('#gofit-banner-video').height(videoHeight);
        }
    }
    function initVideoBanner(videoWidth,videoHeight){
        $('#video__background').before(' <iframe id="gofit-banner-video" width="'+ videoWidth +'" height="'+ videoHeight +'" src="https://www.youtube.com/embed/4B5sfE1fjLs?autoplay=1&mute=1&loop=1&playlist=4B5sfE1fjLs&controls=0" frameborder="0" allowfullscreen></iframe>');
    }

    /*----------------END----------------------------*/
$(window).resize(function(){
    getVideoSize();
    bannerGreenBlockDraw();
});
    function bannerGreenBlockDraw() {
        // var  img = document.createElement('img');
        // img.src = "/assets/media/img/patt-test.png";
        var banner = document.getElementById('video__background'),
            bannerWidth = $(window).width() / 2,
            bannerHeight =1 + ($(window).width() /16) * 9 ,
            bannerCurveTop = (bannerHeight / 2) - 55,
            bannerCurveBottom = (bannerHeight / 2) + 55,
            bannerCurvePoint = bannerWidth - 77,
            ctx = banner.getContext('2d');
        banner.width = bannerWidth;
        banner.height = bannerHeight;
        ctx.clearRect(0, 0,  banner.width,  banner.height );
        // var pat=ctx.createPattern(img,"repeat");
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
    }

});