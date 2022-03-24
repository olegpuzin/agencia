$(document).ready(function(){
    if (window.matchMedia('(min-width:768px)').matches) {
        $('.video_play_icon').click(function() {
            this.style.display = 'none';
            $('.video_play_youtube-laptop').css('display', 'block');
        });
    }else {
        $('.video_play_icon').click(function() {
            this.style.display = 'none';
            $('.video_play_youtube-mobile').css('display', 'block');
        });
    }
    $('.header_burger').click(function() {
        $('.header_burger').toggleClass('open-menu');
        $('.header_nav').toggleClass('open_nav');
    });
});
