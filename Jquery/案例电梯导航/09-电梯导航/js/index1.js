$(function() {
    $(window).on('scroll', function() {
        var toolTop = $('.recommend').offset().top;
        // console.log(toolTop1);
        // var toolTop = $('.recommend').scrollTop();
        // console.log(toolTop);

        if ($(document).scrollTop() >= toolTop) {
            $('.fixedtool').fadeIn();
        } else {
            $('.fixedtool').fadeOut();
        }
        $('.fixedtool ul').on('click', 'li', function() {
            //获取对应li的索引号
            var index = $(this).index();
            var dis = $('.floor').children().eq(index).scrollTop();
            var offsetDis = $('.floor').children().eq(index).offset().top;
            console.log(offsetDis);
            $('body, html').animate({
                top: offsetDis
            })
        })
    })
})