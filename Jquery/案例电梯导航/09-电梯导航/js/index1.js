$(function() {
    var toolTop = $('.recommend').offset().top;
    toggleTool();

    function toggleTool() {

        if ($(document).scrollTop() >= toolTop) {
            $('.fixedtool').fadeIn();
        } else {
            $('.fixedtool').fadeOut();
        }
    }
    $(window).on('scroll', function() {
        toggleTool();

        // 获取每个li
        $('.fixedtool li').on('click', function() {
            //获取对应li的索引号
            var index = $(this).index();
            var offsetDis = $('.floor .w').eq(index).offset().top;

            //链式编程
            $(this).addClass('current').siblings().removeClass('current');
            // console.log(offsetDis);
            $('body, html').stop().animate({
                scrollTop: offsetDis //就是滚动多少距离
            })
        })
    })
})