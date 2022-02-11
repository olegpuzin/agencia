$(document).ready(function(){
    if (window.matchMedia('(min-width:768px)').matches) {
        $('.icon-play').click(function() {
            this.style.display = 'none';
            $('.youtube-laptop').css('display', 'block');
        });
    }else {
        $('.icon-play').click(function() {
            this.style.display = 'none';
            $('.youtube-mobile').css('display', 'block');
        });
    }
    $(document).ready(function() {
        $('.burger').click(function() {
            $('.burger').toggleClass('open-menu');
            $('.header_nav').toggleClass('open_nav');
        });
    });
});
