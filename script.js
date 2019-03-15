var figure = $(".first-video").hover( hoverVideo, hideVideo );

function hoverVideo(e) {  
    var isPlaying = $('video', this).prevObject.get(0).currentTime > 0 && !$('video', this).prevObject.get(0).paused && !$('video', this).prevObject.get(0).ended 
    && $('video', this).prevObject.get(0).readyState > 2;
    if (!isPlaying) {
        $('video', this).prevObject.get(0).play();
    }
}

function hideVideo(e) {
    $(".first-video").removeClass('first-video-full-screen').addClass('hero-item');
    $('video', this).prevObject.get(0).pause();
    $('video', this).prevObject.get(0).currentTime = '0';
}