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
        // 获取每个li
        $('.fixedtool li').on('click', function() {
            //获取对应li的索引号
            var index = $(this).index();
            var offsetDis = $('.floor .w').eq(index).offset().top;

            // console.log(offsetDis);
            $('body, html').stop().animate({
                scrollTop: offsetDis //就是滚动多少距离
            })
        })
    })
})