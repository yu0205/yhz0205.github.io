/**
 * Created by yzh on 2016/9/9.
 */

$(function () {
    $('#head').css({paddingTop: 15, paddingBottom: 15});
    $('#btn').hide();
    $('#btn').click(function () {
        $('html,body').animate({scrollTop: 0});
    });
    $(window).scroll(function () {
        if ($(this).scrollTop() >= 200) {
            $('#btn').fadeIn();
            $('#head').stop().animate({paddingTop: 0, paddingBottom: 0}, 400);
        } else {
            $('#btn').fadeOut();
            $('#head').stop().animate({paddingTop: 15, paddingBottom: 15}, 400);
        }
    });
});
