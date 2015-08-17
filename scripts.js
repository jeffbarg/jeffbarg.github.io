"use strict";
//jQuery is required to run this code
function type(letter) {
    var html = $('.name').html()
    $('.name').html(html + letter)
}

function delay(ms) {
    var deferred = Q.defer();
    setTimeout(deferred.resolve, ms);
    return deferred.promise;
}

$(document).ready(function() {

    scaleVideoContainer();

    initBannerVideoSize('.video-container .poster img');
    initBannerVideoSize('.video-container .filter');
    initBannerVideoSize('.video-container video');

    $(window).on('resize', function() {
        scaleVideoContainer();
        scaleBannerVideoSize('.video-container .poster img');
        scaleBannerVideoSize('.video-container .filter');
        scaleBannerVideoSize('.video-container video');
    });
    
    // let d = new Date();
    // let n = d.getTime();
    // $('.name').focus()
    // $('.name').keypress(function(event) {
    //     let n2 = event.timeStamp;

    //     let timeDifference = n2 - n;

    //     console.log('type(' + String.fromCharCode(event.keyCode) + ", "+ timeDifference + ")");
    // })

    delay(5477).then(function() { type("J"); return delay(5725 - 5477) })
    .then(function() { type("e"); return delay(5987 - 5725) } )
    .then(function() { type("f"); return delay(6132 - 5987) } )
    .then(function() { type("f"); return delay(6395 - 6132) } )
    .then(function() { type(" "); return delay(6980 - 6395) } )
    .then(function() { type("B"); return delay(7120 - 6980) } )
    .then(function() { type("a"); return delay(7331 - 7120) } )
    .then(function() { type("r"); return delay(7483 - 7331) } )
    .then(function() { type("g"); return delay(8780 - 7483) } )
    .then(function() { type(" "); return delay(9059 - 8780) } )
    .then(function() { type("<a href='https://github.com/jeffbarg/'><i class='icon icon-github'></i></a>"); return delay(11083 - 9059) } )
    .then(function() { type(" "); return delay(11389 - 11083) } )
    .then(function() { type("<a href='https://www.linkedin.com/in/jeffreybarg'><i class='icon icon-linkedin-square'></i>"); return delay(11400 - 11389) } )
    .then(function() { $('.blinker').remove(); })

    var isWebkit = 'WebkitAppearance' in document.documentElement.style
    if (!isWebkit) {
        console.log("Please use a Webkit-based browser for best performance here...")
    }
});

function scaleVideoContainer() {
    var height = $(window).height() + 5;
    var unitHeight = parseInt(height) + 'px';
    $('.homepage-hero-module').css('height',unitHeight);
}

function initBannerVideoSize(element) {

    $(element).each(function(){
        $(this).data('height', $(this).height());
        $(this).data('width', $(this).width());
    });

    scaleBannerVideoSize(element);
}

function scaleBannerVideoSize(element) {

    var windowWidth = $(window).width(),
    windowHeight = $(window).height() + 5,
    videoWidth,
    videoHeight;

    $(element).each(function(){
        var videoAspectRatio = $(this).data('height')/$(this).data('width');

        $(this).width(windowWidth);

        if(windowWidth < 1000){
            videoHeight = windowHeight;
            videoWidth = videoHeight / videoAspectRatio;
            $(this).css({'margin-top' : 0, 'margin-left' : -(videoWidth - windowWidth) / 2 + 'px'});

            $(this).width(videoWidth).height(videoHeight);
        }

        window.setTimeout(function() {
            $('.homepage-hero-module .video-container video').addClass('fadeIn animated');
        }, 500);
    });
}
