/*-----------------HOME PAGE MAP INIT----------------------------*/
var gyms = [
    {
        lat: 50.447914,
        lng:30.622192,
        title: 'Banda1',
        description: "<p>Banda1 text ...</p>",
        link: "#",
        rating: 2
    },
    {
        lat: 50.417914,
        lng:30.522192,
        title: 'Banda2',
        description: "<p>Banda2 text ...</p>",
        link: "#",
        rating: 4
    },
    {
        lat:  50.467914,
        lng:30.422192,
        title: 'Banda3',
        description: "<p>Banda3 text ...</p>",
        link: "#",
        rating: 2
    },
    {
        lat:  50.447914,
        lng:30.472192,
        title: 'Banda4',
        description: "<p>Banda4 text ...</p>",
        link: "#",
        rating: 2
    },
    {
        lat:  50.447914,
        lng:30.529192,
        title: 'Banda5',
        description: "<p>Banda5 text ... </p>",
        link: "#",
        rating: 2
    },
];
function initMap() {
    var image = {
        url: '/assets/media/img/map-marker.svg',
    };
    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 12,
        center: {lat: 50.447914, lng: 30.522192}
    });
    var infowindow = new google.maps.InfoWindow({
        content: ''
    });
    for (var i = 0; i <  gyms.length; i++) {
        var  gym = gyms[i];
        var marker = new google.maps.Marker({
            position: {lat: gym.lat, lng: gym.lng},
            map: map,
            icon: image,
            id: 'gym-' + i,
            title: gym.title,
            description: gym.description,
            link: gym.link,
            rating: gym.rating,
        });
        google.maps.event.addListener(marker, 'click', function() {
            infowindow.close();
            infowindow.setContent("<div class='gym-info'><h3>"+ this.title+"</h3><p>"+ this.rating +"</p> <p>"+ this.description +"</p><a href='"+ this.link +"'>></a></div>");
            infowindow.open(map, this);
        });
    }
}
/*----------------------------END----------------------------*/

$(document).ready(function () {
    bannerGreenBlockDraw();
    /*-----------------ADD HOME PAGE VIDEO----------------------------*/
    (function(){
        var windowWidth = $(window).width(),
        videoHeight = (windowWidth /16) * 9;
        $('#video__background').before(' <iframe width="'+ windowWidth +'" height="'+ videoHeight +'" src="https://www.youtube.com/embed/4B5sfE1fjLs?autoplay=1&mute=1&loop=1&playlist=4B5sfE1fjLs&controls=0" frameborder="0" allowfullscreen></iframe>');
    })();
    /*----------------END----------------------------*/

    function bannerGreenBlockDraw() {
        var banner = document.getElementById('video__background'),
            bannerWidth = $(window).width() / 2,
            bannerHeight = $('.video__wrapper').innerHeight(),
            bannerCurveTop = (bannerHeight / 2) - 55,
            bannerCurveBottom = (bannerHeight / 2) + 55,
            bannerCurvePoint = bannerWidth - 77,
            ctx = banner.getContext('2d');
        banner.width = bannerWidth;
        banner.height = bannerHeight;
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